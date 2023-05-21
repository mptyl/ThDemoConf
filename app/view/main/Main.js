/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ThDemoConf.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',

    'ThDemoConf.view.main.MainController',
    'ThDemoConf.view.main.MainModel',
  ],

  controller: 'main',
  plugins: 'viewport',
  viewModel: 'main',

  layout: {
    type: 'border'
  },
  items: [{
    xtype: 'panel',
    bind: {
      title: '{name}'
    },
    region: 'west',
    html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
    width: 250,
    split: true,
    items: [
      {
        xtype: 'container',
        layout: {
          type: 'vbox',
          align: 'stretch'
        },
        defaults: {
          xtype: 'button',
          margin: '5 5 5 5',
          width: '100%'
        },
        items: [
          {
            text: 'Logout',
            handler: 'onLogout'
          },
          {
            text: 'Download Attributes',
            handler: 'onDownloadAttributes'
          },
          {
            text: 'Rinnova token',
            handler: 'renewToken'
          }
        ]
      }
    ]
  }, {
    region: 'center',
    xtype: 'tabpanel',
    items: [{
      title: 'Tab 1',
      html: '<h2>Content appropriate for the current navigation.</h2>'
    }]
  }]
});
