Ext.define('ThDemoConf.view.main.Main', {
  extend: 'Ext.container.Viewport',
  alias: 'widget.app-main',

  requires: [
    'ThDemoConf.view.main.MainModel',
    'Ext.tab.Panel',
    'Ext.tab.Tab',
    'Ext.tab.Bar'
  ],
  controller: 'main',
  viewModel: {
    type: 'main'
  },
  layout: 'border',
  items: [
    {
      region: 'north',
      xtype: 'panel',
      minHeight: 50,
      header: {
        titlePosition: 0,
        bind: {
          title: '{name}'
        },
        items: [{
          xtype: 'button',
          text: 'Logout',
          handler: 'onLogout'
        }]
      },
    },
    {
      region: 'west',
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
            margin: '10 15 0 15',
            width: '100%'
          },
          items: [

            {
              text: 'Download Attributes',
              handler: 'onDownloadAttributes'
            },
          ]
        }
      ]
    },
    {
      xtype: 'panel',
      region: 'center',
      layout: 'fit',
      ariaLabelledBy:'Contenuto principale',
      items: [
        {
          xtype: 'panel',
          layout: 'card',
          itemId: 'contentPanel',
          reference: 'contentPanel',
          items: [
            {
              xtype: 'panel',
              itemId: 'homeHomePanel',
            },
            {
              xtype: 'panel',
              itemId: 'assMainPanel',
            },
            {
              xtype: 'panel',
              itemId: 'azdMainPanel',
            },
            {
              xtype: 'panel',
              itemId: 'avMainPanel',
            },
            {
              xtype: 'panel',
              itemId: 'asrMainPanel',
            },
            {
              xtype: 'panel',
              itemId: 'admMainPanel',
            }
          ]
        },
      ]
    },
    {
      xtype: 'tabbar',
      region: 'south',
      layout: {
        pack: 'center'
      },
      defaults: {
        padding: '5 5 10 5',
        handler: 'onButtonTap'

      },
      height: 60,
      activeItem: 0,
      items: [
        {
          text: 'Home',
          iconCls: 'x-fa fa-home',
          itemId: 'homeHome',
          closable: false
        },
        {
          text: 'Assessment',
          iconCls: 'x-fa fa-clipboard',
          itemId: 'assMain',
          closable: false
        },
        {
          text: 'Aziende e destinatari',
          iconCls: 'x-fa fa-address-book',
          itemId: 'azdMain',
          closable: false
        },
        {
          text: 'Autovalutazioni',
          iconCls: 'x-fa fa-award',
          itemId: 'avMain',
          closable: false
        }, {
          text: 'Assessors',
          iconCls: 'x-fa fa-marker',
          itemId: 'asrMain',
          closable: false
        },
        {
          text: 'Utenti e ruoli',
          iconCls: 'x-fa fa-users',
          itemId: 'admMain',
          closable: false
        }
      ]
    }
  ]
});
