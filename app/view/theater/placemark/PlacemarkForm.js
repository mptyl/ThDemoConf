
Ext.define('ThDemoConf.view.theater.placemark.PlacemarkForm',{
    extend: 'Ext.panel.Panel',
  alias:'widget.placemark-form',
    requires: [
            'ThDemoConf.view.theater.placemark.PlacemarkFormController',
        ],

        controller: 'theater-placemark-placemarkform',


    html: 'Hello, Form!!'
});
