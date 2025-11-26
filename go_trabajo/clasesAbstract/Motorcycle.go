package clasesAbstract

type Motorcycle interface {
    EngineCC() int
    HasABS() bool
    TankLiters() float32
    Brand() string
        MaxSpeedKMH() uint16
}