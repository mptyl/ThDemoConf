/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ThDemoConf.Application',

    name: 'ThDemoConf',

    requires: [
        // This will automatically load all classes in the ThDemoConf namespace
        // so that application classes do not need to require each other.
        'ThDemoConf.*'
    ],

  controllers: [
    'ThDemoConf.controller.TdcRouter',
  ],

  stores:[
    'Measures',
    'Messages',
    'Thresholds',
  ],

  views: [
    'main.Main'
  ],

    // The name of the initial view to create.
  mainView: 'ThDemoConf.view.main.Main'
});
