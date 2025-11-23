package javas.abstractas;

public abstract class Fungi {
    //variables por defecto, pueden se accesibles en otra clases que este dentro de el mismo paquete.
    String nameScientific;
    boolean isEdible;
    int levelToxicity;
    double diameterHat;
    String nameFungi;
    //sobre carga de constructores 
    // constructor sin argumentos
    public Fungi (){
        nameScientific = "amoeba";
        isEdible =true;
        levelToxicity = 343;
        diameterHat = 43.5;
        nameFungi = "georje";
    }
    // constructur parametizado:
    public Fungi (String nameScientific,boolean isEdible,int levelToxicity,double diameterHat,String nameFungi){
        this.nameScientific  = nameScientific;
        this.isEdible = isEdible;
        this.levelToxicity = levelToxicity;
        this.diameterHat = diameterHat;
        this.nameFungi = nameFungi;
    }

    //5 metodos abstractos que van a ser implementados por clase levadura
    public abstract void absorbentNutrients();
    public abstract String getStructure(int level);
    public abstract boolean produceEspores();
    public abstract  double calculateImprovement(double timeLive);
    public abstract void getUbication(String tipeSound);


}
