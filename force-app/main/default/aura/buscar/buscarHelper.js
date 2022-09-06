({
    retornarTabela : function(component,event) {
        var action = component.get('c.buscarNomes');
        
        action.setCallback(this, function(response){
			let resposta = response.getReturnValue();

			console.log('Voltamos do backend');
			console.log('Recebemos isso: ', resposta);
            component.set('v.contas', resposta);
		});
        
        $A.enqueueAction(action);
    }
})