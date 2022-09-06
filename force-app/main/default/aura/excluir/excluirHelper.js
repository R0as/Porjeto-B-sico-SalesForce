({
    apagarDado : function() {
        var action = component.get('c.apagar');

        action.setParams({
            nome:component.get('v.nome'),
            telefone:component.get('v.telefone'),
            descricao:component.get('v.descricao')
        });
        action.setCallback(this, function(response){
            let state = response.getState();

            if(state === 'SUCCESS')
            {
                console.log('Voltamos do backend');
                component.set('v.esconderSpinner', true);
                helper.showToast(component, event, helper, 'success');
            }
            
            if(state === 'ERROR')
                console.log('Ocorreu um erro');
        });

        $A.enqueueAction(action);

    },

    showToast : function(component, event, helper, type) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Successo!",
            "type": "success",
            "message": "Conta excluida com Sucesso!"
        });
        toastEvent.fire();
    }
    
})