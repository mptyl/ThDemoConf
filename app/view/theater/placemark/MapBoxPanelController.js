Ext.define('ThDemoConf.view.theater.placemark.MapBoxPanelController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mapboxpanel',

  listen: {
    controller:
      {
        '*': {
          placemarkDataLoaded: 'onPlacemarkDataLoaded'  // listen for placemarkDataLoaded event from any controller
        }
      }
  },


  onPlacemarkDataLoaded() {
    console.log('onPlacemarkDataLoaded')
    const me = this;
    const vm = me.getViewModel();
    let placemarkRecord = vm.get('placemarkRecord')
    let geometry = placemarkRecord.get('geometry');
    let coordinates = geometry.coordinates

    let longitude = coordinates[0];
    let latitude = coordinates[1];
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29wYW4iLCJhIjoiY2xpbzg0Z2x3MDZpejNycDhyc2pzaG1hdiJ9.jFOxM3FO-4qHLqVs379YPw';
    const map=new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [longitude, latitude], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });
    map.on('load', function() {
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
    });
  },
});
