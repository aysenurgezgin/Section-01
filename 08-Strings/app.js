// let courseName="Fullstack Web Developer Eğitimi"
// let result;

// result= courseName.toLowerCase();
// result= courseName.toLocaleLowerCase();
// result= courseName.toUpperCase();
// result= courseName.toLocaleUpperCase();

// result= courseName.length; //property özellik
// result= courseName[1];
// result= courseName[125];

// result= courseName.slice(4,7);
// result= courseName.trim();
// result= courseName.replace("Eğitim","Öğrenimi");
// result= courseName.trimStart();
// result= courseName.trimEnd();
// result= courseName.indexOf("u",5)
// result= courseName.split("");
// result= courseName.startsWith("a");
// result= courseName.endsWith("i");
// console.log(result);

//indexOf ile ilgig örn;
let message;
let findedText;
message=prompt("metni girin:");
findedText =prompt("metin yada karakter ?");
result=message.indexOf(findedText);
if(result == -1){
    alert(message+ "içinde "+ findedText + "bulunamamıştır.");

}else{
    alert("'" +message + "'" +"içinde '"+findedText+ "' "+ (result+1) + ".sırada bulunmaktadır.");
};