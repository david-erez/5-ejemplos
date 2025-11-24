class FlutePlayer extends Musician  {
    skill
    repertory 
    breathingLevel
    localFame
    quality
    //sobrecarga de constructores (simulada)
    constructor(skill,repertory,breathingLevel,localFame,quality) {
        super()
        if (skill === 'object') {
            this.skill = skill;
            this.repertory = repertory;
            this.breathingLevel = breathingLevel;
            this.localFame = localFame;
            this.quality = quality; 
        }
        else{
            this.skill = 23;
            this.repertory = ["flaflflalf","tu-ut-it-tu","the song song","the muscicalia"];
            this.breathingLevel = 43.3;
            this.localFame = "known in";
            this.quality = "mucha"

        }
    }
    // aca implementamos los metodos  de la clase padre
guie(rats) {
    console.log(`guiding ${rats} rats with flute skills.`);
    return rats;
}
singMelody() {
    const melody = this.repertory[Math.floor(Math.random() * this.repertory.length)];
    console.log(`playing melody: ${melody}`);
    }
followersMotived() {
    console.log(`followers are motivated by my ${this.quality} performance`);
}
destroyScale() {
        console.log("destroying the scale with a powerful note");
}
addLife() {
    console.log("The flute player recharges himself in life because he is very broken.");
}

}