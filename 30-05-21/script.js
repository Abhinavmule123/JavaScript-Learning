
// 1. nodeName , nodeType , nodeValue    
// 11. nodeValue - it gives the text node of selected node
// const liId = document.getElementById("ul-container");
// console.log(liId.childNodes[0].nodeValue);

//12 . nextSibling - it also gives text , comment node 
//13 . nextElementSibling - it gives element node only 
// let abc = document.getElementById("first");
// console.log(abc.nextElementSibling);

// 14. lastChild -- it gives the lastchild of the selected parent also gives text , comment node
// 15. lastElementChild - -it only gives us last element . 

// let abc = document.getElementById("ul-container");
// console.log(abc.lastElementChild);

// 16. textContent -- <h2> this is h2 tag </h2>- it gives us the text inside the tag
// let abc = document.getElementById("first");
// abc.textCoabc.textContntent = "this is li tag";
// console.log(ent);

// 1. nodeName , nodeType , nodeValue 
// 2.  parentNode , parentElement
// 3. childNodes , childern
// 4. firstChild , firstElementChild
// 5. lastChild , lastElementChild
// 6. previousSibling , previousElemementSibling
// 7. nextSibling , nextElementSibling
// 8.  textContent



// let abc = document.getElementById("first");
// abc.className = "list";
// console.log(abc.className);
// let x = document.getElementById("input-box");
// x.type = "date";
// console.log(x.type);

// let abc = document.getElementById("first");
// console.log(abc.attributes[1]);

// Dynamic element creation 
//1. creating nodes

let h1Tag = document.createElement("H1");  // h1 tag created  
// console.log(h1Tag);
let h1String = document.createTextNode("This is h1 tag");  // text node created 
// console.log(h1String);
let h1Comment=document.createComment("this is dynamic made h1 tag"); // comment created
// console.log(h1Comment);

//2. appending the nodes
h1Tag.append(h1String);  // appending text node in h1 tag
// console.log(h1Tag);

//3. append to the parent node 
let container = document.getElementById("container");
container.append(h1Comment);
container.append(h1Tag);

