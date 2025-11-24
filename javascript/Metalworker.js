class Metalworker extends Illusionist{
    //declaro 5 variables publicas
    will;
    presencia;
    consentration;
    mentalCoward;
    intelligencia;
    //constructor normal
    constructor(will,presencia,consentration,mentalCoward,intelligencia) {
        super();
        this.will = will;
        this.presencia = presencia;
        this.consentration = consentration;
        this.mentalCoward = mentalCoward;
        this.intelligencia = intelligencia;
    }
    // sobrescribimos los metodos de la clase padre
    mainTrick(dificult){
        const skill = (this.will * 0.45) + (this.presencia * 0.30) + (this.intelligencia * 0.25);
        return skill*dificult;
    }
    shufleCards(){
        this.consentration = Math.min(100, (this.consentration || 0) + 5);
        this.presencia = Math.min(100, (this.presencia || 0) + 1);
        console.log('shuffling cards. concentration +5, presence +1');
    }
    finnalAct(){
        // final act outcome based on combined stats
        if (this.intelligencia >= 240) {
            return 'standing ovation';
        } else if (this.intelligencia >= 150) {
            result = 'warm applause';
        } else {
            return  'meh, mixed reactions';
        }
    }
    isDead(){
        const dead = (this.mentalCoward || 0) >= 100;
        console.log(`isDead?  ${dead}`);
        return dead;
    }
    useRevolver(){
        console.log('the mentalist couldnt read minds. He proceeds to pull out a .50 caliber revolver');
    }
}