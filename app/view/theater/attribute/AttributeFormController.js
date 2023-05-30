Ext.define('ThDemoConf.view.theater.attribute.AttributeFormController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-attribute-attributeform',


  onBackToList() {
    const me = this;
    const vm = me.getViewModel();
    const panel = me.getView().up();
    panel.suspendLayouts()
    vm.set('attributeGridHidden', false);
    vm.set('attributeFormHidden', true);
    panel.resumeLayouts()
  }

});
