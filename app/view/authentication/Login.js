Ext.define('ThDemoConf.view.authentication.Login', {
  extend: 'ThDemoConf.view.authentication.LockingWindow',
  xtype: 'login',

  requires: [
    'ThDemoConf.view.authentication.Dialog',
    'Ext.container.Container',
    'Ext.form.field.Text',
    'Ext.form.field.Checkbox',
    'Ext.button.Button'
  ],
  title: 'Effettuare il Login per accedere all\'applicazione',
  defaultFocus: 'authdialog', // Focus the Auth Form to force field focus as well
  autoShow: true,
  items: [
    {
      xtype: 'authdialog',
      //defaultButton: 'loginButton',
      //autoComplete: true,
      bodyPadding: '20 20',
      //cls: 'auth-dialog-login',
      //header: false,
      width: 415,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },

      defaults: {
        margin: '5 0'
      },

      items: [
        {
          xtype: 'label',
          text: 'Inserisci le tue credenziali'
        },
        {
          xtype: 'textfield',
          //cls: 'auth-textbox',
          name: 'username',
          bind: '{username}',
          height: 55,
          //hideLabel: true,
          allowBlank: false,
          emptyText: 'login',
        },
        {
          xtype: 'textfield',
          //cls: 'auth-textbox',
          height: 55,
          //hideLabel: true,
          emptyText: 'Password',
          inputType: 'password',
          name: 'password',
          bind: '{password}',
          allowBlank: false,
        },
        {
          xtype: 'button',
          reference: 'loginButton',
          scale: 'large',
          //ui: 'blue',
          iconAlign: 'right',
          iconCls: 'x-fa fa-angle-right',
          text: 'Login',
          formBind: true,
          listeners: {
            click: 'onLoginClick'
          }
        }
      ]
    }
  ],

  initComponent: function () {
    //this.addCls('user-login-register-container');
    this.callParent(arguments);
  }
});
