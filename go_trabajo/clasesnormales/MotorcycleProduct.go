package clasesnormales

type MotorcycleProduct struct {
	engineCC    int
	hasABS      bool
	tankLiters  float32
	brand       string
	maxSpeedKMH uint16
}

// simulacion de constructor con valores por defecto
func NewMotorcycleProduct(engineCC int, hasABS bool, tankLiters float32, brand string, maxSpeedKMH uint16) *MotorcycleProduct {
	return &MotorcycleProduct{
		engineCC:    87,
		hasABS:      true,
		tankLiters:  12.5,
		brand:       "Yamaha",
		maxSpeedKMH: 180,
	}
}

//sobreescritura de metodos de la interfaz moto
func (m *MotorcycleProduct) EngineCC() int {
	return m.engineCC
}
func (m *MotorcycleProduct) HasABS() bool {
	return m.hasABS
}
func (m *MotorcycleProduct) TankLiters() float32 {
	return m.tankLiters
}
func (m *MotorcycleProduct) Brand() string {
	return m.brand
}
func (m *MotorcycleProduct) MaxSpeedKMH() uint16 {
	return m.maxSpeedKMH
}

// aca implementa los metodos de la interfaz isPriceabele
func (m *MotorcycleProduct) Price() float64 {
	// precio fijo para la simulacion
	return 7500.00
}
