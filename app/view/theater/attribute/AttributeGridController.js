Ext.define('ThDemoConf.view.theater.attribute.AttributeGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-attribute-attributegrid',

  onRowDblClick(viewtable, record) {
    const me = this;
    const vm = me.getViewModel();
    const panel = me.getView().up();
    panel.suspendLayouts()
    const attributeDetail = panel.down('#attributePanel');
    attributeDetail.update(record);
    vm.set('attributeGridHidden', true);
    vm.set('attributeFormHidden', false);
    vm.set('attributeName', record.get('name'));
    panel.resumeLayouts()
  },

  onReload() {
    this.getView().down('grid').getStore().load();
  },


});
