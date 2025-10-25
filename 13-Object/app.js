//JAVA SCRIPT OBJECT NOTATION*JSON
"use strict";
let student5=["aylin","gezer",30,"kadın"];
let student6=["kader","rezan",20,"kadın"];
let student7=["semi","kasım",40,"erkek"];

let student1={
    firstName:"aylin",
    lastName:"gezer",
    age:30,
    gender:"kadın"
};
//yukarıda ki student1 değişkeni bir OBJECT'tir.firstName,lastName,age,gender ise bu objenin özellikleridir(property)
// console.log(students);
// console.log(student1.gender + " " + student1.age);
let student2 = {
    firstName: "Mehmet Emir",
    lastName: "Sürmeli",
    age: 21,
    gender: "Erkek"
};

let student3 = {
    firstName: "Didier",
    lastName: "Drogba",
    age: 45,
    gender: "Erkek"
}; 
let students =[student1,student2,student3];

let total=0;
let studentCount=students.length;
for(let i=0;i<studentCount;i++){
    console.log(students[i],firstName+" ")+students[i].gender;
    total+=students[i].age;
}
console.log(students);
console.log(student1.gender + " " + student1.age);

let average=total/studentCount;
console.log("Yaş ortalaması: "+average.toFixed(2));

//tekrar bak bu koda.