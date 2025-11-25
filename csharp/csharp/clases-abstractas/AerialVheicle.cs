public abstract class AerialVehicle  {
//5 variables privadas
    private double WingSpan;         
    private int EngineCount;         
    private bool HasAutoPilot;       
    private string FlightControl;    
    private float MaxAltitude;       
//constructor por defecto
    public AerialVehicle()
    {
        WingSpan = 35.5;
        EngineCount = 2;
        HasAutoPilot = true;
        FlightControl = "Standard";
        MaxAltitude = 12000.0f;
    }
//5 metodos abstractos
    public abstract void flightDescription();
    public abstract void navigationSystems(string system);          
    public abstract string emergencyProcedures();
    public abstract int calculateFuelNeeds(int distance);
    public abstract bool checkWeatherConditions(string condition);

}
