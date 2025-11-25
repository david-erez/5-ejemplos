public abstract class RailVehicle  {
    //5 variables privadas
    private float trackGauge;        
    private int carriageCount;        
    private string brakeSystem;      
    private bool isElectric;          
    private decimal maxLoad;        
    //constructor por defecto
    public RailVehicle()
    {
        trackGauge = 1.435f;
        carriageCount = 10;
        brakeSystem = "Air";
        isElectric = false;     
        maxLoad = 20000.0m; 
    }
    //5 metodos abstractos
    public abstract void railDescription();
    public abstract void couplingMechanism(string type);
    public abstract string signalSystems();
    public abstract int calculateTravelTime(int distance);
    public abstract bool checkTrackCondition(string condition);

}
