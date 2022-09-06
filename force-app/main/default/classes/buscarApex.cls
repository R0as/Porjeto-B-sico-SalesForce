public class buscarApex 
{
    @AuraEnabled
    public static List<Account> buscarNomes()
    {
        
        List<Account> listaNomes = [Select Id, Name, Phone,Description From Account Where Phone != null AND Name != null ORDER BY name ASC LIMIT 10];
        
        return listaNomes;
    }
}