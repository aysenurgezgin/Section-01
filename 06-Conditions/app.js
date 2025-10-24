// let b=12;
// if (b> 10){
//     console.log("Sayı büyük");
// }

// let a=2;
// if(a>10){
//     console.log("Sayı Büyük.");
// }else{
//     console.log("Sayı büyük değil.");
// }


// let c =50;
// if(c>50){
//     console.log("Sayı büyük.");
// }else if(c<10){
//     console.log("Sayı küçük.");
// }else{
//     console.log("Sayılar eşit.");
// };

// let a =80;
// if(a>79){
//     console.log("Büyük.");
// };
// if(a<79){
//     console.log("Küçük");
// };
// if(a==80){
//     console.log("EŞİT");
// };

/*
0-16:Çocuk
17-35:Genç
36-50:Yaşlı
51-70: :(
71'den büyük: No comment
*/

// let age= 45;
// if(age<=16){
//     console.log("Çocuk");
// }else if(age<=35){
//     console.log("Genç");
// }else if(age<=50){
//     console.log("Yaşlı");
// }else if(age<=70){
//     console.log(":(");
// }else{
//     console.log("No Comment");
// };

// if(age<=16){
//     console.log("Çocuk");
// };
// if(age<=35){
//     console.log("Genç");
// };
// if(age<=50){
//     console.log(":(");
// };
// if(age>70){
//     console.log("No Comment");
// };

//*Ternary if oparetor(Üçlü operatör)
// let message;
// let age =20;
// if(age>=18){
//     message="girebilirsiniz.";
// }else{
//     message="giremezsiniz.";
// };
// message = age>=18 ?"girebilirsiniz":"giremezsiniz.";
// console.log("Yaşınız "+age +" olduğu için "+message);


/*
    0-16: Çocuk
    17-35: Genç
    36-50: Yaşlı
    51-70: Ölmüş ağlayanı yok
    71'den büyükse: No comment
*/

//*Ternary if Çözümü

// let age=80;
// let result;
// result=
//     age<= 16 ? "Çocuk":
//         age<=35 ? "Genç":
//             age <=50 ? "Yaşlı":
//                 age <=70 ? ":(":"No Comment";
//                 console.log(result);

// alert("Merhaba");
// let message="Merhaba";
// alert(message);


// let age;
// age = prompt("Kaç yaşındasınız?");
// console.log(age +" yaşındasınız.");

// result =confirm("Emin misiniz?");

//Soru-1

// let a=40;
// let b=60;
// let result;
// if(a-b <30){
//     result ="Küçük";
// }else{
//     result="Büyük";
// };

// let a =91;
// let b =60;
//* let result;


// result= a-b<=30 ? "Küçük" :"Büyük";
// console.log(result);
/* 
Kullanıcıya "JS'in official ismi nedir?"şeklinde bir soru sorup,gelen cevap "ECMAScript" ise"Tebriks",değilse "try again bro"cevabını alert ile veren kod;
a)if..else
b)ternary if

*/
// let correctAnswer ="ECMAScript";
// let userQuestion =prompt("JS'in official ismi nedir?");
// let result;

// if (userQuestion == correctAnswer){
//     result="tebriks!";
// }else{
//     result="try again bro";
// };
// alert(result);

let correctAnswer="ECMAScript";
let userQuestion=prompt("JS'in official ismi nedir?");
let result;

result =userQuestion==correctAnswer?"tebriks":"try again bro";
alert(result);