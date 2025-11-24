//se instancian los objetos
const builder = new Builder('dwarf', 5, 'high', 'hammer', 'material plane');
const bomber = new Bomber({ type: 'explosive', weight: 10 }, 3.5, 'high precision', 'none', 30);
const flute = new FlutePlayer(80, ['tueudd', 'adivjnmd', 'ajcad'], 90, 'local fame', 'excellent');
const metalworker = new Metalworker(50, 'metal', 75, 'average', 40);
const necromancer = new Necromancer('dark arts', 'summoning', 'skeleton', 100, 'life force');

console.log("-----------------------------------");
// Builder methods
builder.buldingEpic();
builder.buidWall('brick', 10);
builder.buildCastle();
builder.buildTrap();
console.log(builder.isDwarf());
console.log(builder.evaluaateCality('high'));
console.log("-----------------------------------");

// Bomber metodos
bomber.destroyArmor();
bomber.infoInstrument();
console.log(bomber.isLieve());
bomber.addWarnes();
bomber.potionsThrow();
console.log("-----------------------------------");

// FlutePlayer metodos
flute.guie(5);
flute.singMelody();
flute.followersMotived();
flute.destroyScale();
flute.addLife();
flute.attackMasive();
flute.haveEpicFun();
console.log("-----------------------------------");

// Metalworker metodos
metalworker.mainTrick(30);
metalworker.shufleCards();
console.log(metalworker.finnalAct());
metalworker.useRevolver();
console.log(metalworker.isDead());
console.log("-----------------------------------");


// Necromancer metodos
necromancer.catSpeell(50);
necromancer.laborStart();
console.log(necromancer.heIsSick());
necromancer.destroyCastles();
necromancer.damageMaind();
console.log("-----------------------------------");
 