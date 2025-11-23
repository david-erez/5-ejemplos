package javas;

public class Main {
    public static void main(String[] args) {
        Chicken pollito = new Chicken("carlos","amarilla" , 46,"A" , 65);
        Carrot carrot = new Carrot();
        Ameba ameba = new Ameba();
        ameba.etating();
    
        


        // datos de zanahoria
        carrot.blade();
        carrot.descriptionVegetable();
        System.out.println(carrot.fertilizerLevel(4));
        System.out.println(carrot.calculateTimeGrowth(3));
        System.out.println(carrot.Icrementation());        
        
        
        //datos de la gallina.
        pollito.descriptionAnimal();
        pollito.volar();
        System.out.println(pollito.description());
        pollito.reproduce();
        pollito.etating();
        
    }
}
