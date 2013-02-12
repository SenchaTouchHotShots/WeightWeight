Ext.define('WeightWeight.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            { xtype: 'dataentry' },
            { xtype: 'overview' },
            { xtype: 'details' },
            { xtype: 'configform' }
        ]
    }
});
