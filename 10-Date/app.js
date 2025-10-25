let result;
let now;
now =new Date();
result =now;
result=now.getDate();//günü verir
result=now.getDay();
// let newDate =new Date(2025,10,25)
// console.log(newDate);
// result= newDate.getDay();

result= now.getFullYear();
result= now.getHours();
result=now.getTime();

result= new Date(1900,0,1);
let year= result.getFullYear()+3;
// console.log(result);

//Kaç gün yaşadığımızı bulan kod;
let brithday =new Date(1999,3,7);
let milisecond =now-brithday;
let second =milisecond/100;
let minute =second/60;
let hour =minute/60;
let dayCount= hour/24;
console.log(dayCount);

