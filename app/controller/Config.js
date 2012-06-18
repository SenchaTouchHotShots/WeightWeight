Ext.define('WeightWeight.controller.Config', {
    extend: 'Ext.app.Controller',
    
    config: {
        views:['Config'],
        models:['Config'],
        refs: {
            form: 'configform'
        },
        control: {
            form: {
                initialize: 'getSavedConfig'
            }
        }
    },
    

    getSavedConfig: function() {

        /* Load our config record. We only ever use one, so we call it id: 1. If it doesn't yet exist, we create it. */

        var config = Ext.ModelManager.getModel('WeightWeight.model.Config');
        config.load(1, {
            scope: this,
            failure: this.createSavedConfig, // if it doesn't exist, create it.
            success: this.bindRecordToForm // otherwise bind it to the form.
        });
    },
    createSavedConfig: function() {
        var config = Ext.create('WeightWeight.model.Config', {id: 1});
        config.save({
            success: this.bindRecordToForm
        }, this);
    },
    bindRecordToForm: function(record) {
        this.savedConfig = record;

        var form = this.getForm();
        form.setRecord(this.savedConfig);
        form.on({
           delegate: 'field', // listen to change events from the form's child fields.
           change: this.updateValue,
            spin: this.updateValue,
            scope: this
        });

            form.on({
            delegate: 'radiofield',
            check: function(field) {
                console.log('Checked:');
                console.log(arguments);
                this.updateValue(field, field.getGroupValue());
            },
            scope: this
        });
    },
    updateValue: function(field, newValue) {
        console.log('Setting '+field.getName()+' to '+newValue);
        this.savedConfig.set(field.getName(), newValue);
        this.savedConfig.save();
        console.log(this.savedConfig);
    }
});