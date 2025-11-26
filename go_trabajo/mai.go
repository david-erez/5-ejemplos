package gotrabajo

import (
	"fmt"
	"go_trabajo/clasesnormales"
)

func main() {
	c := clasesnormales.NewCardboardProduct("Cartón", 0.5)
	fmt.Println(c.Material())
	fmt.Println(c.Thickness())
	fmt.Println(c.IsRecyclable())
	fmt.Println(c.WeightGrams())
	fmt.Println(c.QualityGrade())
	fmt.Println(c.Description())

	t := clasesnormales.NewTableProduct("Madera", 120.0, 60.0, true, 4)
	fmt.Println(t.Material())
	fmt.Println(t.LengthCM())
	fmt.Println(t.WidthCM())
	fmt.Println(t.IsFoldable())
	fmt.Println(t.LegsCount())
	fmt.Println(t.Stock())

	m := clasesnormales.NewMotorcycleProduct(600, true, 15.5, "Yamaha", 150)
	fmt.Println(m.Brand())
	fmt.Println(m.EngineCC())
	fmt.Println(m.HasABS())
	fmt.Println(m.TankLiters())
	fmt.Println(m.MaxSpeedKMH())
	fmt.Println(m.Price())

}
