Ext.define('ThDemoConf.view.theater.placemark.PlacemarkGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-placemark-placemarkgrid',


  onRowDblClick(viewtable, record) {
    const me = this;
    const vm = me.getViewModel();
    const panel = me.getView().up();
    panel.suspendLayouts()
    const attributeDetail = panel.down('#placemarkPanel');
    attributeDetail.update(record);
    vm.set('placemarkGridHidden', true);
    vm.set('placemarkFormHidden', false);
    vm.set('placemarkName', record.get('name'));
    panel.resumeLayouts()
  },

  onReload() {
    this.getView().down('grid').getStore().load();
  },

});
