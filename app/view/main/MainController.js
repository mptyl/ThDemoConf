/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ThDemoConf.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onLogout() {
    const keycloak=ThDemoConf.getApplication().keycloak;
    this.getView().destroy();
    keycloak.logout();
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
  onButtonTap(button) {
    const me=this;
    me.getViewModel().getStore('attributestore').load();
    me.getViewModel().getStore('placemarkstore').load();
    this.redirectTo(button.getItemId(), {
      force: true,
    })
  }
});
