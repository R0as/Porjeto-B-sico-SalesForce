public class excluirApex {
    @AuraEnabled

    public static void apagar(String nome, String telefone, String descricao)
    {
        Account[] excluir = [SELECT Name FROM Account WHERE Name = 'Henrique'];
        
        delete excluir;
    }
}