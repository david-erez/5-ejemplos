public class Canoe : WaterVehicle, ISailable {
    private float canoeLength;        
    private int paddleCount;
    private string material;
    private bool hasStabilizer;
    private double maxOccupants;
    //constructor por defecto
    public Canoe()
    {
        canoeLength = 4.5f;
        paddleCount = 2;        
        material = "Fiberglass";
        hasStabilizer = false;
        maxOccupants = 3.0;
    }
    //metodos de la interfaz ISailable
    public int numberContainers()
    {
        return 2;
    }

    //metodos sobreescritos de la clase abstracta WaterVehicle

    protected override int calculateFuelNeeds(int distance)
    {
        return 0;
    }

    protected override bool checkWaterConditions(string condition)
    {
        return condition == "Calm";
    }

    protected override string emergencyProcedures()
    {
        return "Wear a life jacket and use a whistle.";
    }

    protected override void navigationSystems(string system)
    {
        Console.WriteLine($"using navigation system: {system}");
    }

    protected override void waterDescription()
    {
        Console.WriteLine($"This canoe is made of {material} and is {canoeLength} meters long.");
    }
    //funcion estatica para exponer los metodos
    public static void ShowCanoeInfo()
    {
        Canoe canoe = new Canoe();
        canoe.waterDescription();
        canoe.navigationSystems("Basic Compass");
        Console.WriteLine(canoe.emergencyProcedures());
        Console.WriteLine(canoe.calculateFuelNeeds(100));
        Console.WriteLine(canoe.checkWaterConditions("Calm"));
        Console.WriteLine(canoe.numberContainers());

    }
    }

