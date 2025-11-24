//clase que extiende
class  Bomber extends Alchemist {
    munition;
    radioImpact;
    perfectionLaunch;
    socialization;
    age;
    //sobrecarga de constructores (simulada)
    constructor(munition, radioImpact,perfectionLaunch,socialization,age) {
        super();
        if (typeof munition === 'object') {
        this.munition = munition;
        this.radioImpact = radioImpact;
        this.perfectionLaunch = perfectionLaunch;
        this.socialization = socialization;
        this.age = age;    
    }else{
        this.munition = 34;
        this.radioImpact = 3.76;
        this.perfectionLaunch = "valada de 5 metors";
        this.socialization = "very little";
        this.age = 34;   
    }
}
//aca implementa los metodos de la clase abstracta
    destroyArmor() {
        console.log("destroying armor with explosive munition!");
    }

    infoInstrument() {
        console.log(`munition type: ${this.munition}, radio impact: ${this.radioImpact}`);
    }

    isLieve() {
        return this.age < 50; 
    }

    addWarnes() {
        console.log("adding warnings for incoming attacks");
    }

    potionsThrow() {
        console.log("throwing potions with explosive effects");
    }
}