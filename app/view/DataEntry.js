Ext.define("WeightWeight.view.DataEntry", {
    extend:'Ext.form.Panel',
    alias:'widget.dataentry',
    config:{

        title:'Enter Data',
        iconCls:'info',
        items:[
            {
                xtype:'datepickerfield',
                label:'Date',
                name: 'entryDate',
                id: 'entryDate',
                placeHolder:'mm/dd/yyyy'
            },
            {
                xtype:'numberfield',
                id:'weightField',
                name: 'weight',
                margin:'10 0',
                label:'Weight'
            },
            {
                xtype:'numberfield',
                id:'waterField',
                name: 'water',
                margin:'10 0',
                label:'Water'
            },
            {
                xtype:'numberfield',
                id:'calorieField',
                name: 'calories',
                margin:'10 0',
                label:'Calories'
            },
            {
                xtype:'numberfield',
                id:'exerciseField',
                name: 'exercise',
                label:'Exercise'
            },
            {
                xtype:'hiddenfield',
                id:'hiddenTagField',
                name: 'tag'
            },
            {
                xtype:'button',
                margin:'25 0 25',
                text:'Add Tag',
                id: 'addTagButton'
            },
            {
                xtype:'container',
                layout:{
                    type:'hbox'
                },
                items:[
                    {
                        xtype:'button',
                        margin:'0 10 0 0',
                        text:'Cancel',
                        flex:1
                    },
                    {
                        xtype:'button',
                        margin:'0 0 0 10',
                        text:'Save',
                        flex:1
                    }
                ]
            }
        ]
    }
});
