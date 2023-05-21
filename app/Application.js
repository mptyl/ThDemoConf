/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ThDemoConf.Application', {
  extend: 'Ext.app.Application',

  requires: [
    'ThDemoConf.util.TokenManager'
  ],
  name: 'ThDemoConf',

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },

  views: [
    'ThDemoConf.view.authentication.Login',
    'ThDemoConf.view.main.Main'
  ],

  launch: function () {
    // Impostare il listener peer errore Ajax
    Ext.Ajax.on('requestexception', function (conn, response, options, eOpts) {
      console.log("Intercettata una RequestException")
      if (response.status === 401 && options.url !== 'http://localhost:8086/renewToken') { // Unauthorized
        // Attempt to refresh the token
        console.log("Si tratta di una 401");
        ThDemoConf.util.TokenManager.refreshToken().then(
          result => {
            debugger;
            console.log("Eseguita la funzione refreshToken del TokenManager se ne valuta la risposta");
            if (result) {
              console.log("Il token è stato rinnovato, si riesegue la request originario");
              // If token refresh was successful, retry the original request
              const token = result['access_token'];
              const refreshToken = result['refresh_token'];
              localStorage.setItem("RefreshToken", refreshToken);
              Ext.Ajax.setDefaultHeaders({
                'Authorization': 'Bearer ' + token
              });
              Ext.Ajax.request(options);
            } else {
              console.log("Il token ricevuto è null o undefined, si chiama la funzione di login");
              // If token refresh failed, prompt for login
              ThDemoConf.util.TokenManager.login();
            }
          }).catch(error => {
          console.log("la funzione di renew token è andata in errore, si chiama la funzione di login");
          // If token refresh failed, prompt for login
          ThDemoConf.util.TokenManager.login();
        });
      }
    });

    // Check to see the current value of the localStorage key
    const loggedIn = localStorage.getItem("TutorialLoggedIn");

    // This ternary operator determines the value of the TutorialLoggedIn key.
    // If TutorialLoggedIn isn't true, we display the login window,
    // otherwise, we display the main view
    Ext.widget(loggedIn ? 'app-main' : 'login');

  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
