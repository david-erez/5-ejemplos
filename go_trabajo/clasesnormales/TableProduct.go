package clasesnormales

type TableProduct struct {
	material   string
	lengthCM   float32
	widthCM    float32
	isFoldable bool
	legsCount  int
}

//funcion para crear un constructor con puntero para evitar copias grandes y facilitar modificaciones

func NewTableProduct(material string, lengthCM, widthCM float32, isFoldable bool, legsCount int) *TableProduct {
	return &TableProduct{
		material:   material,
		lengthCM:   lengthCM,
		widthCM:    widthCM,
		isFoldable: isFoldable,
		legsCount:  legsCount,
	}
}

// metodos del oproducto
func (t *TableProduct) Material() string {
	return t.material
}

func (t *TableProduct) LengthCM() float32 {
	return t.lengthCM
}

func (t *TableProduct) WidthCM() float32 {
	return t.widthCM
}

func (t *TableProduct) IsFoldable() bool {
	return t.isFoldable
}

func (t *TableProduct) LegsCount() int {
	return t.legsCount
}

// aca implementa el metodo de la interfaz IStorable
func (t *TableProduct) Stock() string {
	return "In stock: 25 units"
}
