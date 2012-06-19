Ext.define("WeightWeight.view.DetailChart", {
    extend:'Ext.Panel',
    alias:'widget.details',
    config:{

        title:'Details',
        //TODO - come up with a good iconCls.
        iconCls:'locate',
        layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center',
            flex: 1
        },
        items: [
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'center',
                    flex: 1
                },
                items: [
                    {height: 300, width: 400, xtype: 'goalchart', chartTitle: 'Exercise', dataField: 'exercise', goalField: 'exercisePerDay', colorSet:['#a61120', '#ff0000'] },
                    {height: 300, width: 400, xtype: 'goalchart', chartTitle: 'Caloric Intake', dataField: 'calories', goalField: 'caloriesPerDay', colorSet:['#ffd13e', '#ff0000']}
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'center',
                    flex: 1
                },
                items: [
                    {height: 300, width: 400, xtype: 'goalchart', chartTitle: 'Water', dataField: 'water', goalField: 'waterPerDay', colorSet:['#115fa6', '#ff0000']},
                    {height: 300, width: 400, xtype: 'wordchart', chartTitle: 'Tags', dataField: 'tag'}
                ]
            }
        ]
    }
});