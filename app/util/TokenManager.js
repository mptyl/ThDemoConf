Ext.define('ThDemoConf.util.TokenManager', {
  singleton: true,

  refreshToken: function () {
    return new Ext.Promise(function (resolve, reject) {
      const renewToken = localStorage.getItem('RefreshToken')
      Ext.Ajax.setDefaultHeaders(null);
      console.log('Headers after nullify');
      console.log( Ext.Ajax.getDefaultHeaders());
      Ext.Ajax.request({
        url: 'http://localhost:8086/renewToken',
        method: 'POST',
        params: {
          renewToken: renewToken
        },
        success: function (response) {
          const result = Ext.decode(response.responseText);
          if (result && result.access_token) {
            resolve(result); // Resolve the promise with the new result
          } else {
            reject('No renew token in response');
          }
        },
        failure: function (response) {
          reject('Token renew process failed');
        }
      });
    });
  },

  login: function () {
    localStorage.setItem('TutorialLoggedIn',false);
    Ext.widget('login')
  }

});
