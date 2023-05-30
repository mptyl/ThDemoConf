Ext.define('ThDemoConf.view.theater.attribute.Attribute', {
  extend: 'Ext.panel.Panel',
  xtype: 'theater-attribute-panel',

  requires: [
    'ThDemoConf.view.theater.attribute.AttributeController',
    'ThDemoConf.view.theater.attribute.AttributeModel'
  ],

  controller: 'theater-attribute',
  viewModel: {
    type: 'theater-attribute'
  },

  itemId:"attributePanel",
  layout:'fit',
  items:[
    {
      xtype:'attribute-grid',
      flex:5,
      bind:{
        hidden:'{attributeGridHidden}'
      }
    },
    {
      xtype:'attribute-form',
      flex:5,
      bind:{
        hidden:'{attributeFormHidden}'
      }
    }

  ]
});
