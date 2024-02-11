const name = "Shivank";
const count = 20;

// console.log(name + count + " Value");        //Outdated style

// console.log(`Hello my name is ${name} and my count is ${count}`);       //String Interpolation (Modern Way).

const gameName = new String("Counter-Strike");

console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.lastIndexOf('t'));

const newString = gameName.substring(0,4);        //It will ignore neg. values and itself take zero as first value.
console.log(newString);

const anotherString = gameName.slice(-14,4);
console.log(anotherString);

const diffString = "    Shivank    ";
console.log(diffString);
console.log(diffString.trim());      //Removes spaces from string from starting and end

const url = "https://shivank.com/shivank%100%chaudhary";

console.log(url.replace('%100%', '-'));         //https://shivank.com/shivank-chaudhary

console.log(url.includes('shivank'));       //true
console.log(url.includes('hello'));         //false

console.log(gameName.split('-'));

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

console.log(words);