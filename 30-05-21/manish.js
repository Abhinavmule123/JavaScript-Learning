let ulTag=document.createElement("ul");

let litag1=document.createElement("li");
let litag1String=document.createTextNode("First");
litag1.append(litag1String);

let litag2=document.createElement("li");
let litag2String=document.createTextNode("Second");
litag2.append(litag2String);

let litag3=document.createElement("li");
let litag3String=document.createTextNode("Third");
litag3.append(litag3String);

let litag4=document.createElement("li");
let litag4String=document.createTextNode("Fourth");
litag4.append(litag4String);

let litag5=document.createElement("li");
let litag5String=document.createTextNode("Fifth");
litag5.append(litag5String);

ulTag.append(litag1);
ulTag.append(litag2);
ulTag.append(litag3);
ulTag.append(litag4);
ulTag.append(litag5);

let demo=document.getElementById("ultag");
demo.append(ulTag);

console.log(demo);


