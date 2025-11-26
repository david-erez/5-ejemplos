package clasesAbstract

// simulacion de clase abstracta con interfaz
type Computer interface {
	Brand() string
	RamGB() int
	Price() float64
	HasGPU() bool
	SerialNumber() string
}
