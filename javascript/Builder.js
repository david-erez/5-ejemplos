class Builder extends Craftsman {
    //5 variables publicas
    bricklayer;
    assemblySpeed;
    constructionQuality;
    secondTool; 
    existentialPlane;
    //constructor normal
    constructor(bricklayer, assemblySpeed, constructionQuality, secondTool, existentialPlane) {
    super()
    this.bricklayer = bricklayer;
    this.assemblySpeed = assemblySpeed;
    this.constructionQuality = constructionQuality;
    this.secondTool = secondTool;
    this.existentialPlane = existentialPlane;
    }
    //aca se implementan los metodos de la clase padre}
     
  
    buidWall(materia, amount) {
        console.log(`building a wall with ${amount} units of ${materia}.`);
    }

    isDwarf() {
        return this.bricklayer === 'dwarf';
    }

    buildCastle() {
        console.log("building a grand castle!");
    }

    buildTrap() {
        console.log("constructing a trap for unsuspecting foes!");
    }

    evaluaateCality(quality) {
        console.log(`evaluating quality: ${quality}.`);
        return quality >= this.constructionQuality;
    }
}
