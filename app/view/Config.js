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
                        xtype:'numberfield',
                        id:'startingWeight',
                        name:'startingWeight',
                        label:'Starting Weight'
                    },
                    {
                        xtype:'numberfield',
                        id:'targetWeight',
                        name:'targetWeight',
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
                        name:'exercisePerDay',
                        label:'Exercise (minutes)',
                        increment: 1
                    },
                    {
                        xtype:'spinnerfield',
                        id:'caloriesPerDay',
                        name:'caloriesPerDay',
                        label:'Caloric Intake',
                        increment: 100
                    },
                    {
                        xtype:'spinnerfield',
                        id:'waterPerDay',
                        name:'waterPerDay',
                        label:'Water Consumption',
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
                                value:'lbs'
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
                                value:'glass'
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