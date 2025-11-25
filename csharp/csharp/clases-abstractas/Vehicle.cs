public abstract class Vehicle {
// 5 variables privadas
    private int speed;              
    private float weight;          
    private string manufacturer;    
    private bool isOperational;     
    private DateTime yearMade;
// constructor predeterminado
    public Vehicle()
    {
        speed = 23;
        weight = 1500.5f;
        manufacturer = "Generic";
        isOperational = true;
        yearMade = new DateTime(2020, 1, 1);
    }
// 5 metodos abstractos
    public abstract void descriptionVehicle();
    public abstract void drivingMethods(string date);
    public abstract string automate();
    public abstract int start(int value);
    public abstract bool comprobateState();


}
