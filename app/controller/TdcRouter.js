Ext.define('ThDemoConf.controller.TdcRouter', {
    extend: 'Ext.app.Controller',

  mixins: [
    'Ext.route.Mixin'
  ],

  refs: {
    contentPanel: '#contentPanel',
    theaterContentPanel:'#theaterMainPanel',
    // azdContentPanel:'#azdContentPanel',
    // avContentPanel:'#avContentPanel',
    // asrContentPanel:'#asrContentPanel',
    // admContentPanel:'#admContentPanel',
    menu: '#menu'
  },

  routes: {
    ':xtype': {
      action: 'activateMainRoute'
    },
    'theater/:xtype': {
      action: 'activateTheaterRoute'
    },
    // 'azd/:xtype': {
    //   action: 'activateAzddestRoute'
    // },
    // 'av/:xtype': {
    //   action: 'activateAutovalRoute'
    // },
    // 'asr/:xtype': {
    //   action: 'activateAssessorRoute'
    // },
    // 'adm/:xtype': {
    //   action: 'activateAdminRoute'
    // },
  },

  activateMainRoute(tipo){
      console.log('activate '+tipo+'Panel')
      this.getContentPanel().layout.setActiveItem(tipo+'Panel');
  },

  activateTheaterRoute(tipo){
    console.log('activate '+tipo+'Panel')
    const mainPanel=this.getContentPanel();
    mainPanel.layout.setActiveItem('theaterMainPanel');
    this.getTheaterContentPanel().layout.setActiveItem(tipo+'Panel');
  },

  // activateAzddestRoute(xtype){
  //   this.getContentPanel().layout.setActiveItem('azdMainPanel');
  //   this.getAzdContentPanel().layout.setActiveItem(xtype+'Panel');
  // },
  //
  // activateAutovalRoute(xtype){
  //   this.getContentPanel().layout.setActiveItem('avMainPanel');
  //   this.getAvContentPanel().layout.setActiveItem(xtype+'Panel');
  // },
  //
  // activateAssessorRoute(xtype){
  //   this.getContentPanel().layout.setActiveItem('asrMainPanel');
  //   this.getAsrContentPanel().layout.setActiveItem(xtype+'Panel');
  // },
  //
  // activateAdminRoute(xtype){
  //   this.getContentPanel().setActiveItem('admMainPanel');
  //   this.getAdmContentPanel().setActiveItem(xtype+'Panel');
  // }

});
