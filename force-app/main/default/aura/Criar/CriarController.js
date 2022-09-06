({
    enviarDados : function(component, event, helper)
    {
        component.set('v.esconderSpinner', false);
        helper.criarConta(component, event, helper);
    }
})