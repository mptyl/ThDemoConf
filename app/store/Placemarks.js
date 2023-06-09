Ext.define('ThDemoConf.store.Placemarks', {
  extend: 'Ext.data.Store',
  alias:'store.placemarks',

  requires: [
    'ThDemoConf.model.Placemark',
    'Ext.data.proxy.Direct',
    'ThDemoConf.DirectAPI',
    'Ext.data.reader.Json',
    'Ext.data.writer.Json'
  ],

  constructor: function (cfg) {
    const me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'Placemarks',
      autoLoad: false,
      model: 'ThDemoConf.model.Placemark',
      proxy: {
        type: 'direct',
        api: {
          read: placemarkController.read,
        },
        reader: {
          type: 'json',
          messageProperty: 'Errore nella lettura del file Placemark',
          rootProperty: 'records',
          listeners: {
            exception: {
              fn: me.onJsonException,
              scope: me
            }
          }
        },
        listeners: {
          exception: {
            fn: me.onDirectException,
            scope: me
          }
        }
      }
    }, cfg)]);
  },

  onJsonException: function (reader, response, error, eOpts) {
    const me = this;
    Ext.Msg.alert('Errore nell\'accesso alla tabella Placemark', JSON.parse(response.responseText).message,
      function () {
        me.rejectChanges();
      }, me);
  },

  onDirectException: function (proxy, response, operation, eOpts) {
    const me = this;
    console.log(operation);
    Ext.Msg.alert('Errore Direct nell\'accesso alla tabella  Placemark', operation.getError(),
      function () {
        me.rejectChanges();
      }, me);
  }
});
