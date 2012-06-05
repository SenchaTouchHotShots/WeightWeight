Ext.define("WeightWeight.view.Config", {
    extend:'Ext.form.Panel',
    alias: 'widget.configform',
    config:{
        title:'Config',
        iconCls:'settings',
        items:[
            {
                xtype:'fieldset',
                title:'Weight Loss Goal',
                items:[
                    {
                        xtype:'textfield',
                        id:'startingWeight',
                        label:'Starting Weight'
                    },
                    {
                        xtype:'textfield',
                        id:'targetWeight',
                        label:'Target Weight'
                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'Daily Goals',
                items:[
                    {
                        xtype:'spinnerfield',
                        id:'exercisePerDay',
                        label:'Exercise (minutes)',
                        defaultValue:30,
                        increment: 1
                    },
                    {
                        xtype:'spinnerfield',
                        id:'caloriesPerDay',
                        label:'Caloric Intake',
                        defaultValue:0,
                        increment: 100
                    },
                    {
                        xtype:'spinnerfield',
                        id:'waterPerDay',
                        label:'Water Consumption',
                        defaultValue:8,
                        increment: 1
                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'Units of Measure',
                padding:25,
                items:[
                    {
                        xtype:'fieldset',
                        title:'Weight',
                        items:[
                            {
                                xtype:'radiofield',
                                label:'Pounds',
                                name:'weightUnits',
                                value:'lbs',
                                checked:true
                            },
                            {
                                xtype:'radiofield',
                                label:'Kilograms',
                                name:'weightUnits',
                                value:'kg'
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        title:'Water',
                        items:[
                            {
                                xtype:'radiofield',
                                label:'Glasses',
                                name:'waterUnits',
                                value:'glass',
                                checked:true
                            },
                            {
                                xtype:'radiofield',
                                label:'Ounces',
                                name:'waterUnits',
                                value:'oz'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});