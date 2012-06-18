Ext.define('WeightWeight.model.Entry', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'entryDate', type: 'date', dateFormat: 'm-d-Y'},
            {name: 'weight', type:'float'},
            {name: 'water', type:'int'},
            {name: 'calories', type: 'int'},
            {name: 'exercise', type: 'int'},
            {name: 'tag', type: 'string'}
        ],
        proxy: {
            type: 'localstorage',
            id: 'weightweight-entry'
        }
    }
});