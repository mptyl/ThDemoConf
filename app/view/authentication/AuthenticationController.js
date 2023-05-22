Ext.define('ThDemoConf.view.authentication.AuthenticationController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.authentication',

  //TODO: implement central Facebook OATH handling here
  onLoginClick: function () {
    const me = this;
    const vm = me.getViewModel();
    const loginUrl = 'http://localhost:8086/login'
    const username=vm.get('username');
    const password=vm.get('password');
    Ext.Ajax.request({
      url: loginUrl,
      method: 'POST',
      params: {
        username: username,
        password: password,
      },
      success: function (response, opts) {
        const obj = Ext.decode(response.responseText);
        const token = obj.access_token;
        const refreshToken = obj.refresh_token;
        Ext.Ajax.setDefaultHeaders({
              'Authorization': 'Bearer ' + token
            });
        localStorage.setItem("TutorialLoggedIn", true);
        localStorage.setItem("RefreshToken", refreshToken);
        me.getView().up().destroy();
        Ext.widget('app-main');
      },
      failure: function (response, opts) {
        const message ='Credenziali errate';
        /*
        const status = response.status;
        const text = response.statusText;
        const obj = Ext.decode(response.responseText);
        const message = 'Status: <b>' + status + '</b><br/>Text: <b>' + text + '</b><br/>Message: <b>' + obj['error_description'] + '</b';
        */
        Ext.Msg.alert(
          'Failure', message
        );
      }
    });
  }
});
