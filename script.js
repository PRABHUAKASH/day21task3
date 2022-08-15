var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="search";
button.addEventListener("click",foo())

// let confirmed=document.createElement("div");
// confirmed.setAttribute("id","confirmed");

// let recovered=document.createElement("div");
// recovered.setAttribute("id","recovered");

let Name=document.createElement("div");
Name.setAttribute("id","Name");


 div.append(input,button ,Name);
document.body.append(div);

async function foo(){
let res=document.getElementById("rand").value;
var url=`https://zoo-animal-api.herokuapp.com/animals/rand/${res}`;

let result=await fetch(url);
let result1=await result.json();
var index=result1.length0;
// console.log(result1[index].Confirmed);
// confirmed.innerHTML=`total Confirmed cases:${result1[index].Confirmed}`;

// console.log(result1[index].Recovered);
// recovered.innerHTML=`total Recovered cases:${result1[index].Recovered}`;

console.log(result1[index].Name);
Name.innerHTML=`the animal name was:${result1[index].Name}`;
}
