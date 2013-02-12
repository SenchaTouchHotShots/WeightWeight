Ext.define('WeightWeight.view.goalChart', {
   extend:'Ext.Panel',
    alias:'widget.goalchart',
    requires: [
        'Ext.chart.Chart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.series.Bar'
    ],
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
            { fields: [{name: 'entryDate', type: 'string'}, {name: Ext.String.capitalize(this.dataField), type: 'int'}, {name: 'goal', type: 'int'}]}
        );
        this.store.each(function(record) {
            if (record.get(this.dataField)) {
                var dt = new Date(record.get('entryDate')); // not getting a date object from record.get
                //We have to convert the dates to strings because bar/column charts don't work with time axes, only with category axes.
                var values = {
                    entryDate: Ext.Date.format(dt,'m-d-Y'),
                    goal: this.configRecord.get(this.goalField)
                };
                values[Ext.String.capitalize(this.dataField)] = record.get(this.dataField);
                goalStore.add(values);
            }
        }, this);

        this.chart = Ext.factory({
            xtype: 'chart',
            store: goalStore,
            animate: true,
             interactions: [
                 'itemhighlight'
             ],
            legend: {
                position: 'right'
            },
            axes: [{
                type:'numeric',
                position:'left',
                fields:[Ext.String.capitalize(this.dataField), 'goal'],
                title:Ext.String.capitalize(this.dataField)
            },
                {
                    type:'category',
                    position:'bottom',
                    fields:['entryDate'],
                    title:'Date',
                    label: {
                        fontSize: 10
                    }
                }],
            series: [
                
                {
                    type: 'bar',
                    xField: 'entryDate',
                    yField: [Ext.String.capitalize(this.dataField)],
                    style: {
                        fill: this.colorSet[0],
                        shadowColor: 'rgba(0,0,0,0.3)',
                        maxBarWidth: 50,
                        minGapWidth: 3,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    }
                },
                {
                    type:'line',
                    style: {
                        smooth: false,
                        stroke: this.colorSet[1],
                        lineWidth: 3
                    },
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
