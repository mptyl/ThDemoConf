Ext.define('ThDemoConf.view.theater.placemark.PlacemarkForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.placemark-form',
  requires: [
    'ThDemoConf.view.theater.placemark.PlacemarkFormController',
  ],

  controller: 'theater-placemark-placemarkform',
  scrollable: 'true',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'panel',
      itemId: 'placemarkPanel',
      title: 'Attributo',
      bind: {
        title: '{placemarkName}'
      },
      header: {
        titleAlign: 'center',
        titlePosition: 1
      },
      margin: '0 10 0 10',
      items: [
        {
        xtype: 'grid',
        margin: '10 0 0 0',
        itemId: 'messageGrid',
        columns: [
          {
            xtype: 'gridcolumn',
            dataIndex: 'key',
            text: 'Key',
            flex: 20
          },
          {
            xtype: 'gridcolumn',
            dataIndex: 'status',
            renderer: 'statusRenderer',
            flex: 2
          },
          {
            xtype: 'gridcolumn',
            dataIndex: 'value',
            text: 'Valore da inviare',
            flex: 40,
            editor: {}
          },
          {
            xtype: 'gridcolumn',
            dataIndex: 'presentStatus',
            renderer: 'statusRenderer',
            flex: 2
          },
          {
            xtype: 'gridcolumn',
            dataIndex: 'presentValue',
            text: 'Valore attuale',
            flex: 40
          },
        ],
        plugins: {
          cellediting: {
            clicksToEdit: 1,
            listeners: {
              beforeedit: 'onBeforeEdit',
              edit: 'onEdit'
            }
          }
        },
      }],
      dockedItems: [
        {
          xtype: 'toolbar',
          ui: 'footer',
          dock: 'bottom',
          defaults: {
            xtype: 'button',
            padding: 10,
          },
          items: [
            '->',
            {
              reference: 'reloadButton',
              iconCls: 'x-fa fa-refresh',
              text: 'Invia',
              handler: 'onSendMessages',
            }
          ]
        }
      ],
    },
    {
      xtype: 'panel',
      itemId: 'placemarkDetailPanel',
      title: 'Dati strutturali Placemark e attributo collegato',
      margin: '10 10 0 10',
      items: [
        {
          xtype: 'form',
          itemId: 'placemarkDetailForm',
          fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 150,
          },
          items: [
            {
              xtype: 'fieldset',
              title: 'Placemark',
              layout: {
                type: 'vbox',
                align: 'stretch'
              },
              items: [
                {
                  xtype: 'fieldcontainer',
                  layout: 'hbox',
                  //padding: '10 0 10 0',
                  items: [
                    {
                      xtype: 'textfield',
                      fieldLabel: 'Id',
                      bind: '{placemarkRecord.id}',
                      readOnly: true,
                      flex: 1
                    },

                    {
                      xtype: 'textfield',
                      bind: '{placemarkRecord.title}',
                      fieldLabel: 'Titolo',
                      readOnly: true,
                      flex: 3
                    },
                    {
                      xtype: 'textfield',
                      bind: '{placemarkRecord.description}',
                      fieldLabel: 'Descrizione',
                      readOnly: true,
                      flex: 3
                    },
                  ]
                },
                {
                  xtype: 'fieldcontainer',
                  layout: 'hbox',
                  //padding: '10 0 10 0',
                  items: [
                    {
                      xtype: 'textfield',
                      fieldLabel: 'Id Canale',
                      bind: '{placemarkRecord.channelId}',
                      readOnly: true,
                      flex: 1
                    },

                    {
                      xtype: 'textfield',
                      bind: '{createdAt}',
                      fieldLabel: 'Creato il:',
                      readOnly: true,
                      flex: 3
                    },
                    {
                      xtype: 'textfield',
                      bind: '{updatedAt}',
                      fieldLabel: 'Ultimo aggiornamento:',
                      readOnly: true,
                      flex: 3
                    },
                  ]
                },
              ]
            },
            {
              xtype: 'fieldset',
              title: 'Posizionamento',
              layout: {
                type: 'hbox',
                align: 'stretch'
              },
              items: [
                {
                  xtype: 'textfield',
                  fieldLabel: 'Attributo',
                  bind: '{placemarkRecord.attributeId}',
                  readOnly: true,
                  flex: 1
                },
                {
                  xtype: 'textfield',
                  fieldLabel: 'Tipo coordinate',
                  bind: '{placemarkRecord.geometry.type}',
                  readOnly: true,
                  flex: 3
                },
                {
                  xtype: 'textfield',
                  fieldLabel: 'Coordinate',
                  bind: '{placemarkRecord.geometry.coordinates}',
                  readOnly: true,
                  flex: 3
                }
              ]
            },
          ]
        },
        {
          xtype: 'grid',
          margin: '10 0 0 0',
          itemId: 'thresholdGrid',
          title: 'Status Thresholds',
          store:'Thresholds',
          columns: [
            {
              xtype: 'gridcolumn',
              dataIndex: 'message',
              text: 'Messaggio',
              renderer: 'renderMessageColumn',
              flex:1
            },
            {
              xtype: 'gridcolumn',
              dataIndex: 'messageType',
              text: 'Tipo messaggio',
              renderer: 'renderMessageTypeColumn',
              flex:1
            },
            {
              xtype: 'gridcolumn',
              dataIndex: 'level',
              text: 'Livello',
              flex:3
            },
            {
              xtype: 'gridcolumn',
              dataIndex: 'operator',
              text: 'Operatore',
              flex:3
            },
            {
              xtype: 'gridcolumn',
              dataIndex: 'value',
              text: 'Valore',
              flex:2
            },
            {
              xtype: 'gridcolumn',
              dataIndex: 'min',
              text: 'Minimo',
              flex:2
            },
            {
              xtype: 'gridcolumn',
              dataIndex: 'max',
              text: 'Massimo',
              flex:2
            }
          ]
        }
      ]
    },
  ],
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'top',
      ui: 'footer',
      margin: '15 10 0 10',
      items: [

        {
          xtype: 'tbfill'
        },
        {
          xtype: 'button',
          iconCls: 'x-fa fa-arrow-left',
          text: 'Torna alla lista',
          handler: 'onBackToList',
        }
      ]
    }
  ],


});


