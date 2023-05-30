Ext.define('ThDemoConf.view.azdest.mainpanel.TheaterMenu', {
  extend: 'Ext.panel.Panel',
  xtype: 'theater-mainpanel-menu',

  requires: [
    'ThDemoConf.view.theater.mainpanel.TheaterMenuController',
  ],

  controller: 'theater-mainpanel-theatermenu',

  bodyPadding: 10,
  defaults: {
    xtype: 'button',
    padding: '10 0',
    margin: '5 0',
    width: '100%',
    handler: 'onButtonTap'
  },
  items: [
    {
      text: 'Attributi',
      itemId: 'theaterAttribute'
    },
    {
      text: 'Placemark',
      itemId: 'theaterPlacemark'
    },
  ]
});
