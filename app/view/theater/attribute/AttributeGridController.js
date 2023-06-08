Ext.define('ThDemoConf.view.theater.attribute.AttributeGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-attribute-attributegrid',

  mixins: [
    'ThDemoConf.mixin.PlacemarkMixin'
  ],

  onRowDblClick(viewtable, record) {
    const me = this;
    const vm = me.getViewModel();
    const panel = me.getView().up();
    panel.suspendLayouts()

    // let statusThresholds = record.data.statusThresholds;
    // for (let key in statusThresholds) {
    //   let pollutant = statusThresholds[key];
    //   if (pollutant.levels) {
    //     for (let level in pollutant.levels) {
    //       if (!pollutant.levels[level]) {
    //         delete pollutant.levels[level];
    //       } else {
    //         for (let field in pollutant.levels[level]) {
    //           if (pollutant.levels[level][field] === null) {
    //             delete pollutant.levels[level][field];
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    vm.set('attributeGridHidden', true);
    vm.set('attributeFormHidden', false);
    vm.set('attributeName', record.get('name'));
    vm.set('attributeRecord', record);
    vm.set("createdAt", this._trasformDate(record.get('createdAt')));
    vm.set("updatedAt", this._trasformDate(record.get('updatedAt')));
    const thresholdGrid = panel.down('#thresholdGrid');
    if(thresholdGrid){
      const thresholdStore = me._updateThresholds(record, vm);
      thresholdGrid.setStore(thresholdStore);
    }

    panel.resumeLayouts()
  },

  onReloadAttributes() {
    const me=this;
    Ext.Ajax.request({
      url: 'http://localhost:8096/loadAttributes'
    }).then(function(response, opts) {
        const msg = Ext.decode(response.responseText);
        const store=Ext.getStore('Attributes');
        store.load(function(){
          Ext.Msg.alert('Success', msg.message);
        })
      },
      function(response, opts) {
        const msg='server-side failure with status code ' + response.status;
        Ext.Msg.alert('Success', msg);
      });
  },

  onReload() {
    this.getView().down('grid').getStore().load();
  },


});
