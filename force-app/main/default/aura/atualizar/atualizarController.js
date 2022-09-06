({
    editarDados : function(component, event, helper) 
    {
        component.set('v.esconderSpinner', false);
        helper.alterarConta(component, event, helper);
    }
})