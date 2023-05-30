Ext.define('ThDemoConf.view.theater.mainpanel.TheaterMenuController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.theater-mainpanel-theatermenu',

  onButtonTap(button) {
    this.redirectTo('theater/' + button.getItemId(),{
      force : true,
    })
  }

});
