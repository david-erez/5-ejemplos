public class Helicopter : AerialVehicle,  IFlyable {
    public float rotorDiameter;      
    public int bladeCount;           
    public string helicopterType;    
    public bool hasRescueKit;       
    public decimal liftPower;       
//constructor parametizado
    public Helicopter(float rotorDiameter, int bladeCount, string helicopterType, bool hasRescueKit, decimal liftPower)
    {
        this.rotorDiameter = rotorDiameter;
        this.bladeCount = bladeCount;
        this.helicopterType = helicopterType;
        this.hasRescueKit = hasRescueKit;
        this.liftPower = liftPower;
    }
    //metodos de la interfaz IFlyable
        public bool isFlying()
    {
        throw new NotImplementedException();
    }


    //metodos sobreescritos de la clase abstracta AerialVehicle

    public override int calculateFuelNeeds(int distance)
    {
        return distance / 3;
    }

    public override bool checkWeatherConditions(string condition)
    {
        return condition == "sunny";
    }

    public override string emergencyProcedures()
    {
        return "this is an emergency.";
    }

    public override void flightDescription()
    {
        Console.WriteLine($"this helicopter is a {helicopterType} type with a rotor diameter of {rotorDiameter} meters.");
    }
    public override void navigationSystems(string system)
    {
        Console.WriteLine($"using navigation system: {system}");
    }
    //funcion para exponer los metodos
    public static void ShowHelicopterInfo()
    {
        Helicopter helicopter = new Helicopter(14.5f, 4, "Rescue", true, 2000.0m);
        helicopter.flightDescription();
        helicopter.navigationSystems("Advanced GPS");
        Console.WriteLine(helicopter.emergencyProcedures());
        Console.WriteLine(helicopter.calculateFuelNeeds(100));
        Console.WriteLine(helicopter.checkWeatherConditions("sunny"));
        Console.WriteLine(helicopter.isFlying());
    }
        


}
