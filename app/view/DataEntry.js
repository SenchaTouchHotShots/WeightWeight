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
                placeHolder:'mm/dd/yyyy'
            },
            {
                xtype:'numberfield',
                id:'weightField',
                margin:'10 0',
                label:'Weight'
            },
            {
                xtype:'numberfield',
                id:'waterField',
                margin:'10 0',
                label:'Water'
            },
            {
                xtype:'numberfield',
                id:'calorieField',
                margin:'10 0',
                label:'Calories'
            },
            {
                xtype:'numberfield',
                id:'exerciseField',
                label:'Exercise'
            },
            {
                xtype:'hiddenfield',
                id:'hiddenTagField'
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
