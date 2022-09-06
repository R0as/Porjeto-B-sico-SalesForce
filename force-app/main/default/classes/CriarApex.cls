public with sharing class CriarApex 
{
    @AuraEnabled
    public static void criarRegistro(String nome, String telefone, String descricao)
    {
        Account criarNovo = new Account();

        criarNovo.Name = nome;
        criarNovo.Phone = telefone;
        criarNovo.Description = descricao;

        insert criarNovo;

    }
}