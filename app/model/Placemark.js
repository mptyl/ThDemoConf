Ext.define('ThDemoConf.model.Placemark', {
  extend: 'Ext.data.Model',

  fields: [
    {name: 'id', type: 'integer'},
    {name: 'channelId', type: 'string'},
    {name: 'publicId', type: 'string'},
    {name: 'assetId', type: 'integer'},
    {name: 'attributeId', type: 'integer'},
    {name: 'geometry', type: 'auto'},
    {name: 'status', type: 'auto'},
    {name: 'iconKey', type: 'string'},
    {name: 'placemarkUpdatedAt', type: 'string'},
    {name: 'tags', type: 'auto'},
    {name: 'payload', type: 'auto'},
    {name: 'payloadTimestamp', type: 'string'},
    {name: 'statusThresholds', type: 'auto'},
    {name: 'title', type: 'string'},
    {name: 'description', type: 'string'}
  ]
});
