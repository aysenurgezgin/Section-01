//DOM; DOCUMENT OBJECT MODEL
//1) Singel Element

// let result;
// getElementById

// result =document.getElementById("task-list");
// result =document.getElementById("title");
// result.style.background="yellow";
// result.style.color="white";
// result.style.padding="30px";
// result.innerText="merhaba";
// result.innerHTML="<span style='color:orange'>Hello </span>world";


//Query Selector; Dokümanın en üstünden başlayarak ilk karşılaştığı elemanı bulup getirir.
// result= document.querySelector("#title");
// result= document.querySelector(".card-title");
// result= document.querySelector("li");
// console.log(result);

//2)Multi Elements;
//getElementByClassName;

// let result;
// result= document.getElementsByClassName("card-title");
// result= document.getElementsByClassName("li")//alt tarafta tümünü seçecek olan querySelectorAll'var
// result= document.getElementsByClassName("task");
//getElementsTagName;
// result=document.getElementsByTagName("li");
//querySelectorAll;
// result= document.querySelectorAll(".task");
// result= document.querySelectorAll("#task-list-2 .task");

// console.log(result);

//3)Traversing Elements;

let result;
// let taskList= document.getElementById("task-list");
// result=taskList.children;
// console.log(taskList);

// let body= document.querySelector("body");
// // console.log(body);
// result=body.children;
// result=body.children[3];
// result= body.lastElementChild;

// result= document.getElementById("title");
// result=result.parentElement.parentElement.parentElement.parentElement;

result = document.getElementById("task-list");
result = result.firstElementChild;
result = result.nextElementSibling.nextElementSibling;
result = result.previousElementSibling.previousElementSibling.previousElementSibling;
console.log(result);