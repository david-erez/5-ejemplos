class Craftsman {
 //5 variables privadas
 #levelMaster;
 #name;
 #tipeCrafts;
 #resourceMain; 
 #age;
 // constructor con valores por defecto
 constructor(){
//esto se hace para que no se pueda hacer una instancia de una clas abstracta:
    if (new.target === Craftsman){
        throw new Error("You cannot create an instance of an abstract class");
        
    }
//aca se definen las variables
    this.#name = "Balduor";
    this.#levelMaster=54;
    this.#tipeCrafts="constructor";
    this.#resourceMain = "stone"
    this.#age = 90;
//simulacion de implementacion de interfaz specializedCreation
    if(typeof this.buldingEpic !== "function"){
        throw new Error (" buldingEpic not implemented method")
    }
    
 }
 
 //aca implementa el metodo declarado por la interfaz SpecializadCreation
buldingEpic(){
    console.log(`the  ${this.#name} go bulding whit shovel but epic`);
}

//simulacion de metodos abstractos para la futura implementacion en clases hijas.
buidWall(materia,amound){
        throw new Error ("mainTrick armor not implemented method")
}
isDwarf(){
        throw new Error ("shufleCards not implemented method")
}
buildCastle(){
        throw new Error ("finnalAct not implemented method")
}
buildTrap(){
        throw new Error ("isDead not implemented method")
}
evaluaateCality(cality){
        throw new Error ("useRevolver not implemented method")
}

}