// let h1 = document.createElement("H1");
// let string = document.createTextNode("this is h1 tag ");
// let comment = document.createComment("this is comment");
// let string1 = document.createTextNode("this is second string");
// h1.append(string);
// h1.prepend(comment);    //  prepend()  
// h1.appendChild(string1);
// document.getElementById("container").append(h1);

// 1. insertBefore() -  it append the element before the selected element
// let ulCont = document.getElementById("ul-container");  //parent element
// let referenceEle = document.getElementById("first");   //reference element
// let li = document.createElement("LI");
// li.append(document.createTextNode("this is dynamic li"));

// ulCont.insertBefore(li,referenceEle);


// 2 . insertAdjacentElement -  it append the  element to the selected position .

// let cont = document.getElementById("container");   
// let li = document.createElement("h1");
// li.append(document.createTextNode("this is dynamic h1"));

//  cont.insertAdjacentElement("afterend",li);

//  positions 
//  (beforeBegin)<div>(afterBegin)  this is tag  (beforeend) </div> (afterend)  

// 3. insertAdjacenHTML  --  it append the html code to the  selected position. 

// let h1Tag = "<h1 class='list'>This is h1 tag dynamically created</h1>";
// let cont = document.getElementById("container"); 

// cont.insertAdjacentHTML("afterbegin",h1Tag);

// 4. insertAdjacentText -- it append the string text to the selected position .

// let txt = "this dynamic text created";
// let cont = document.getElementById("container"); 

// cont.insertAdjacentText("beforeend",txt);

// innerHTML , outerHTML , innertText , textContent
// let cont = document.getElementById("container");
// cont.innerHTML += "<h1> this is innerHTML </h1>";
// console.log(cont.innerHTML);

// let cont = document.getElementById("container");
// cont.innerText = "this is innerText";
// cont.textContent = "this is textContent";
// console.log(cont.innerText);

// let cont = document.getElementById("container");
//  cont.outerHTML += "<h1> this is outerHTML </h1>";
// console.log(cont.outerHTML);


