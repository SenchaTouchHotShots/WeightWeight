Ext.define('Ext.overrides.field.Checkbox', {
    override: 'Ext.field.Checkbox',

    updateChecked: function(newChecked) {
        this.getComponent().setChecked(newChecked);

        // only call onChange (which fires events) if the component has been initialized
        if (this.initialized) {
            this.onChange();
        }
    },

    // @private
    onMaskTap: function(component, e) {
        var me = this,
            dom = component.input.dom;

        if (me.getDisabled()) {
            return false;
        }

        //we must manually update the input dom with the new checked value
        dom.checked = !dom.checked;

        me.onChange(e);

        //return false so the mask does not disappear
        return false;
    },

    /**
     * Fires the `check` or `uncheck` event when the checked value of this component changes.
     * @private
     */
    onChange: function(e) {
        var me = this,
            oldChecked = me._checked,
            newChecked = me.getChecked();

        // only fire the event when the value changes
        if (oldChecked != newChecked) {
            if (newChecked) {
                me.fireEvent('check', me, e);
            } else {
                me.fireEvent('uncheck', me, e);
            }
        }
    }
});

Ext.define('Ext.overrides.field.Radio', {
    override: 'Ext.field.Radio',

    updateChecked: function(newChecked) {
        this.getComponent().setChecked(newChecked);

        if (this.initialized) {
            this.refreshGroupValues();
        }
    },

    // @private
    onMaskTap: function(component, e) {
        var me = this,
            dom = component.input.dom;

        if (me.getDisabled()) {
            return false;
        }

        if (!me.getChecked()) {
            dom.checked = true;
        }

        me.refreshGroupValues();

        //return false so the mask does not disappear
        return false;
    },

    /**
     * Loops through each of the fields this radiofield is linked to (has the same name) and
     * calls onChange on those fields so the appropriate event is fired.
     * @private
     */
    refreshGroupValues: function() {
        var fields = this.getSameGroupFields(),
            ln = fields.length,
            i = 0,
            field;

        for (; i < ln; i++) {
            field = fields[i];
            field.onChange();
        }
    },
    /**
     * Set the matched radio field's status (that has the same value as the given string) to checked
     * @param {String} value The value of the radio field to check
     * @return {Ext.field.Radio} The field that is checked
     */
    setGroupValue: function(value) {
        var fields = this.getSameGroupFields(),
            ln = fields.length,
            i = 0,
            field;
        for (; i < ln; i++) {
            field = fields[i];
            if (field._value === value) {
                field.setChecked(true);
                return field;
            }
        }
    },
    getSameGroupFields: function() {
        var component = this.up('formpanel') || this.up('fieldset'),
            name = this.getName(),
            replaceLeft = this.qsaLeftRe,
            replaceRight = this.qsaRightRe,
            components = [],
            elements, element, i, ln;

        if (!component) {
            // <debug>
            Ext.Logger.warn('Ext.field.Radio components must always be descendants of an Ext.form.Panel or Ext.form.FieldSet.');
            // </debug>
            component = Ext.Viewport;
        }

        elements = component.query('[name=' + name + ']');

        return elements;
    }
});