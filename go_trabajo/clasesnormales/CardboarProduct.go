package clasesnormales

type CardboardProduct struct {
	material     string
	thickness    float32
	recyclable   bool
	weightGrams  int
	qualityGrade rune
}

// simulacion de sobrecarga de constructores
func NewCardboardProduct(material string, thickness float32) *CardboardProduct {
	return &CardboardProduct{
		material:  material,
		thickness: thickness,
	}
}
func NewCardboardProductFull(material string, thickness float32, recyclable bool, weightGrams int, qualityGrade rune) *CardboardProduct {
	return &CardboardProduct{
		material:     material,
		thickness:    thickness,
		recyclable:   recyclable,
		weightGrams:  weightGrams,
		qualityGrade: qualityGrade,
	}
}

// metodos de la  interfaz cardboard
func (c *CardboardProduct) Material() string {
	return c.material
}
func (c *CardboardProduct) Thickness() float32 {
	return c.thickness
}
func (c *CardboardProduct) IsRecyclable() bool {
	return c.recyclable
}
func (c *CardboardProduct) WeightGrams() int {
	return c.weightGrams
}
func (c *CardboardProduct) QualityGrade() rune {
	return c.qualityGrade
}

// aca se implementan los metodos de la intefaz IDescriptible
func (c *CardboardProduct) Description() string {
	return "This is a cardboard product"
}
