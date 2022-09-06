public with sharing class  atualizarApex {
    
    @AuraEnabled
    public static void editarRegistro(String nome, String telefone, String descricao)
    {
        
        Account contaParaEditar =  [SELECT Name FROM Account WHERE Name='Henrique'];
        
        contaParaEditar.Name = nome;
        contaParaEditar.Phone = telefone;
        contaParaEditar.Description = descricao;

        update contaParaEditar;
        }
           

    }

