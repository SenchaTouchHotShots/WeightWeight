Ext.define("WeightWeight.view.OverviewChart", {
    extend:'Ext.Panel',
    alias:'widget.overview',
    config:{
        title:'Overview',
        //TODO - come up with a good iconCls.
        iconCls:'star',
        layout:'fit',
        items:[
            {
                xtype:'toolbar',
                top:0,
                right:0,
                zIndex:50,
                style:{
                    background:'none'
                },
                items:[
                    {
                        xtype:'spacer'
                    }
                ]
            },
            {
                xtype:'chart',
                margin:'50 0 25 0',
                store:'EntryStore',
                interactions:[
                    {
                        type:'panzoom',
                        zoomOnPanGesture:false
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
                                var record = item.record;
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
                legend:{
                    position:'bottom'
                },
                series:[
                    {
                        type:'line',
                        xField:'entryDate',
                        yField:'weight',
                        title:'Weight',
                        axis:'left',
                        style:{
                            smooth:false,
                            stroke:'#76AD86',
                            miterLimit:3,
                            lineCap:'miter',
                            lineWidth:3
                        },
                        marker:{
                            type:'circle',
                            r:6,
                            fillStyle:'#76AD86'
                        },
                        highlightCfg:{
                            scale:1.25
                        }
                    },
                    {
                        type:'line',
                        xField:'entryDate',
                        yField:'exercise',
                        title:'Exercise',
                        axis:'right',
                        style:{
                            smooth:false,
                            stroke:'#7681AD',
                            lineWidth:3
                        },
                        marker:{
                            type:'circle',
                            r:6,
                            fillStyle:'#7681AD'
                        },
                        highlightCfg:{
                            scale:1.25
                        }
                    }

                ],
                axes:[
                    {
                        type:'numeric',
                        position:'left',
                        fields:['weight'],
                        title:{
                            text:'Weight',
                            fontSize:14
                        }
                    },
                    {
                        type:'numeric',
                        position:'right',
                        fields:['exercise'],
                        title:{
                            text:'Exercise',
                            fontSize:14
                        }
                    },
                    {
                        type:'time',
                        dateFormat:'m-d-Y',
                        position:'bottom',
                        fields:'entryDate',
                        title:{
                            text:'Date',
                            fontSize:20
                        }
                    }
                ]
            }
        ]
    },
    initialize:function () {
        this.callParent();
        var toolbar = Ext.ComponentQuery.query('toolbar', this)[0],
            interaction = Ext.ComponentQuery.query('interaction', this)[0];
        if (toolbar && interaction && !interaction.isMultiTouch()) {
            toolbar.add(interaction.getModeToggleButton());
        }
    }
});
