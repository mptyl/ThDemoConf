Ext.define('ThDemoConf.model.Attribute', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'integer'},
    {name: 'channelId', type: 'integer'},
    {name: 'iconKey', type: 'string'},
    {name: 'createNotificationEventsOnDanger', type: 'boolean'},
    {name: 'createdAt', type: 'date'},
    {name: 'updatedAt', type: 'date'},
    {name: 'name', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'name_i18n',type:'auto'},
    {name: 'description_i18n',type:'auto'},
    {name: 'statusThresholds',type:'auto'}
  ],
});
