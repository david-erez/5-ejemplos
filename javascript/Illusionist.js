class Illusionist {
 //5 variables privadas
 #nameIllusionist;
 #especiality;
 #distintiveTecnique;
 #levelCharisma; 
 #motivation;
 // constructor con valores por defecto
 constructor(){
//esto se hace para que no se pueda hacer una instancia de una clas abstracta:
    if (new.target === Illusionist){
        throw new Error("You cannot create an instance of an abstract class");
        
    }
//aca se definen las variables
    this.#nameIllusionist = "copy paste";
    this.#especiality="go away";
    this.#distintiveTecnique="revenge spell";
    this.#levelCharisma = 15
    this.#motivation = "window";
//simulacion de implementacion de interfaz GoAway ()
    if(typeof this.goAwayEpic !== "function"){
        throw new Error (" goAwayEpic not implemented method")
    }
//simulacion de implementacion de interfaz support ()
    if(typeof this.getSupport !== "function"){
        throw new Error ("getSupport not implemented method")
    }
    
 }
 
 //aca implementa el metodo declarado por la interfaz GoAway
goAwayEpic(){
    console.log(`the illucinist ${this.#nameIllusionist} go Away but epic`);
}
 //aca implementa el metodo declarado por la interfaz support
getSupport(){
    console.log("the "+this.#nameIllusionist+" support whit "+this.#motivation+" and thank you "+this.#distintiveTecnique);
}
//simulacion de metodos abstractos para la futura implementacion en clases hijas.
mainTrick(dificult){
        throw new Error ("mainTrick armor not implemented method")
}
shufleCards(){
        throw new Error ("shufleCards not implemented method")
}
finnalAct(){
        throw new Error ("finnalAct not implemented method")
}
isDead(){
        throw new Error ("isDead not implemented method")
}
useRevolver(){
        throw new Error ("useRevolver not implemented method")
}

}