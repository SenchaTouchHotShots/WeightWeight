Ext.define('WeightWeight.view.AddTag', {
    extend: 'Ext.ActionSheet',
    alias: 'widget.addtag',
    config: {
        id: 'addTagSheet',
        items: [
            {
                xtype: 'textfield',
                label: 'Enter a New Tag',
                placeHolder: 'or choose a tag from the list below.'
            },
            {
                xtype: 'list',
                height: 300,
                store: {
                    model: 'WeightWeight.model.Tag',
                    autoLoad: true
                },
                itemTpl: [
                    '<div>{text}</div>'
                ]
            },
            {
                xtype: 'container',
                margin: 10,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        margin: '0 10 0 0',
                        text: 'Cancel',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        margin: '0 0 0 10',
                        text: 'Save',
                        flex: 1
                    }
                ]
            }
        ]
    }

});