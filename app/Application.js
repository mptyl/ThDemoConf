/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ThDemoConf.Application', {
  extend: 'Ext.app.Application',

  name: 'ThDemoConf',

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },

  views: [
    'ThDemoConf.view.main.Main'
  ],

  launch: function () {
    const me = this;

    me.keycloak = new Keycloak();
    me.keycloak.init(
      {
        onLoad: 'login-required',
        promiseType: 'native'
      }).then(
      function (authenticated) {
        // Store the token and refresh token
        localStorage.setItem('keycloak-token', me.keycloak.token);
        localStorage.setItem('keycloak-refresh-token', me.keycloak.refreshToken);
        Ext.Ajax.setDefaultHeaders({
          'Authorization': 'Bearer ' + me.keycloak.token
        });
        const jwt = me.decodeJWT(me.keycloak.token);
        me.userName = jwt.name;

      }).catch(function (error) {
        console.log(error);
      }
    );

    Ext.Ajax.on('beforerequest', function (conn, options, eOpts) {
      me.keycloak.updateToken(30).then(function (refreshed) {
        if (refreshed) {
          // The token was refreshed, you may want to store it again
          localStorage.setItem('keycloak-token', me.keycloak.token);
          options.headers = options.headers || {};
          options.headers['Authorization'] = 'Bearer ' + me.keycloak.token;
        } else {
          console.log('Token is still valid');
          // The token is still valid for at least the next 30 seconds
        }
      }).catch(function () {
        // If an error occurred, you may want to log the user out, as the token refresh failed.
        me.keycloak.logout();
      });
    });

    /*    Ext.Ajax.on('requestexception', function(conn, response, options, eOpts) {
          if(response.status == 401){
            me.keycloak.logout();
          }
          else {
            Ext.Msg.alert('Failure', 'Server-side failure with status code ' + response.status);
          }
        });*/


  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  },

  decodeJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
});
