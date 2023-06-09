Ext.define('ThDemoConf.view.theater.placemark.PlacemarkFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-placemark-placemarkform',

  mixins: [
    'ThDemoConf.mixin.PlacemarkMixin'
  ],

  onBackToList() {
    const me = this;
    const vm = me.getViewModel();
    const panel = me.getView().up();
    panel.suspendLayouts()
    vm.set('placemarkGridHidden', false);
    vm.set('placemarkFormHidden', true);
    panel.resumeLayouts()
  },

  onSendMessages(button) {
    const me = this;
    const vm = me.getViewModel();
    const grid = button.up().up().down('#messageGrid');
    const store = grid.getStore();
    const tdcServer = vm.get('tdcServer');
    const placemark = vm.get('placemarkRecord').get('publicId');
    const messagesObject = me._prepareListOfMessages(placemark, store)
    Ext.Ajax.request({
      url: tdcServer + 'sendMessages',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      jsonData: messagesObject,
      success: function (response, opts) {
        const toolbar = button.up()
        const placemarkForm = toolbar.up();
        const placemarkPanel = placemarkForm.up();
        const overMyPanel = placemarkPanel.up();
        const gridPanel = overMyPanel.down('placemark-grid');
        const m2grid = gridPanel.down('#placemarkGrid');
        const placemarkStore = m2grid.getStore();
        placemarkStore.reload();
        store.each(function (record) {
          record.set('presentValue', record.get('value'))
          record.set('presentStatus', record.get('status'));
          record.commit();
        })

        // me._updatePlacemarkDetail(record, placemarkPanel, vm);
        // const messageGrid=placemarkForm.down('#messageGrid');
        // const messageStore=messageGrid.getStore();
        // messageStore.reload();
        Ext.Msg.alert('Success', 'Messages sent successfully');
      },
      failure: function (response, opts) {
        if (response.status === 401)
          keycloak.login();
        // Handle the failed response here
        Ext.Msg.alert('Failure', 'Server-side failure with status code ' + response.status);
      }
    });
  },

  statusRenderer(value) {
    let color;
    switch (value) {
      case 'null':
        color = 'gray';
        break;
      case 'danger':
        color = 'red';
        break;
      case 'warning':
        color = 'yellow';
        break;
      case 'success':
        color = 'green';
        break;
    }
    return `<div style="background-color:${color}; width:100%; height:100%;">&nbsp;</div>`;
  },

  onBeforeEdit(editor, context) {
    const me = this;
    var record = context.record;
    var column = context.column;
    if (column.dataIndex === 'value') {
      let valueFieldStore = me._getStatusThresholdValues(record.get('key'), record.get('statusThresholds'));
      if (valueFieldStore) {
        column.setEditor({
          xtype: 'combobox',
          store: valueFieldStore,
          displayField: 'name',
          valueField: 'id',
          allowBlank: false,

        });
      } else {
        column.setEditor({
          xtype: 'textfield',
          allowBlank: false
        });
      }
    }
  },

  onEdit(editor, context) {
    const me = this;
    const record = context.record;
    const newValue = context.value;
    const statusThresholds = record.get('statusThresholds');
    const key = record.get('key');
    const status = me._getStatus(statusThresholds, key, newValue);
    record.set('status', status);
    record.commit()
  },

  /**
   * Returns the content of the gridStore as array of objects
   *
   * @param store
   * @returns {*}
   * @private
   */
  _prepareListOfMessages(placemarkValue, store) {
    const resultObject = {
      name: placemarkValue, // set placemark value here
      data: []
    };
    store.each(function (record) {
      const key = record.get('key');
      const value = record.get('value');
      resultObject.data.push({key: key, value: value});
    });
    return resultObject
  },

  onShowMap(button) {
    console.log('onShowMap')
    const vm = this.getViewModel();
    let placemarkRecord = vm.get('placemarkRecord')
    let geometry = placemarkRecord.get('geometry');
    let coordinates = geometry.coordinates

    let latitude = coordinates[0];
    let longitude = coordinates[1];
  }
});

