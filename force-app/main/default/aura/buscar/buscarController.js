({
    init : function(component, event, helper) {
            component.set('v.columns', [
                {label: 'Nome', fieldName: 'Name', type: 'text'},
                {label: 'Telefone', fieldName: 'Phone', type: 'Phone'},
                {label:'Descrição', fieldName:'Description',type:'textarea'}
            ]);
            
            helper.retornarTabela(component, event);
        
    }
})