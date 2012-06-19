Ext.define('WeightWeight.store.EntryStore', {
   extend: 'Ext.data.Store',
    config: {
   model: 'WeightWeight.model.Entry',
   autoLoad: true,
    storeId: 'EntryStore',
        sorters: [{property:'entryDate',direction:'ASC'}]
    }
});