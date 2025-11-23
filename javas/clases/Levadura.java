package javas.clases;

import javas.abstractas.Fungi;
import javas.interfaces.Nutrition;

public class Levadura extends Fungi implements Nutrition{
    public boolean performFermentation;
    public String tipeReproduction;
    public String producFermentation;
    public boolean isTrainer;
    public double temperatureOptime;
    // aca sobrescribe los metodos de la interfaz nutricion
    @Override
    public void isNutraining() {
        String result = isTrainer ? "se puede nutrir" : "no se puede nutrir";
        System.out.println(result);
    }
    // aca sobrescribe los metodos de la clase padre protista

    @Override
    public void absorbentNutrients() {
        System.out.println("the levadura absorbing nutrinets by form epic");
    }

    @Override
    public String getStructure(int level) {
        return "the leve of structure is"+level;
    }

    @Override
    public boolean produceEspores() {
    return true;
    }

    @Override
    public double calculateImprovement(double timeLive) {
        return temperatureOptime * timeLive;
    }

    @Override
    public void getUbication(String tipeSound) {
        System.out.println("the hubication levadura is a box");
    }


    
}
