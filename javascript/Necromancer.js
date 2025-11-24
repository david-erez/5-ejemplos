class Necromancer extends Wizard {
    //5 variables publicas
    screts
    specialization
    lackye
    vitalEssence
    powerSource
    //constructor normal
    constructor(screts,specialization,lackye,vitalEssence,powerSource) {
        super();
        this.screts  = screts;
        this.specialization = specialization;
        this.lackye = lackye;
        this.vitalEssence  = vitalEssence;
        this.powerSource = powerSource;
    }
    //aca implementa los metodos de la clae padre
    catSpeell(dificult) {
        console.log(`casting spell with difficulty ${dificult}.`);
        return this.vitalEssence > dificult;
    }

    laborStart() {
        console.log(`starting labor with lackey: ${this.lackye}.`);
    }

    heIsSick() {
        console.log(`checking health: ${this.vitalEssence < 20 ? 'He is sick' : 'He is healthy'}`);
        return this.vitalEssence < 20;
    }

    destroyCastles() {
        console.log("destroying castles with dark magic");
    }

    damageMaind() {
        console.log("dealing damage to the main target");
    }
}

