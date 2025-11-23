class Musician {
 //5 variables privadas
 #nameMusician;
 #instrument;
 #levelVirtuosity;
 #perfectionRhythmic; 
 #genreMusic;
 // constructor con valores por defecto
 constructor(){
//esto se hace para que no se pueda hacer una instancia de una clas abstracta:
    if (new.target === Musician){
        throw new Error("You cannot create an instance of an abstract class");
        
    }
//aca se definen las variables
    this.#nameMusician = "hamelin";
    this.#instrument="flute";
    this.#levelVirtuosity=1500;
    this.#perfectionRhythmic = 1500
    this.#genreMusic= classic;
//simulacion de implementacion de interfaz Amause
    if(typeof this.haveEpicFun !== "function"){
        throw new Error (" goAwayEpic not implemented method")
    }
//simulacion de implementacion de interfaz Attack 
    if(typeof this.attackMasive !== "function"){
        throw new Error ("getSupport not implemented method")
    }
    
 }
 
 //aca implementa el metodo declarado por la interfaz GoAway
haveEpicFun(){
    console.log(`The piper ${this.#nameMusician} leaves everyone in the field speechless whit ${this.#instrument}, making everyone dance.`);
}
 //aca implementa el metodo declarado por la interfaz support
attackMasive(){
    console.log(`the ${this.#nameMusician} The piper attacks with a giant horde of rats tank you level vistuosity ${this.#levelVirtuosity}`);
}
//simulacion de metodos abstractos para la futura implementacion en clases hijas.
guie(rats){
        throw new Error ("mainTrick armor not implemented method")
}
singMelody(){
        throw new Error ("singMelody not implemented method")
}
followersMotived(){
        throw new Error ("followersMotived not implemented method")
}
destroyScale(){
        throw new Error ("desroyScale not implemented method")
}
addLife(){
        throw new Error ("addLife not implemented method")
}

}