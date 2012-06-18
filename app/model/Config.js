Ext.define('WeightWeight.model.Config', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'startingWeight', type: 'float'},
            {name: 'targetWeight', type: 'float'},
            {name: 'exercisePerDay', type: 'int', defaultValue: 30},
            {name: 'caloriesPerDay', type: 'int'},
            {name: 'waterPerDay', type: 'int', defaultValue: 8},
            {name: 'weightUnits', type: 'string', defaultValue: 'lbs'},
            {name: 'waterUnits', type: 'string', defaultValue: 'glass'}
        ],
        proxy: {
            type: 'localstorage',
            id  : 'weightweight-config'
        }
    }
});