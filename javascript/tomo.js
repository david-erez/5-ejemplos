
class electronicDevice {
    // 5 privadas
    #battery;         
    #numberSerial;    
    #temps;           
    #version;          
    #status;          

    // 5 públicas
    constructor(name, brand, price, weight, active) {
        this.name = name;      
        this.brand = brand;    
        this.price = price;    
        this.weight = weight;  
        this.active = active;  

       

        // Privados
        this.#battery = 100;
        this.#numberSerial = Math.floor(Math.random() * 1000);
        this.#temps = [25, 27, 30, 35];
        this.#version = "v14kfullhd4k";
        this.#status = "idle";
    }
// se supone que son 5 metodos abstractos que deben ser implementados por clases hijas
    reproduce(){ 
        throw new Error("not implemented reproduce");   
    }
    getvolume(){ 
        throw new Error("not implemented getvolume"); 
    }
    turOn(){
         throw new Error("not implemented tur on");
    }
    load(){ 
        throw new Error("not implemented load");
    }
    giveEnergy(){
        throw new Error("not implemented giveenergy"); 
    }

    getTemps(){ 
    return this.#temps;
    }
    getBattery(){ 
        return this.#battery; 
    }
    setBattery(level){ 
      
        this.#battery = level;
    }
    
    // 5 metodos privados
    #getInfo() {   
        return `serial: ${this.#numberSerial} version: ${this.#version} state: ${this.#status} batery: ${this.#battery}`;
    }
    #registerTemp(tempse){
    }
    #compatible(requer){
        this.#version.includes(requer);
    }
    #batteryCuestion(){
        if (this.#battery == 100) {
            return this.#status = "complete";
            
        } else {
            return this.#status = "not complete";
            
        }
    }
    #powerOn(){
   
    if (this.#status == "complete") {
        console.log('he dispositive is power on');
    } else {
        console.log(`the dispositive is power off`);
    }
    }
    recursive(){
        this.#getInfo();
        this.#compatible('4k full hd 144 hz');
        this.#batteryCuestion();
        this.#powerOn();
    }

}

class Computer extends electronicDevice {
    constructor(name, brand, price, weight, active, aplications, operatingSistem, distribution, proccesor, level) {
        super(name, brand, price, weight, active);
        this.aplications = aplications;          
        this.operatingSistem = operatingSistem;  
        this.level = level;                      
        this.hasGPU = true;                      
        this.storage = {hdd: "1TB", ssd: "512GB"}; 
        this.performance = [88, 91, 95];         
    }
//1metodo sin parametros y sin retorno

    reproduce(){
        console.log(`computer ${this.name} reproduce videos in 4K full HD because ${this.aplications}`);
    }
//1metodo conn parametros y sin retorno

    getvolume(tipeSoun){
        console.log(`computer ${this.name} plays sound ${tipeSoun} using ${this.operatingSistem}`);
    }
//1metodo con parametros y con retorno

    turOn(base, amp){
        this.intensity = base * amp;
        return this.intensity;
    }
//1metodo sn parametros y con retorno

    load(){
        return this.level > 0 ? this.level : 0;
    }

    giveEnergy(){
        return this.level > 0 ? this.level : 0;
    }
}

class CellPhone extends electronicDevice {
    constructor(name, brand, price, weight, active, buttons, camera, screem, size, model) {
        super(name, brand, price, weight, active);
        // 2 number, 2 boolean, 2 string, 2 array, 2 object
        this.buttons = buttons;  // number
        this.camera = camera;    // string
        this.screem = screem;    // string
        this.size = size;        // number
        this.model = model;      // string
        this.touch = true;       // boolean
        this.apps = ["whatsapp", "telegram", "instagram"]; // array
        this.sensors = {gyro: true, gps: true}; // object
    }
//2metodo sin parametros y sin retorno

    reproduce(){
        console.log(`cellphone ${this.name} reproduces videos with ${this.camera} camera.`);
    }
//2metodos con parametros y sin retorno

    getvolume(tipeSoun){
        console.log(`cellphone ${this.name} plays ${tipeSoun} sound on ${this.model}`);
    }
//2metodo con parametros y con retorno

    turOn(base, amp){
        this.intensity = base * amp;
        return this.intensity;
    }
//2metodo sn parametros y con retorno

    load(){
        return this.level > 0 ? this.level : 0;
    }
}

class SoundSystem extends electronicDevice {
    constructor(name, brand, price, weight, active, output, power, channels, bass, model) {
        super(name, brand, price, weight, active);
        this.output = output; 
        this.power = power;   
        this.channels = channels; 
        this.bass = true; 
        this.model = model; 
        this.config = {maxVolume: 120, mode: "surround"}; 
        this.presets = ["rock", "pop", "jazz"]; 
    }
//3metodo sin parametros y sin retorno

    reproduce(){
        console.log(`soundSystem ${this.name} blasts sound at ${this.power}W`);
    }
//3metodo conn parametros y sin retorno

    getvolume(typeSound){
        console.log(`soundSystem ${this.name} plays ${typeSound} in ${this.model}`);
    }
//3metodo con parametros y con retorno
    turOn(base, amp){
        this.intensity = base * amp;
        return this.intensity;
    }
//3metodo sn parametros y con retorno

    load(){
        return this.level > 0 ? this.level : 0;
    }
}

class Camera extends electronicDevice {
    constructor(name, brand, price, weight, active, resolution, zoom, lensType, batteryLife, model) {
        super(name, brand, price, weight, active);
        this.resolution = resolution; 
        this.zoom = zoom; 
        this.lensType = lensType; 
        this.batteryLife = batteryLife; 
        this.flashEnabled = true; 
        this.settings = {iso: 100, aperture: "f/1.8"}; 
        this.modes = ["portrait", "night", "auto"]; 
    }
//4metodo sin parametros y sin retorno

    reproduce(){
        console.log(`camera ${this.name} captures photo with ${this.resolution}MP`);
    }
//4metodo conn parametros y sin retorno

    getvolume(typeSound){
        console.log(`camera ${this.name} doesn't play sound, ${typeSound} ignored.`);
    }
//4metodo con parametros y con retorno

    turOn(base, amp){
        this.intensity = base * amp;
        return this.intensity;
    }
//4metodo sn parametros y con retorno

    load(){
        return this.level > 0 ? this.level : 0;
    }
}

class ConsoleVideoGames extends electronicDevice {
    constructor(name, brand, price, weight, active, storage, controller, games, online, model) {
        super(name, brand, price, weight, active);
        // 5 boolean, 5 number, 5 array, 5 string, 5 object
        this.storage = storage; // number
        this.controller = controller; // string
        this.games = games; // array
        this.online = online; // boolean
        this.model = model; // string
        this.account = {user: "player1", rank: "gold"}; // object
    }
//5metodo sin parametros y sin retorno

    reproduce(){
        console.log(`cnsole ${this.name} runs ${this.games.length} games smoothly`);
    }
//5metodo conn parametros y sin retorno

    getvolume(tipeSoun){
        console.log(`console ${this.name} emits sound ${tipeSoun}`);
    }
//5metodo con parametros y con retorno

    turOn(base, amp){
        this.intensity = base * amp;
        return this.intensity;
    }
//5metodo sn parametros y con retorno

    load(){
        return this.level > 0 ? this.level : 0;
    }
}

const  dispositive = new electronicDevice("generic","you mon", 1000,25, true);
const pc = new Computer("katana", "msi", 100000 , 3.5, true, "something" , "win 10","no","amd",98);
const cel = new CellPhone(  "galaxy j2","samsung", 255500, 0.25, true,  3, "108","amoled gorilla glas", 63.9, "dioemp");
const sound = new SoundSystem( "a brand jbñ","jbl",1800, 10,true,500,250,5.1,true,"prro");
const camera = new Camera( "stick jhones","sony",180, 10,true,500,250,5.1,true,"gtro");
const consoe = new ConsoleVideoGames(   "playStation 3","sony", 3000, 4.5,true, 1024,"DualSense", ["god of 2ar", "halo", "black ops ll"], true,"doef");
dispositive.recursive();
console.log("---------------------------------------------------")
pc.reproduce();
pc.getvolume();
console.log(pc.load())
console.log(pc.turOn())
console.log("---------------------------------------------------")
cel.reproduce();
cel.getvolume();
console.log(cel.load())
console.log(cel.turOn())
console.log("---------------------------------------------------")
sound.reproduce();
sound.getvolume();
console.log(sound.load())
console.log(sound.turOn())
console.log("---------------------------------------------------")
consoe.reproduce();
consoe.getvolume();
console.log(consoe.load)
console.log(consoe.turOn())
console.log("---------------------------------------------------")
camera.reproduce();
camera.getvolume();
console.log(camera.load())
console.log(camera.turOn())
console.log("---------------------------------------------------")