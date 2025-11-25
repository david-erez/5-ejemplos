public class Car : LandVehicle , IEnginePowered, ITransportGoods {
    private int doorCount;            
    private string modelName;        
    private bool hasTurbo;        
    private float fuelConsumption; 
    private decimal trunkSpace;    
    //contructor parametrizado
    public Car(int doors, string model, bool turbo, float consumption, decimal trunk)
    {
        doorCount = doors;
        modelName = model;
        hasTurbo = turbo;
        fuelConsumption = consumption;
        trunkSpace = trunk;
    }
    //5 metodos sobreescritos por la clase Car
    public override bool checkRoadCondition(string condition)
    {
    return condition == "Dry";
    }

    public override void driveMode(string mode)
    {
        if (mode == "Sport")
        {
            Console.WriteLine("Driving in sport mode");
        }
        else
        {
            Console.WriteLine("Driving in normal mode");
        }
    }

    public override int estimateTravelTime(int distance)
    {
        return distance / 60; 
    }

    public override void landDescription()
    {
        Console.WriteLine($"This car is a {modelName} with {doorCount} doors.");
    }
    public override string safetyFeatures()
    {
        return "Airbags, ABS, Traction Control";
    }
    //metodos de la interfaz IEnginePowered

    public void startEngine()
    {
        Console.WriteLine("Engine started.");
    }
    //metodos de la interfaz ITransportGoods
      public int loadCapacity()
    {
        return 500;
    }
    //funcion para exponer los metodos
    public static void ShowCarInfo()
    {
        Car car = new Car(4, "Sedan", true, 8.5f, 450.0m);
        car.landDescription();
        car.driveMode("Sport");
        Console.WriteLine(car.safetyFeatures());
        Console.WriteLine(car.estimateTravelTime(120));
        Console.WriteLine(car.checkRoadCondition("Dry"));
        car.startEngine();
        Console.WriteLine(car.loadCapacity());
    }                        
}
