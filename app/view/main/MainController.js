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
    Ext.widget('login');

  },

  onRefresh() {

    // Remove the localStorage key/value
    localStorage.removeItem('TutorialLoggedIn');

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
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

  // renewToken() {
  //   const renewToken = localStorage.getItem('RefreshToken');
  //   Ext.Ajax.request({
  //     url: 'http://localhost:8086/renewToken',
  //     method: 'POST',
  //     params: {
  //       renewToken: renewToken
  //     },
  //     success: function (response) {
  //       const result = Ext.decode(response.responseText);
  //       if (result && result.access_token) {
  //         const token = result.access_token;
  //         const refreshToken = result.refresh_token;
  //         console.log('nuovo token');
  //         console.log(token);
  //         console.log('nuovo refresh token');
  //         console.log(refreshToken);
  //         Ext.Ajax.setDefaultXhrHeader({
  //           'Authorization': 'Bearer ' + token
  //         });
  //         localStorage.setItem("RefreshToken", refreshToken);
  //       }
  //     },
  //     failure: function (response) {
  //       debugger;
  //       //reject('Token refresh failed');
  //     }
  //   })
  // }
});
