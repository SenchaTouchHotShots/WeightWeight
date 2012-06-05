Ext.define('WeightWeight.controller.DataEntry', {
    extend: 'Ext.app.Controller',

    config: {
        views: ['DataEntry', 'AddTag'],
        refs: {
            tagSheet: {
                selector: '#addTagSheet'
            }
        },
        control: {
            'button#addTagButton': {
                tap: 'showAddTag'
            },
            '#addTagSheet button[text="Cancel"]': {
                tap: 'cancelAddTag'
            },
            '#addTagSheet button[text="Save"]': {
                tap: 'saveAddTag'
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
        //TODO:
        // 1. Update "Add Tag" button text to be "Tag: "+tagName
        // 2. Set value of hidden tag field.
        // 3. Add tag to list of existing tags.
        // 4. Clear tagSheet values, deselect tag from list.
        this.getTagSheet().hide();
    }
});