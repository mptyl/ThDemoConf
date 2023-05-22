/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ThDemoConf.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onLogout() {

    // Remove the localStorage key/value
    localStorage.removeItem('TutorialLoggedIn');

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window

    //Ext.widget('login');
    Ext.widget('login');

  },

  onDownloadAttributes() {
    const vm = this.getViewModel();
    const tdcServer = vm.get('tdcServer');
    Ext.Ajax.request({
      url: tdcServer,
      method: 'GET',
      success: function (response, opts) {
        Ext.Msg.alert(
          'OK', response.responseText
        );
      },
      failure: function (response, opts) {
        let message;
        if (response.status > 0) {
          const status = response.status;
          const text = response.statusText;
          const obj = Ext.decode(response.responseText);
          message = 'Status: <b>' + status + '</b><br/>Text: <b>' + text + '</b><br/>Message: <b>' + obj['error_description'] + '</b';
        } else
          message = 'Errore nell\'accesso al servizio'
        Ext.Msg.alert(
          'Failure', message
        );
      }
    })
  },
});
