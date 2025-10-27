"use strict"
// function selamVer(){
//     console.log("hi");
// }
// selamVer();

//  function today() {
//     let result = new Date();
//     return result;
// }

//soru:çalıştırıldığında "yazı""tura"şeklinde sonuç veren kod;

function yaziTura(){
    let random=Math.random();
    let result=random>=0.5 ? "yazı" :"tura";
    return result;
}
console.log(yaziTura());