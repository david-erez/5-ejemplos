public class Drone : AerialVehicle, IFlyable {
    private int batteryLife;         
    private string cameraQuality;   
    private bool hasThermalVision;   
    private double remoteRange;       
    private float aiNavigationLevel;  
    // constructor privado
    private Drone(){}
    //metodos de la interfaz IFlyable
    public bool isFlying()
    {
        return true;
    }
    // metodos sobreescritos de la clase abstracta AerialVehicle
    public override int calculateFuelNeeds(int distance)
    {
        return distance / 10;
    }

    public override bool checkWeatherConditions(string condition)
    {
        return condition == "clear";
    }

    public override string emergencyProcedures()
    {
        return "follow emergency landing procedures.";
    }

    public override void flightDescription()
    {
        Console.WriteLine($"this drone has a camera quality of {cameraQuality} and a remote range of {remoteRange} km.");
    }

    public override void navigationSystems(string system)
    {
        Console.WriteLine($"using navigation system: {system}");
    }
    // funcion estatica para exponer los metodos
    public static void ShowDroneInfo()
    {
        Drone drone = new Drone();
        drone.flightDescription();
        drone.navigationSystems("Standard GPS");                
        Console.WriteLine(drone.emergencyProcedures());
        Console.WriteLine(drone.calculateFuelNeeds(100));
        Console.WriteLine(drone.checkWeatherConditions("clear"));
        Console.WriteLine(drone.isFlying());
    }
}
