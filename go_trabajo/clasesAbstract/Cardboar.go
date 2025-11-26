package clasesAbstract

// simulacion de clase abstracta con interfaz
type Cardboard interface {
	Material() string
	Thickness() float32
	IsRecyclable() bool
	WeightGrams() int
	QualityGrade() rune
}
