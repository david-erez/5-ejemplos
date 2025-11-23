package javas.abstractas;

import javas.interfaces.Eat;

//clase abstracta que implementa la interfaz comer
public abstract class Protista implements Eat{
    public boolean isEucariota;
    public String typeOrganizationCell;
    public String modeNutrition;
    public boolean haveCell;
    public String movingMechanism;
    //aca se sobreescribe el metodo de la interfaz comer
    @Override
    public void etating() {
        System.out.println("the boy is eting ");      
    }
    //metodos abstractos
         
    protected abstract void move();
    protected abstract String reproduceAsexually();
    protected abstract int nutrientsConsumedProtiste (int level);
    protected abstract  double calculateVelocity(double velocity);
    protected abstract void getHabitat(String tipe);



    
}
