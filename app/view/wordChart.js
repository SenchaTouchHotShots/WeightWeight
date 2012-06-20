Ext.define('WeightWeight.view.wordChart', {
    extend:'Ext.Panel',
    alias:'widget.wordchart',
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
            xtype: 'chart',
            store: wordStore,
            animate: {
                easing: "backInOut",
                duration: 500
            },
            series: [{
                type: 'wordmap',
                wordField: 'name',
                wordCountField: 'count',
                minFontSize: 25,
                maxFontSize: 60,
                minColor: 'rgb(0,0,0)',
                maxColor: '#a61187',
                fontFamily: 'Helvetica',
                positionFn: function(bounds){
                    var width = bounds.width,
                        height = bounds.height,
                        rnd = Math.random,
                        x, y;
                    x = (width/2) + (((rnd() * 10 > 5) ? 1 : -1) * rnd() * 100 + 1) >> 0;
                    y = (height/2) + (((rnd() * 10 > 5) ? 1 : -1) * rnd() * 100 + 1) >> 0;

                    return {
                        x: x,
                        y: y
                    };
                }
            }]
        }, 'Ext.chart.Chart');

        this.add(this.chart);

    }
});