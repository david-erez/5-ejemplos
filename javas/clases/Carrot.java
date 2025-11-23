package javas.clases;

import javas.abstractas.Vegetable;
import javas.interfaces.Cut;

public class Carrot extends Vegetable implements Cut {
    private String namecarrot;
    private int wheight;
    private String flavor;
    private double freshness;
    private String texture;
   //clase sin constructor
    

   // aca sobrescribe los metodos de la interfaz cortar
    @Override
    public void blade() {}

    // aca sobrescribe los metodos de la clase abstracta vegetal
    @Override
    public void growth() {}
    
        @Override
    public int fertilizerLevel(int level) {
        return level *wheight +(int) freshness;
    }

    @Override
    public String Icrementation() {
       return "the "+namecarrot+" incrementation";
    }

    @Override
    public double calculateTimeGrowth(double timeLive) {
        return timeLive * fertilizerLevel(proteinLevel);
    }

    @Override
    public void tiepPicmente(String tipeSound) {}
    
    // aca se declaran los getters y setters para poder acceder a los atributos de esta clase.
    public String getNamecarrot() {
        return namecarrot;
    }

    public void setNamecarrot(String namecarrot) {
        this.namecarrot = namecarrot;
    }

    public int getWheight() {
        return wheight;
    }

    public void setWheight(int wheight) {
        this.wheight = wheight;
    }

    public String getFlavor() {
        return flavor;
    }

    public void setFlavor(String flavor) {
        this.flavor = flavor;
    }

    public double getFreshness() {
        return freshness;
    }

    public void setFreshness(double freshness) {
        this.freshness = freshness;
    }

    public String getTexture() {
        return texture;
    }

    public void setTexture(String texture) {
        this.texture = texture;
    }
}
