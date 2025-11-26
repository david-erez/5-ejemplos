package clasesnormales

type ComputerProduct struct {
	brand        string
	ramGB        int
	price        float64
	hasGPU       bool
	serialNumber string
}

// simulacion de constructor por defecto con funcion
func NewComputerProduct(brand string, ramGB int, price float64, hasGPU bool, serialNumber string) *ComputerProduct {
	return &ComputerProduct{
		brand:        "Dell",
		ramGB:        16,
		price:        1200.50,
		hasGPU:       true,
		serialNumber: "SN123456789",
	}
}

// sobreescritura de metodos de la interfaz computadora
func (c *ComputerProduct) Brand() string {
	return c.brand
}
func (c *ComputerProduct) RamGB() int {
	return c.ramGB
}
func (c *ComputerProduct) Price() float64 {
	return c.price
}
func (c *ComputerProduct) HasGPU() bool {
	return c.hasGPU
}
func (c *ComputerProduct) SerialNumber() string {
	return c.serialNumber
}

// aca se implementan los metodos de la interfaz llnspectable
func (c *ComputerProduct) Inspect() string {
	return "Inspecting Computer Product"
}
