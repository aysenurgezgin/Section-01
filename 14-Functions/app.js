"use strict"
function selamVer(){
    console.log("hi");
}
selamVer();

 function today() {
    let result = new Date();
    return result;
}

let bugun = today();
console.log(bugun);

let names = ["Ahmet", "Mehmet", "Yeşim"];
let departments = ['İnşaat', 'Yazılım', 'Mimarlık'];
let result = [];
let random = 3;
for (let i = 0; i < names.length; i++) {
    while (random > 2) {
        random = parseInt(Math.random() * 10);
    }
    result.push({ name: names[i], department: departments[random] });
    random = 3;
}
console.log(result);

let random = Math.random();
console.log(random);
console.log(random * 5);
console.log(Math.floor(random));

3-10 arasında rasgele sayı üretmek
let random = Math.floor(Math.random() * 7 + 3);