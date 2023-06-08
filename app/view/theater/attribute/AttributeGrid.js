Ext.define('ThDemoConf.view.theater.attribute.AttributeGrid', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.attribute-grid',

  requires: [
    'ThDemoConf.view.theater.attribute.AttributeGridController',
  ],

  controller: 'theater-attribute-attributegrid',
  layout: 'fit',
  items: [
    {
      xtype: 'grid',
      scrollable: 'vertical',
      reference: 'attributegrid',
      header: {
        titleAlign: 'center',
        titlePosition: 1
      },
      bind:
        {
          store: '{attributestore}',
          title: '{gridName}'
        },
      plugins: 'gridfilters',
      margin: '15 10 0 10',
      border: true,

      columns: [
        {
          xtype: 'numbercolumn',
          flex: 2,
          dataIndex: 'id',
          text: 'Id',
          format: '0',
          align: 'right'
        },
        {
          xtype: 'gridcolumn',
          flex: 2,
          dataIndex: 'name',
          text: 'Name',
        },
        {
          xtype: 'gridcolumn',
          flex: 2,
          dataIndex: 'description',
          text: 'Description',
        },
        {
          xtype: 'numbercolumn',
          flex: 2,
          dataIndex: 'channelId',
          text: 'ChannelId',
          format: '0',
          align: 'right'
        },
        {
          xtype: 'gridcolumn',
          flex:2,
          dataIndex: 'iconKey',
          text: 'IconKey',
        },
        {
          xtype: 'checkcolumn',
          flex: 1,
          dataIndex: 'channelId',
          text: 'NoD',
        },



      ],

      dockedItems: [
        {
          xtype: 'toolbar',
          ui: 'footer',
          dock: 'top',
          defaults: {
            xtype: 'button',
            padding: 10,
          },
          items: [
            {
              xtype: 'button',
              iconCls: 'x-fa fa-arrow-left',
              text: 'Ricarica gli Attributi da Theater',
              handler: 'onReloadAttributes',
            },
            '->',
            {
              reference: 'reloadButton',
              iconCls: 'x-fa fa-arrow-up',
              text: 'Reload',
              handler: 'onReload',
              textAlign: 'right',
            }
          ]
        }
      ],
      listeners: {
        rowdblclick: 'onRowDblClick',
      }
    },
  ]
});
