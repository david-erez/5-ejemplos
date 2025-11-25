public abstract class WaterVehicle  {
   // 5 variables protegidas 
    protected string hullMaterial;      
    protected decimal waterDisplacement; 
    protected int crewSize;             
    protected bool hasSonar;           
    protected float maxDepth;
    // constructor predeterminado
    public WaterVehicle()
    {
        hullMaterial = "itorny";
        waterDisplacement = 5000.0m;
        crewSize = 5;
        hasSonar = false;
        maxDepth = 300.0f;
    }          
    // 5 metodos abstractos protegidos
    protected abstract void waterDescription();
    protected abstract void navigationSystems(string system);          
    protected abstract string emergencyProcedures();            
    protected abstract int calculateFuelNeeds(int distance);
    protected abstract bool checkWaterConditions(string condition);

}
