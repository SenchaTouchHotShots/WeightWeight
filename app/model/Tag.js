Ext.define('WeightWeight.model.Tag', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'text', type: 'string'}
        ],
        proxy: {
            type: 'localstorage',
            id: 'weightweight-tag'
        }
    }
});