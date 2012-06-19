Ext.define('WeightWeight.view.goalChart', {
   extend:'Ext.Panel',
    alias:'widget.goalchart',
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
        var goalStore = Ext.create('Ext.data.Store',
            { fields: ['entryDate', {name: this.dataField, type: 'auto'}, {name: 'goal', type: 'int'}]}
        );
        this.store.each(function(record) {
            if (record.get(this.dataField)) {
            var values = {
                entryDate: record.get('entryDate'),
                goal: this.configRecord.get(this.goalField)
            };
            values[this.dataField] = record.get(this.dataField);
           goalStore.add(values);
            }
        }, this);
        this.chart = Ext.factory({
            xtype: 'chart',
            store: goalStore,
            animate: true,
            colors: this.colorSet,
            legend: {
                position: 'right'
            },
            axes: [{
                type:'Numeric',
                position:'left',
                fields:[this.dataField, 'goal'],
                title:this.chartTitle,
                decimals:0,
                minimum:0
            },
                {
                    type:'Time',
                    position:'bottom',
                    fields:['entryDate'],
                    title:'Date',
                    dateFormat:'m-d-Y'
                }],
            series: [
                {
                    type: 'column',
                    axis: 'left',
                    title: this.chartTitle,
                    highlight: true,
                    xField: 'entryDate',
                    yField: this.dataField
                },
                {
                    type:'line',
                    fill:false,
                    smooth:true,
                    axis:'left',
                    xField:'entryDate',
                    yField:'goal',
                    showMarkers: false,
                    title:'Goal'
                }
            ]
        }, 'Ext.chart.Chart');

        this.add(this.chart);

    }
});