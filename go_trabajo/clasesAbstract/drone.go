package clasesAbstract

// simulacion de clase abstracta con interfaz
type DroneFactory interface {
	sector() string
	testRooms() uint8
	maxDronesPerDay() int
	hasGovLicense() bool
	riskLevel() float32
}
