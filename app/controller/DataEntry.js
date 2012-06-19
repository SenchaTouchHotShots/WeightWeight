Ext.define('WeightWeight.controller.DataEntry', {
    extend: 'Ext.app.Controller',

    config: {
        views: ['DataEntry', 'AddTag'],
        stores: ['EntryStore'],
        refs: {
            tagSheet: '#addTagSheet',
            tagList: '#addTagSheet list',
            tagInput: '#addTagSheet textfield',
            tagButton: 'button#addTagButton',
            tagField: '#hiddenTagField',
            entrySaveButton: 'dataentry button[text="Save"]',
            entryCancelButton: 'dataentry button[text="Cancel"]',
            entryForm: 'dataentry'
        },
        control: {
            tagButton: {
                tap: 'showAddTag'
            },
            tagInput: {
              clearicontap: 'deselectTag'
            },
            tagList: {
              select: 'selectTag'
            },
            '#addTagSheet button[text="Cancel"]': {
                tap: 'cancelAddTag'
            },
            '#addTagSheet button[text="Save"]': {
                tap: 'saveAddTag'
            },
            entrySaveButton: {
                tap: 'saveEntry'
            },
            entryCancelButton: {
                tap: 'clearEntry'
            }
        }
    },
    showAddTag: function() {
        var sheet = this.getTagSheet();
        if (typeof sheet == 'undefined') {
            sheet = Ext.widget('addtag');
            Ext.Viewport.add(sheet);
        }
        sheet.show();
    },
    cancelAddTag: function() {
        this.getTagSheet().hide();
    },
    saveAddTag: function() {
        var tag = this.getTagInput().getValue(),
            store = this.getTagList().getStore();
        if (tag != "") {
            this.getTagButton().setText('Tag: '+tag);
            this.getTagField().setValue(tag);
            if (store.findExact('text', tag) == -1) {
                store.add({text: tag});
                store.sync();
            }
        } else {
            this.getTagButton().setText('Add Tag');
            this.getTagField().setValue('');
        }

        this.getTagSheet().hide();
    },
    selectTag: function(list, record) {
        this.getTagInput().setValue(record.get('text'));
    },
    deselectTag: function() {
        this.getTagList().deselectAll();
    },
    saveEntry: function() {
        var values = this.getEntryForm().getValues(),
            store = Ext.getStore('EntryStore'),
            entry = Ext.create('WeightWeight.model.Entry', values);

        store.add(entry);

        store.sync();
        Ext.Msg.alert('Saved!', 'Your data has been saved.', this.clearEntry, this);
    },
    clearEntry: function() {
        this.getEntryForm().reset();
        this.getTagButton().setText('Add Tag');
    }
});
