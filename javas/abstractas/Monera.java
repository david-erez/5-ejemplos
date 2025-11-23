package javas.abstractas;

public abstract class Monera {
    //5 variables con modificador de adceso protegido
    protected int [] quantity;
    protected boolean isProcaryote;
    protected double sizeMicrometers;
    protected String formCellular;
    protected boolean haveWallCell;

    //constructor por defecto
     protected Monera(){
        this.quantity = new int[]{1,2,3,4};
        this.isProcaryote = true;
        this.sizeMicrometers  = 4.2;
        this.formCellular = "bacilio";
        this.haveWallCell = true;
    }
     
    //5 metodos protegidos y abstractos, con para metros con retorno, sin retorno y metodos sin parametros con retorno y sin retorno.
     
    protected abstract void move();
    protected abstract String reproduce();
    protected abstract int nutrientsConsumed (int level);
    protected abstract  double stimuli(double levelStimuli);
    protected abstract void tiepPicmente(String tipeSound);


}                                                               