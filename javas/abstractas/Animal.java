package javas.abstractas;
//1. clase abstracta
public abstract class Animal {
// 5 variables privadas
private String especies;
private double size;
private String  color;
private Boolean live;
private int age;
// 1. construtor por defecto 
public Animal() {
        this.especies = "pollo";
        this.size = 2.75;
        this.color = "black";
        this.live = true;
        this.age = 13;
    }
// 5 metodos abstractos
public abstract void reproduce();
public abstract int duration(int level);
public abstract String description();
public abstract  double calculateTimeLife(double timeLive);
public abstract void getVolume(String tipeSound);
    
public void descriptionAnimal(){
    System.out.println( especies + " is from color : "+color+" is thag big:"+size+" have"+age+" age");
}
}