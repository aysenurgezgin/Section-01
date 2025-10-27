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

// function yaziTura(){
//     let random=Math.random();
//     let result=random>=0.5 ? "yazı" :"tura";
//     return result;
// }
// console.log(yaziTura());




// function yaziTuraAt(){
//     let random=Math.random();
//     let result=random>=0.5 ? "yazı":"tura";
//     return result;
// }
// console.log(yaziTuraAt());

//soru: kendisine gönderilen sayının 'tam bölenlerini' bulup döndüren fonksiyon;

// function tamBolenler(sayi){
//     let tamBolenlerDizisi=[];
//     for (let i=1; i<= sayi;i++){
//         if (sayi %i==0) tamBolenlerDizisi.push(i);
       
//     }
//      return tamBolenlerDizisi;
// }
// console.log(tamBolenler(100));

// function sayilarBölümler(sayi){
//     let dizi=[];
//     for(let i=1;i<=sayi; i++){
//         if (sayi %i==0) dizi.push(i);
//     }
//     return dizi;
// }
// console.log(sayilarBölümler(50));

//1-50 arasında ki asal sayıları bulup döndüren fonksiyon;



//* Verilen min ve max değer arasında rastgele bir sayı üretir.min max da dahil kod;
function randomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomInt(40,42));