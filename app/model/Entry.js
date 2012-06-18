Ext.define('WeightWeight.model.Entry', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'entryDate', type: 'date'},
            {name: 'weight', type:'float'},
            {name: 'water', type:'int'},
            {name: 'calories', type: 'int'},
            {name: 'exercise', type: 'int'},
            {name: 'tag', type: 'string'}
        ]
    }
});