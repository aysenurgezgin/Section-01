"use strict";
let students=["aylin","güllü","ece","kadir","serhat","osman"];
let result;

// result=students.length;
result=students;
// result=students.toString();
// result=students.join(";");
// result=result.split(";");

// let products=["ü1","ü2","ü3"];
// let products2=["ü4","ü5","ü6"];
// result=products2.concat(products);


students.push("ayşe");
students.pop();//son elemanı siler
students.shift();//ilk elemanı siler
students.unshift("deniz");//başa eleman ekler

//students dizisinde ki 'ece' değerin, taşıyan elemanın içeriğini'alpcan'olarak değişim;
let indexEce=students.indexOf("alpcan");
students[indexEce]="alpcan";
students[students.indexOf("ece")]="alpcan";

// students.splice(students.indexOf("ece"),1);
result=students.splice(2,3);
console.log(result);