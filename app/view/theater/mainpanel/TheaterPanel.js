Ext.define('ThDemoConf.view.theater.mainpanel.TheaterPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.theater-mainpanel-panel',

  requires: [
    'ThDemoConf.view.theater.mainpanel.TheaterPanelController',
    'ThDemoConf.view.theater.mainpanel.TheaterPanelModel'
  ],

  controller: 'theater-mainpanel-theaterpanel',
  viewModel: {
    type: 'theater-mainpanel-theaterpanel'
  },
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'theater-mainpanel-menu',
      width: 170

    }, {
      xtype: 'panel',
      layout: 'card',
      itemId: 'theaterMainPanel',
      flex: 1,
      items: [
        {
          xtype: 'theater-attribute-panel',
          itemId: 'theaterAttributePanel',
        },
        {
          xtype: 'theater-placemark-panel',
          itemId: 'theaterPlacemarkPanel',
        }
      ]
    }
  ]
});
