Ext.define('ThDemoConf.view.theater.placemark.MapBoxPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.mapboxpanel',

  controller: 'mapboxpanel',

  layout: 'fit',
  html: '<div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%"><div id="map" style="width: 300px; height: 300px"></div></div>',
  listeners: {
    resize: function() {
      // Resize map when container is resized
      if (this.map) {
        this.map.resize();
      }
    }
  }

});
