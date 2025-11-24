class Wizard {
 //5 variables privadas
 #nameWizard;
 #powerSource;
 #levelMagic;
 #modelMagical; 
 #magicSecond;
 // constructor con valores por defecto
 constructor(){
//esto se hace para que no se pueda hacer una instancia de una clas abstracta:
    if (new.target === Wizard){
        throw new Error("You cannot create an instance of an abstract class");
        
    }
//aca se definen las variables
    this.#nameWizard = "oz";
    this.#powerSource="oranges";
    this.#levelMagic=15;
    this.#modelMagical = "dark"
    this.#magicSecond = 43;
//simulacion de implementacion de interfaz GoAway ()
    if(typeof this.goAwayEpic !== "function"){
        throw new Error (" goAwayEpic not implemented method")
    }
//simulacion de implementacion de interfaz Attack ()
    if(typeof this.attackMasive !== "function"){
        throw new Error ("getSupport not implemented method")
    }
    
 }
 
 //aca implementa el metodo declarado por la interfaz GoAway
goAwayEpic(){
    console.log(`the illucinist ${this.#nameWizard} go Away but epic in ${this.#powerSource}`);
}
 //aca implementa el metodo declarado por la interfaz support
attackMasive(){
    console.log("the "+this.#nameWizard+" It launches a terrible whit "+this.#modelMagical+"attack that damages the entire room");
}
//simulacion de metodos abstractos para la futura implementacion en clases hijas.
catSpeell(dificult){
        throw new Error ("cadSpeel armor not implemented method")
}
laborStart(){
        throw new Error ("laborStart not implemented method")
}
heIsSick(){
        throw new Error ("heIsSick not implemented method")
}
destroyCastles(){
        throw new Error ("destroy astles not implemented method")
}
damageMaind(){
        throw new Error ("damageMaind not implemented method")
}

}