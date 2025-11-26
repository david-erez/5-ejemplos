package clasesnormales

type DroneProduct struct {
	model       string
	maxAltitude int
	batteryLife float32
	isMilitary  bool
	propellers  uint8
}

// simulacion de sobrecarfa de constructores
func NewDroneProduct(model string, maxAltitude int) *DroneProduct {
	return &DroneProduct{
		model:       model,
		maxAltitude: maxAltitude,
	}
}
func NewDroneProductFull(model string, maxAltitude int, batteryLife float32, isMilitary bool, propellers uint8) *DroneProduct {
	return &DroneProduct{
		model:       model,
		maxAltitude: maxAltitude,
		batteryLife: batteryLife,
		isMilitary:  isMilitary,
		propellers:  propellers,
	}
}

// metodos de la  interfaz drone
func (d *DroneProduct) Model() string {
	return d.model
}
func (d *DroneProduct) MaxAltitude() int {
	return d.maxAltitude
}
func (d *DroneProduct) BatteryLife() float32 {
	return d.batteryLife
}
func (d *DroneProduct) IsMilitary() bool {
	return d.isMilitary
}
func (d *DroneProduct) Propellers() uint8 {
	return d.propellers
}

// aca se implementan los metodos de la intefaz  Lishipple
func (d *DroneProduct) ShippingCost() float64 {
	return 150.00
}
