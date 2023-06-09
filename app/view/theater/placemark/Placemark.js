Ext.define('ThDemoConf.view.theater.placemark.Placemark', {
  extend: 'Ext.panel.Panel',
  xtype: 'theater-placemark-panel',

  requires: [
    'ThDemoConf.view.theater.placemark.PlacemarkController',
    'ThDemoConf.view.theater.placemark.PlacemarkModel'
  ],

  controller: 'theater-placemark',
  viewModel: {
    type: 'theater-placemark'
  },
  itemId: "placemarkPanel",
  reference:'placemarkPanel',
  layout: 'fit',

  items: [
    {
      xtype: 'placemark-grid',
      bind: {
        hidden: '{placemarkGridHidden}'
      }
    },
    {
      xtype: 'placemark-form',
      bind: {
        hidden: '{placemarkFormHidden}'
      }
    }
  ]
});
