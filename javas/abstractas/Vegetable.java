package javas;
// clase abstracta vegetal
public abstract class Vegetable {
    public int size;
    public String color;
    public int proteinLevel;
    public String picmentes;
    public boolean live;
    // aca se utiliza un constructor por defecto.
    public Vegetable() {
        this.size = 32;
        this.color = "verde";
        this.proteinLevel = 32;
        this.picmentes = "blues";
        this.live = false;
    }    

    public abstract void growth ();
    public abstract int fertilizerLevel(int level);
    public abstract String Icrementation();
    public abstract  double calculateTimeGrowth(double timeLive);
    public abstract void tiepPicmente(String tipeSound);
    public void descriptionVegetable(){
        System.out.println("the vegetable is "+ color + " have a : "+proteinLevel+" have picmentes:"+picmentes+" is"+ live);
    }

}
