Ext.define('ThDemoConf.view.theater.placemark.PlacemarkGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-placemark-placemarkgrid',

  mixins: [
    'ThDemoConf.mixin.PlacemarkMixin'
  ],

  onRowDblClick(viewtable, record) {
    const me = this;
    const vm = me.getViewModel();
    const panel = me.getView().up();
    panel.suspendLayouts()

    const messageGrid = panel.down('#messageGrid');
    const messagesStore = me._loadMessagesStore(record);
    messageGrid.setStore(messagesStore);

    const thresholdGrid = panel.down('#thresholdGrid');
    const thresholdStore=me._updateThresholds(record, vm);
    thresholdGrid.setStore(thresholdStore);

    me._updatePlacemarkDetail(record, panel, vm);
    panel.resumeLayouts()
  },

  onReload() {
    this.getView().down('grid').getStore().load();
  },

  onReloadPlacemarks() {
    Ext.Msg.wait('Please wait...', 'Loading placemarks');
    Ext.Ajax.request({
      url: 'http://localhost:8096/loadPlacemarks'
    }).then(function (response, opts) {
        Ext.Msg.hide()
        const msg = Ext.decode(response.responseText);
        const store = Ext.getStore('Placemarks');
        store.load(function () {
          Ext.Msg.alert('Success', msg.message);
        })
      },
      function (response, opts) {
        Ext.Msg.hide()
        const msg = 'server-side failure with status code ' + response.status;
        Ext.Msg.alert('Success', msg);
      });
  },


});
