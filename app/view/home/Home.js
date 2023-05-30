
Ext.define('ThDemoConf.view.home.Home',{
    extend: 'Ext.panel.Panel',
    xtype:'home-home-panel',


    requires: [
        'ThDemoConf.view.home.HomeController',
        'ThDemoConf.view.home.HomeModel'
    ],

    controller: 'home-home',
    viewModel: {
        type: 'home-home'
    },

    html: 'Home Panel'
});
