package javas.clases;

import javas.abstractas.Protista;
import javas.interfaces.Swin;

public class Ameba extends Protista implements Swin   {
    private String locomotionTipe;
    private boolean modeAlimentation;
    private boolean cyst;
    private boolean isPathogenic;
    private int vacuolas;

    // aca se sobrescriben los metodos de la interfaz nadar
    @Override
    public void SwimDepp() {
        if (modeAlimentation) {
            System.out.println("the ameba use tank oxigen");
        }
        System.out.println("the ameba swin in the ocean");
    }

    //aca sobrescribe los metodos de la clase Protista 
    @Override
    protected void move() {
        System.out.println("the ameba is moving");
    }

    @Override
    protected String reproduceAsexually() {
        if (cyst) {
            return"the ameba is reproduce whit ameba";
        }
        else{
            return "the ameba not reproduce";
        }
    }

    @Override
    protected int nutrientsConsumedProtiste(int level) {
        return level * vacuolas;
    }

    @Override
    protected double calculateVelocity(double velocity) {
        if (haveCell) {
            return velocity * 0.89;
        }
        else{
            return 0;
        }
    }

    @Override
    protected void getHabitat(String tipe) {
        System.out.println("the ameba has having a "+ locomotionTipe+" in  type habitad "+tipe);
    }
    
}
