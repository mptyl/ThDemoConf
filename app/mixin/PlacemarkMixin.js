Ext.define('ThDemoConf.mixin.PlacemarkMixin', {
  extend: 'Ext.Mixin',

  _updatePlacemarkDetail(record, panel, vm) {
    let statusThresholds = record.data.statusThresholds;
    for (let key in statusThresholds) {
      let pollutant = statusThresholds[key];
      if (pollutant.levels) {
        for (let level in pollutant.levels) {
          if (!pollutant.levels[level]) {
            delete pollutant.levels[level];
          } else {
            for (let field in pollutant.levels[level]) {
              if (pollutant.levels[level][field] === null) {
                delete pollutant.levels[level][field];
              }
            }
          }
        }
      }
    }
    //const placemarkDetail = panel.down('#placemarkDetail');
    //placemarkDetail.update(record);
    vm.set('placemarkGridHidden', true);
    vm.set('placemarkFormHidden', false);
    vm.set('placemarkName', record.get('description'));
    vm.set("placemarkRecord", record);
    vm.set("createdAt", this._trasformDate(record.get('createdAt')));
    vm.set("updatedAt", this._trasformDate(record.get('updatedAt')));
  },

  _updateThresholds(record, vm) {
    const me = this;
    const store = Ext.create('ThDemoConf.store.Thresholds');
    const thresholds = record.get('statusThresholds');
    for (let key in thresholds) {
      if (key) {
        const levels = thresholds[key].levels;
        for (let level in levels) {
          if (levels[level]) {
            const threshold = thresholds[key];
            const newThreshold = Ext.create('ThDemoConf.model.Threshold');
            newThreshold.set('message', key);
            newThreshold.set('messageType', threshold.type);
            newThreshold.set('level', level);
            newThreshold.set('operator', levels[level].operator);
            newThreshold.set('value', levels[level].value);
            newThreshold.set('min', levels[level].min);
            newThreshold.set('max', levels[level].max);
            newThreshold.commit()
            store.add(newThreshold);
          }
        }
      }
    }
    return store;
  },

  _loadMessagesStore(record) {
    const me = this;
    const availableKeys = me._loadAvailableKeys(record);
    const payload = record.get('payload');

    const store = Ext.create('ThDemoConf.store.Messages');
    //store.removeAll();

    // Per ogni availableKey:
    availableKeys.forEach(function (availableKey) {
      // 1. Creo un nuovo record di tipo Message con key, e il resto bianco
      const newMessage = Ext.create('ThDemoConf.model.Message');
      const key = availableKey.levelKey;
      newMessage.set('key', key);
      newMessage.set('statusThresholds', record.get('statusThresholds'));
      // Se in payload c'è una key equivalente a quella dell'availableKey allora aggiungo i valori attuali
      if (payload) {
        const payloadValue = payload.find(function (item) {
          return item.key === key;
        });
        if (payloadValue) {
          //1.1. Imposto  il presentValue,presentStatus, value e status sulla base del payload
          newMessage.set('presentValue', payloadValue.value);
          newMessage.set('value', payloadValue.value);
          // 1.2 Calcolo lo status derivante dal valore comparato con i threshold
          // TODO: da implementare
        }
      }
      //2. Aggiungo il record al messagesStore
      store.add(newMessage);
    })
    // 3. Ritorno il messagesStore  con i record creati e aggiunti  al punto 2
    store.each(function (rec) {
      const presentStatus = me._getStatus(record.get('statusThresholds'), rec.get('key'), rec.get('presentValue'));
      const status = me._getStatus(record.get('statusThresholds'), rec.get('key'), rec.get('value'));
      rec.set('presentStatus', presentStatus);
      rec.set('status', status);
      rec.commit();
      me._getStatusThresholdValues(rec.get('key'), record.get('statusThresholds'));
    });
    return store;
  },

  /**
   * Espande lo statusThresholds e restituisce un array di oggetti con le chiavi e i tipi
   *
   * @param record
   * @returns {*[]}
   * @private
   */
  _loadAvailableKeys(record) {
    const availableKeys = [];
    const statusThresholds = record.get('statusThresholds');
    for (const key in statusThresholds) {
      if (statusThresholds.hasOwnProperty(key)) {
        const threshold = statusThresholds[key];
        const level = {
          levelKey: key,
          type: threshold.type,
        };
        availableKeys.push(level);
      }
    }
    return availableKeys;
  }
  ,

  /**
   * Ritorna il lo stato (string) sulla base dei threshold, della chiave e del valore.
   * Null se non è possibile determinare lo stato
   *
   * @param statusThresholds
   * @param key
   * @param value
   * @returns {string|null}
   * @private
   */
  _getStatus(statusThresholds, key, value) {
    if (!statusThresholds.hasOwnProperty(key)) {
      return null; // Return some default status or null
    }

    let thresholds = statusThresholds[key].levels;

    for (let level in thresholds) {
      let threshold = thresholds[level];
      let result = false;
      if (threshold) {
        switch (threshold.operator) {
          case 'eq':
            result = value === threshold.value;
            break;
          case 'neq':
            result = value !== threshold.value;
            break;
          case 'gt':
            result = value > threshold.value;
            break;
          case 'gte':
            result = value >= threshold.value;
            break;
          case 'lt':
            result = value < threshold.value;
            break;
          case 'lte':
            result = value <= threshold.value;
            break;
          case 'between':
            result = value >= threshold.min && value <= threshold.max;
            break;
        }
      }

      if (result) {
        return level;
      }
    }
    return null; // If no matching status is found, return null or some default status
  }
  ,

  /**
   * Da chiamare per ogni key dello store
   *
   * @param key
   * @param statusThresholds
   * @returns {Ext.data.Store|null}
   */
  _getStatusThresholdValues(key, statusThresholds) {
    const threshold = statusThresholds[key];
    let data = [];

    if (threshold) {
      const {type, levels} = threshold;
      if (type === 'string' && levels && Object.keys(levels).length > 0) {
        data = Object.values(levels).filter(level => level != null).map(level => ({
          id: level.value,
          name: level.value
        }));
      } else if (type === 'boolean') {
        data = [
          {id: 'true', name: 'True'},
          {id: 'false', name: 'False'}
        ];
      }
    }
    if (data.length > 0) {
      return Ext.create('Ext.data.Store', {
        fields: ['id', 'name'],
        data: data
      });
    } else {
      return null;
    }
  },

  _trasformDate(dateString) {
    const dateObj = new Date(dateString); // parse string to Date object
    return Ext.Date.format(dateObj, 'd/m/Y H:i:s');
  },

  renderMessageColumn(value, metaData, record, rowIndex, colIndex, store) {
    let prevRecord = rowIndex > 0 ? store.getAt(rowIndex - 1) : null;
    if (prevRecord && prevRecord.get('message') === value) {
      return null
    }
    return value;
  },

  renderMessageTypeColumn(value, metaData, record, rowIndex, colIndex, store) {
    let prevRecord = rowIndex > 0 ? store.getAt(rowIndex - 1) : null;
    if (prevRecord && prevRecord.get('messageType') === value && prevRecord.get('message') === record.get('message')) {
      return null
    }
    return value;
  }
})
;
