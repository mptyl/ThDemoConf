Ext.define('ThDemoConf.model.Threshold', {
  extend: 'Ext.data.Model',

  requires: ['Ext.data.identifier.Uuid'],

  idProperty: 'id',
  identifier: 'uuid',

  fields: [
    {name: 'id', type: 'string'},
    {name: 'message', type: 'string'},
    {name: 'messageType', type: 'string'},
    {name: 'level', type: 'string'},
    {name: 'operator', type: 'string'},
    {name: 'value', type: 'string'},
    {name: 'min', type: 'string'},
    {name: 'max', type: 'string'},
  ]
});
