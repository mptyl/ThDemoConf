Ext.define('ThDemoConf.view.theater.mainpanel.TheaterPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.theater-mainpanel-theaterpanel',

  router:{
      'theaterMain/:selection':{
        action:'onMenuSelection'
      }
  },

  onMenuSelection(selection){
  },

});
