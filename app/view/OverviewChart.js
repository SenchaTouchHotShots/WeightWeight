Ext.define("WeightWeight.view.OverviewChart", {
    extend:'Ext.chart.Panel',
    alias:'widget.overview',
    stores:['EntryStore'],
    config:{
        title:'Overview',
        //TODO - come up with a good iconCls.
        iconCls:'star',
        chart:{
            themeCls:'line1',
            store:'EntryStore',
            animate:true,
            legend:{
                position:'right'
            },
            interactions:[
                {
                    type:'panzoom',
                    axes:{
                        left:{}
                    }
                },
                {
                    type:'iteminfo',
                    panel:{
                        tpl:[ '<table>',
                            '<tpl if="weight"><tr><th>Weight</th><td>{weight} ({weightUnits})</td></tr></tpl>',
                            '<tpl if="water"><tr><th>Water</th><td>{water} ({waterUnits})</td></tr></tpl>',
                            '<tpl if="calories"><tr><th>Calories</th><td>{calories}</td></tr></tpl>',
                            '<tpl if="exercise"><tr><th>Exercise</th><td>{exercise} minutes</td></tr></tpl>',
                            '<tpl if="tag"><tr><th>Tag</th><td>{tag}</td></tr></tpl>',
                            '</table>'
                        ]
                    },
                    listeners:{
                        show:function (interaction, item, panel) {
                            var record = item.storeItem;
                            var dt = new Date(record.get('entryDate'));
                            var config = Ext.ModelManager.getModel('WeightWeight.model.Config');
                            config.load(1, {
                                scope:this,
                                success:function (configRecord) {
                                    panel.setData(Ext.apply(record.getData(), configRecord.getData()));
                                }
                            });
                            /* This is a touch floating panel. There is no title as part of the panel, but there is one as the first docked item. */
                            panel.getDockedComponent(0).setTitle(Ext.Date.format(dt, 'm-d-Y'));
                        }
                    }
                }
            ],
            axes:[
                {
                    type:'Numeric',
                    position:'left',
                    fields:['weight'],
                    title:'Weight',
                    minorTickSteps:25,
                    roundToDecimal:true,
                    decimals:1
                },
                {
                    type:'Numeric',
                    position:'right',
                    fields:['exercise'],
                    title:'Exercise (min/day)',
                    decimals:0,
                    minimum:0
                },
                {
                    type:'Time',
                    position:'bottom',
                    fields:['entryDate'],
                    title:'Date',
                    dateFormat:'m-d-Y'
                }
            ],
            series:[
                {
                    type:'line',
                    highlight:{
                        size:7,
                        radius:7
                    },
                    fill:false,
                    smooth:true,
                    axis:'left',
                    xField:'entryDate',
                    yField:'weight',
                    title:'Weight'
                },
                {
                    type:'line',
                    highlight:{
                        size:7,
                        radius:7
                    },
                    fill:false,
                    smooth:true,
                    axis:'right',
                    xField:'entryDate',
                    yField:'exercise',
                    title:'Exercise'
                }
            ]
        }
    }
});
