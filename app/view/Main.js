Ext.define("WeightWeight.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBar: {
            docked: 'bottom'
        },
        items: [
            { xtype: 'dataentry'},
            { xtype: 'overview'},
            { xtype: 'details'},
            { xtype: 'configform' }
        ]
    }
});