// ...existing code...
package javas;
// clase que implementa la interfaz comer y nadar, como tambie hereda de la clase protista
class Sperilos extends Monera implements Eat,Swin {
    boolean haveFlagelos;

    // constructor parametizado
    public Sperilos(boolean haveFlagelos) {
        super();
        this.haveFlagelos = haveFlagelos;
    }
    
//metodo implementado de la interfaz comer
    @Override
    public void etating() {
        System.out.println("sperilos is eating");
    }

//metodo implimentado de la interfaz swin
    @Override
    public void SwimDepp() {
        this.sizeMicrometers += 0.2;
        System.out.println("sperilos swims deep. haveFlagelos=" + this.haveFlagelos
            + " size=" + this.sizeMicrometers );
    }
// metodos sobreescritos de la clase mornera
    @Override
    protected void move() {
        this.formCellular = "movement by flagella";
        System.out.println("move executed: " + this.formCellular);
    }

    @Override
    protected String reproduce() {
       
        String resp = "binary fission";
        System.out.println("reproduction: " + resp);
        return resp;
    }

    @Override
    protected int nutrientsConsumed(int level) {
        int consumed = Math.max(0, level * 2);
        System.out.println("nutrients consumed: level=" + level + "  consumed=" + consumed);
        return consumed;
    }

    @Override
    protected double stimuli(double levelStimuli) {
        double response = levelStimuli * 0.75;
        System.out.println("stimulus response: level=" + levelStimuli + " -> response=" + response);
        return response;
    }

    @Override
    protected void tiepPicmente(String tipeSound) {
        System.out.println("responsable type: " + tipeSound);
    }

    
}
