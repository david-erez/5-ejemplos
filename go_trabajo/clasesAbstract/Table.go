package clasesAbstract

// simulacion de clase abstracta con interfaz
type Table interface {
	Material() string
	LengthCM() float32
	WidthCM() float32
	IsFoldable() bool
	LegsCount() int
}
