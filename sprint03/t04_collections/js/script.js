guestList = new WeakSet();
menu = new Map();
bankVault = new WeakMap();
coinCollection = new Set();

let apik = {name : "Apik"};
let john = {name : "John"};
let mike = {name : "Mike"};
let Jena = {name : "Jena"};

console.log(guestList.has(apik));

menu.set("fresh juise", 10);
menu.set("fresh silk", 100);
menu.set("poor juise", 90);
menu.set("nasty juise", undefined);

console.log(menu.get("poor juise"));
console.log(menu.get("nasty juise"));