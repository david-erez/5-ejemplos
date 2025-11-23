package javas;


import javas.clases.Ameba;
import javas.clases.Carrot;
import javas.clases.Chicken;
import javas.clases.Levadura;
import javas.clases.Sperilos;


public class Main {
    public static void main(String[] args) {
        Chicken pollito = new Chicken("carlos","amarilla" , 46,"A" , 65);
        Carrot carrot = new Carrot();
        Ameba ameba = new Ameba();
        Levadura levadura = new Levadura();
        Sperilos sperilos = new Sperilos(false);
        
        //datos de sperilos
        sperilos.etating();
        sperilos.SwimDepp();
        System.out.println("--------------------------------");

        levadura.absorbentNutrients();
        levadura.getUbication("icelandia");
        System.out.println(levadura.getStructure(34));
        System.out.println(levadura.produceEspores());
        System.out.println(levadura.calculateImprovement(3));
        System.out.println("--------------------------------");

        //datos de ameba , so hay dos metodos por que son los metodos publicos de la interfaz, ya que el resto son metodos protegidos
        ameba.etating();
        ameba.SwimDepp();
        System.out.println("--------------------------------");
    
        // datos de zanahoria
        carrot.blade();
        carrot.descriptionVegetable();
        System.out.println(carrot.fertilizerLevel(4));
        System.out.println(carrot.calculateTimeGrowth(3));
        System.out.println(carrot.Icrementation());        
        System.out.println("--------------------------------");
        
        //datos de la gallina.
        pollito.descriptionAnimal();
        pollito.volar();
        System.out.println(pollito.description());
        pollito.reproduce();
        pollito.etating();
        
    }
}
