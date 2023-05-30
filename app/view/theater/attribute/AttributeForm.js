Ext.define('ThDemoConf.view.theater.attribute.AttributeForm', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.attribute-form',

  requires: [
    'ThDemoConf.view.theater.attribute.AttributeFormController',
  ],
  itemId: 'attriibuteForm',
  scrollable: 'true',

  controller: 'theater-attribute-attributeform',
  items: [{
    xtype: 'panel',
    itemId: 'attributePanel',
    title: 'Attributo',
    bind:{
      title:'{attributeName}'
    },
    header: {
      titleAlign: 'center',
      titlePosition: 1
    },
    margin:'0 10 0 10',
    tpl: new Ext.XTemplate(
      '<div class="container-fluid" style="margin-top:20px">',
      '<div class="row">',
      '<div class="col-1 text-right"><p>Id:</p></div>',
      '<div class="col-1 text-left"><p><span class="textAttribute">{id}</span></p></div>',
      '<div class="col-1 text-right"><p>Nome:</p></div>',
      '<div class="col-4 text-left"><p><span class="textAttribute">{name}</span></p></div>',
      '<div class="col-1 text-right"><p>Descrizione:</p></div>',
      '<div class="col-4 text-left"<p><span class="textAttribute">{description}</span</p>p</div>',
      '</div>',
      '<div class="row">',
      '<div class="col-1 text-right"><p>Id Canale:</p></div>',
      '<div class="col-1 text-left"><p><span class="textAttribute">{channelId}</span></p></div>',
      '<div class="col-1 text-right"><p>Creato il:</p></div>',
      '<div class="col-4 text-left"><p><span class="textAttribute">{createdAt}</span></p></div>',
      '<div class="col-1 text-right"><p>Ultimo aggiornamento:</p></div>',
      '<div class="col-4 text-left"><p><span class="textAttribute">{updatedAt}</span></p></div>',
      '</div>',
      '<div class="row">',
      '<div class="col-12 text-left"><p><span class="titleThreshold">Status Thresholds:</span></p></div>',
      '</div>',
      '<tpl foreach="statusThresholds">',
      '<div class="row my-header-row">',
      '<div class="col-3">Messaggio:&nbsp;<span class="textAttribute">{$}</span></div>',
      '<div class="col-9">Tipo:&nbsp;<span class="textAttribute">{type}</span></div>',
      '</div>',
      '<div class="row">',
      '<div class="col-12">',
      '<table class="table table-bordered">',
      '<thead>',
      '<tr>',
      '   <th scope="col" class="flex30">Livello</th>',
      '   <th scope="col" class="flex30">Operatore</th>',
      '   <th scope="col" class="flex20">Valore</th>',
      '   <th scope="col" class="flex10">Minimo</th>',
      '   <th scope="col" class="flex10">Massimo</th>',
      '</tr>',
      '</thead>',
      '<tbody>',
      '<tpl foreach="levels">',
      '   <tr><td>{$}</td><td>{operator}</td><td>{value}</td><td>{min}</td><td>{max}</td></tr>',
      '</tpl>',
      '</tbody>',
      '</table>',
      '</div>',
      '</div>',
      '</div>',
      '</tpl>',
      '</div>',
    )
  }],
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'top',
      ui: 'footer',
      margin:'15 10 0 10',
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
