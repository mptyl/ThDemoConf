Ext.define('ThDemoConf.view.authentication.AuthenticationModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.authentication',

  data: {
    name: 'ThDemoConf',
    keycloackUrl:'http://localhost:8090/realms/SpringBootKeycloak/protocol/openid-connect/token',
    client_id:'springboot-keycloak-client',
    grant_type: 'password',
    username: null,
    password: null,
    email: '',
    persist: false,
    agrees: false
  }
});
