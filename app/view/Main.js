Ext.define("WeightWeight.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'WeightWeight.view.DataEntry', 'WeightWeight.view.Config'],
    
    config: {
        tabBar: {
            docked: 'bottom'
        },
        items: [
            { xtype: 'dataentry'},
            { xtype: 'configform' }
        ]
    }
});