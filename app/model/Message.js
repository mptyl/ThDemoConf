Ext.define('ThDemoConf.model.Message', {
  extend: 'Ext.data.Model',

  requires: ['Ext.data.identifier.Uuid'],

  idProperty: 'id',
  identifier: 'uuid',

  fields: [
    {name: 'id', type: 'string'},
    {name: 'key', type: 'string'},
    {name: 'presentValue', type: 'string'},
    {name: 'presentStatus', type: 'string'},
    {name: 'value', type: 'string'},
    {name: 'status', type: 'string'},
  ]
});
