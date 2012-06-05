/* Placeholder for now. */
Ext.define('WeightWeight.view.AddTag', {
    extend: 'Ext.ActionSheet',
    alias: 'widget.addtag',
    //singleton: true,
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
                itemTpl: [
                    '<div>List Item {string}</div>'
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