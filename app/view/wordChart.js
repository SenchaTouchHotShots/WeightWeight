Ext.define('WeightWeight.view.wordChart', {
    extend:'Ext.Panel',
    alias:'widget.wordchart',
    requires: ['Ext.chart.PolarChart',
               'Ext.Toolbar',
               'Ext.TitleBar',
               'Ext.chart.series.Radar',
               'Ext.chart.axis.Numeric',
               'Ext.chart.axis.Category',
               'Ext.chart.interactions.Rotate',
               'Ext.Button'],
    config: {
        layout: 'fit'
    },
    constructor: function (config) {
        this.store = Ext.getStore('EntryStore');

        Ext.apply(this, config);

        this.callParent([config]);
        var configRecord = Ext.ModelManager.getModel('WeightWeight.model.Config');
        configRecord.load(1, {
            scope:this,
            success: this.createChart
        });

    },
    createChart: function(config) {
        this.configRecord = config;
        this.store.filterBy(function(record) {
            if (record.get('tag')) {
                return true;
            } else {
                return false;
            }
        });
        this.store.setGroupField('tag');
        this.store.setGroupDir('ASC');
        var groups = this.store.getGroups();
        this.store.setGroupField('');
        this.store.clearFilter();
        var wordStore = Ext.create('Ext.data.Store',
            { fields: ['name', {name: 'count', type: 'int'}]}
        );
        Ext.each(groups, function(group) {
           wordStore.add({name: group.name, count: group.children.length});
        });


        this.chart = Ext.factory({
            xtype: 'polar',
            store: wordStore,
            interactions: 'rotate',
            series: [{
                type: 'radar',
                xField: 'name',
                yField: 'count',
                style: {
                            fillStyle: 'rgba(0,255,0,0.2)',
                            strokeStyle: 'rgba(0,0,0,0.8)',
                            lineWidth: 1
                }
            }],
            axes: [{
                type: 'numeric',
                 position: 'radial',
                 fields: 'count',
                 grid: true,
                 label: {
                     fill: 'black'
                 }
             },{
                 type: 'category',
                 position: 'angular',
                 fields: 'name',
                 grid: true,
                 label: {
                     fill: 'black'
                 }
            }]
        }, 'Ext.chart.Chart');

        this.add(this.chart);

    }
});
