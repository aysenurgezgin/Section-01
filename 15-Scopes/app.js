// Bir function scope'u içinde let ile tanımlanan değişken, sadece o function'dageçerlidir.
// function print(){
//     let name="aylin gezer";
    
// console.log(name);
// }
// if (true){
//     let price =56;
//     console.log(price);
// }
// print();

//değişken tanımlamada (JS'te)var,const ve let keywordleri var

function print(){
    var name="oldun sayım";
    console.log(name);
}
if(true){
    var price =56;
    
}
print();
console.log(name);
console.log(price);