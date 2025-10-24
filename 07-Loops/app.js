//Döngü:Aynı kod parçasının tekrar tekrar çalıştırılmasını sağlayan yapıdır.

//While
// let a =1;
// while(a<= 10){
//     console.log(a);
//     a++
// }
//1-10 arasında ki çift sayıları konsola yazdır
// let i=1;
// while(i<=10){
//     if(i%2 ==0){
//         console.log(i);
//     }
//     i++;
// };
//1-50 arasında ki 4 ün katı olan sayılarını bulup konsola yazan kod;
// let i=1;
// let counter=0;
// while(i<=50){
//     if(i%4==0){
//         counter++;
//     }
//    i++;
// }
// console.log("1-50 arası 4'ün katı olan sayı adedi "+ counter);

//Girilecek 3 adet sayıyı toplayıp, konsola yazdır.
let i=1;
let num;
let total=0;
while(i<=3){
    num =Number(prompt("Lütfen sayı gir:"));
    // total= total +num;
    total +=num;
    i++

}
console.log(total);