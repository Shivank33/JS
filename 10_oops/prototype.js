let myName = "shivank     "
// let mychannel = "chai     "

console.log(myName.trueLength);         //undefined


let myHeroes = ["thor", "spiderman" , "hulk" , "superman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    hulk: "smash",
    superman: "fly",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivank = function(){
    console.log(`shivank is present in all objects`);
}

Array.prototype.heyShivank = function(){
    console.log(`Shivank says hello`);
}

// heroPower.shivank()
// myHeroes.shivank()
// myHeroes.heyShivank()
// heroPower.heyShivank()

// inheritance

const User = {
    name: "john",
    email: "john@yahoo.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JaiShreeRam     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shivank".trueLength()
"chaudhary".trueLength()
