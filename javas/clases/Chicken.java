package javas;
// clase normal que se extiende de la clase animal, e implementa la interfaz volar y comer.
public class Chicken extends Animal implements Eat,Fly {
    public String name;
    public String breed;
    public int bloodTipe;
    public String quality;
    public int comensurate;
// 1 contructor parametizado
   public Chicken(String name, String breed, int bloodTipe, String quality,int comensurate ){
        this.name = name;
        this.breed = breed;
        this.bloodTipe = bloodTipe;
        this.quality = quality;
        this.comensurate = comensurate;
    }
// aca sobreescribe los metodos de la clase padre 
    @Override
    public void reproduce() {
        System.out.println("the chicken reproduce whit chicken");        
    }

    @Override
    public int duration(int level) {
    return level;
    }

    @Override
    public String description() {
        return "the chicken is "+name+" she works on the bais of "+ quality;

    }

    @Override
    public double calculateTimeLife(double timeLive) {
        return comensurate * timeLive -10;
    }

    @Override
    public void getVolume(String tipeSound) {
        System.out.println("the chicken ko-ko-ko-ko in type"+breed);
    }
// aca sobreescrube los metodos de la interfaz volar
    @Override
    public void volar() {
        System.out.println("chickens cannot fly");
    }
//aca sobreescribe los metodos de la interfaz comer
    @Override
    public void etating() {
        System.out.println("the chicken eat rize whit milk");
    }
    
}
