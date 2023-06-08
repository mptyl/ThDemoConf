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
          handler: 'onLogout',
          cls:'logoutButton'
        }]
      },
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
              xtype: 'theater-mainpanel-panel',
              itemId: 'theaterMainPanel',
            },
            // {
            //   xtype: 'panel',
            //   itemId: 'azdMainPanel',
            // },
            // {
            //   xtype: 'panel',
            //   itemId: 'avMainPanel',
            // },
            // {
            //   xtype: 'panel',
            //   itemId: 'asrMainPanel',
            // },
            // {
            //   xtype: 'panel',
            //   itemId: 'admMainPanel',
            // }
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
          text: 'Theater',
          iconCls: 'x-fa fa-marker',
          itemId: 'theaterMain',
          closable: false
        },
        // {
        //   text: 'Aziende e destinatari',
        //   iconCls: 'x-fa fa-address-book',
        //   itemId: 'azdMain',
        //   closable: false
        // },
        // {
        //   text: 'Autovalutazioni',
        //   iconCls: 'x-fa fa-award',
        //   itemId: 'avMain',
        //   closable: false
        // }, {
        //   text: 'Assessors',
        //   iconCls: 'x-fa fa-marker',
        //   itemId: 'asrMain',
        //   closable: false
        // },
        // {
        //   text: 'Utenti e ruoli',
        //   iconCls: 'x-fa fa-users',
        //   itemId: 'admMain',
        //   closable: false
        // }
      ]
    }
  ]
});
