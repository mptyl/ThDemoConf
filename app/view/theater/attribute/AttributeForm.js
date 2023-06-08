Ext.define('ThDemoConf.view.theater.attribute.AttributeForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.attribute-form',

  requires: [
    'ThDemoConf.view.theater.attribute.AttributeFormController',
  ],
  itemId: 'attriibuteForm',
  scrollable: 'true',

  controller: 'theater-attribute-attributeform',
  items: [
    {
      xtype: 'panel',
      itemId: 'attributeDetailPanel',
      title: 'Dati strutturali Attributo',
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
              title: 'Attributo',
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
                      bind: '{attributeRecord.id}',
                      readOnly: true,
                      flex: 1
                    },

                    {
                      xtype: 'textfield',
                      bind: '{attributeRecord.name}',
                      fieldLabel: 'Titolo',
                      readOnly: true,
                      flex: 3
                    },
                    {
                      xtype: 'textfield',
                      bind: '{attributeRecord.description}',
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
  ]
});
