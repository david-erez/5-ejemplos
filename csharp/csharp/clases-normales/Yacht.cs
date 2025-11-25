    class Yacht : WaterVehicle, ISailable, INavigable  {
    private int deckCount;            
    private double enginePower;       
    private string luxuryGrade;       
    private bool hasJacuzzi;          
    private decimal autonomyHours;    
//constructor privado  y privado
    private Yacht()
    {
        deckCount = 3;
        enginePower = 2500.0;
        luxuryGrade = "Premium";
        hasJacuzzi = true;
        autonomyHours = 48.0m;
    }

    //metodos de la interfaz INavigable 
     public void navigateTo(string destination)
    {
        Console.WriteLine($"navigating to {destination}.");
    }
    //metodos de la interfaz ISailable

    public int numberContainers()
    {
        return 20;
    }
    //metodos sobreescritos de la clase abstracta WaterVehicle
  

    protected override int calculateFuelNeeds(int distance)
    {
     return distance / 5;
    }

    protected override bool checkWaterConditions(string condition)
    {
        return condition == "Calm";
    }

    protected override string emergencyProcedures()
    {
        return "Deploy life rafts and call for assistance.";
    }

    protected override void navigationSystems(string system)
    {
        Console.WriteLine($"using navigation system: {system}");
    }

    protected override void waterDescription()
    {
        Console.WriteLine($"this yacht is made of {hullMaterial} and can accommodate {deckCount} people.");
    }
    //funcion estatica para exponer los metodos
    public static void ShowYachtInfo()
    {
        Yacht yacht = new Yacht();
        yacht.waterDescription();
        yacht.navigationSystems("GPS");
        Console.WriteLine(yacht.emergencyProcedures());
        Console.WriteLine(yacht.calculateFuelNeeds(100));
        Console.WriteLine(yacht.checkWaterConditions("Calm"));
        yacht.navigateTo("Bahamas");
        Console.WriteLine(yacht.numberContainers());
    }
    
    }
