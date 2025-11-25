#pragma warning disable CA1050 // Declare types in namespaces
public abstract class LandVehicle  {
#pragma warning restore CA1050 // Declare types in namespaces
    public int WheelCount;           
    public string FuelType;         
    public bool HasTractionControl; 
    public float SuspensionQuality;  
    // constructor predeterminado
    public LandVehicle()
    {
        WheelCount = 4;
        FuelType = "Gasoline";          
        HasTractionControl = true;
        SuspensionQuality = 7.5f;
    }
    //5 metodos abstractos
    public abstract void landDescription();
    public abstract void driveMode(string mode);
    public abstract string safetyFeatures();
    public abstract int estimateTravelTime(int distance);
    public abstract bool checkRoadCondition(string condition);  
}
