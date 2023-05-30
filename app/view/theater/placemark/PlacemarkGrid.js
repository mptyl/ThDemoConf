Ext.define('ThDemoConf.view.theater.placemark.PlacemarkGrid', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.placemark-grid',

  requires: [
    'ThDemoConf.view.theater.placemark.PlacemarkGridController',
  ],

  controller: 'theater-placemark-placemarkgrid',
  layout: 'fit',
  items: [
    {
      xtype: 'grid',
      scrollable: 'vertical',
      reference: 'placemarkgrid',
      header: {
        titleAlign: 'center',
        titlePosition: 1
      },
      bind:
        {
          store: '{placemarkstore}',
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
          flex: 10,
          dataIndex: 'title',
          text: 'Titolo',
        },
        {
          xtype: 'gridcolumn',
          flex: 10,
          dataIndex: 'description',
          text: 'Dscrizione',
        },
        {
          xtype: 'gridcolumn',
          flex: 2,
          dataIndex: 'channelId',
          text: 'ChannelId',
          format: '0',
          align: 'right'
        },
        {
          xtype: 'gridcolumn',
          flex: 2,
          dataIndex: 'publicId',
          text: 'PlublicId',
        },
        {
          xtype: 'booleancolumn',
          flex: 1,
          dataIndex: 'assetId',
          text: 'AssetId',
        },
        {
          xtype: 'numbercolumn',
          flex: 2,
          dataIndex: 'attributeId',
          text: 'AttributeId',
          format: '0',
          align: 'right'
        },

        {
          xtype: 'numbercolumn',
          flex: 2,
          dataIndex: 'status',
          text: 'Status',
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
            '->',
            {
              reference: 'placemarkReloadButton',
              iconCls: 'x-fa fa-arrow-up',
              text: 'Reload',
              handler: 'onReload',
              textAlign: 'right',
            }
          ]
        }
      ],
      listeners: {
        rowdblclick: 'onRowDblClick'
      }
    },
  ]
});
