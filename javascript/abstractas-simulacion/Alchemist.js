class Alchemist {
 //5 variables privadas
 #nameALchemist;
 #awareness;
 #potions;
 #level; 
 #life;
 // constructor con valores por defecto
 constructor(){
//esto se hace para que no se pueda hacer una instancia de una clas abstracta:
    if (new.target === Alchemist) {
        throw new Error("You cannot create an instance of an abstract class");
    }
    this.#nameALchemist = "La Mound";
    this.#potions=3;
    this.#awareness="pure";
    this.#level = 10;
    this.#life = 100;
//simulacion de implementacion de interfaz support ()
    if(typeof this.getSupport !== "function"){
        throw new Error ("getSupport not implemented method")
    }
 }
//aca implementa el metodo declarado por la interfaz
getSupport(){
    console.log("the alchemist support whit "+this.#potions);
}
//simulacion de metodos abstractos para la futura implementacion en clases hijas.
destroyArmor(){
        throw new Error ("destroy armor not implemented method")
}
infoInstrument(){
        throw new Error ("instrument not implemented method")
}
isLieve(){
        throw new Error ("isLive not implemented method")
}
addWarnes(){
        throw new Error ("addWarnes not implemented method")
}
potionsThrow(){
        throw new Error ("potionsThrow not implemented method")
}

}