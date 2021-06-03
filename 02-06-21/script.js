// taregtNode.cloneNode(true or false) ;  -- it used to copy the node true if 
// parentNode.replaceChild(newChild,oldChild); -- it used to replce child element 
// parentNode.removeChild(Element); -- it delete the child element

// let ab = document.getElementById("ul-container");
// let duplicateElement = ab.cloneNode(true);
// ab.insertAdjacentElement("afterend",duplicateElement);
// console.log(duplicateElement);

// let ab = document.getElementById("ul-container");
// let li = document.createElement("LI");
// li.textContent = "Replace Li";
// let replceElement = ab.replaceChild(li,ab.firstElementChild);
// console.log(replceElement);

// let ab = document.getElementById("ul-container");
// let deleteElement = ab.removeChild(ab.firstElementChild);
// console.log(deleteElement);


//Modifying Text Nodes
// 1. appendData(String)  -- it add the given string at end .
// 2. deleteData(start,length)
// 3. insertData(start,String)
// 4. replaceData(start,length,string)
// 5. substringData(start,length)

// let ab = document.getElementById("ul-container");
//  ab.firstChild.appendData("World");

// let ab = document.getElementById("ul-container");
//     ab.firstChild.deleteData(0,5);
// console.log(ab.firstChild);

// let ab = document.getElementById("ul-container");
//     ab.firstChild.insertData(5,"World");

// let ab = document.getElementById("ul-container");
//     ab.firstChild.replaceData(0,5,"world");

// let ab = document.getElementById("ul-container");
//  let x= ab.firstChild.substringData(0,4);
//  console.log(x);



// Attributes Methods 
// 1. setAttriibute(attribute_name,value)  - it set the attribute to the selected element
// 2. getAttribute(attribute_name)  -- it gives us value of selected element attribute
// 3. removeAttribute(attribute_name)  - it remove the attribute from the selected element
// 4. hasAttribute(attribute_name) - it checks the given attribute present or not if present return true or if not then false.


// let ab = document.getElementById("ul-container");
//   ab.setAttribute("class","box");
//   ab.setAttribute("title","This is UL");
// console.log(ab);

// let ab = document.getElementById("ul-container");
// let ulId=  ab.getAttribute("id");
// console.log(ulId);

// let ab = document.getElementById("ul-container");
//   ab.removeAttribute("style");
// console.log(ab);

// let ab = document.getElementById("ul-container");
//  let x= ab.hasAttribute("class");
// console.log(x);



//CSS-DOM MAPPING

// let ab = document.getElementById("ul-container");
// ab.style.border = "5px solid #323232";
// ab.style.backgroundColor = "grey";
// ab.style.color = "white";

// CSSStyleDeclaration
// ex-x= Element.style
// x.cssText
// x.length
// x.item(0)
// x.propertyValue()
// x.removeProperty()
// x.setProperty()
// window.getComputedStyle

// let ab = document.getElementById("ul-container");
// let x= ab.style;
// console.log(x.cssText);
// console.log(x.length);
// console.log(x.item(0));
// console.log(x.getPropertyValue("color"));
// x.removeProperty("color");
// x.setProperty("padding","30px");

// let ab = document.getElementById("ul-container");
// console.log(window.getComputedStyle(ab));



// DOMTOKENLIST
// 1. classList - 
// propert - 
// 1.length
// 2.value
// Methods
// 1. add()
// 2. remove()
// 3. replace()
// 4. contains()
// 5. item()
// 6. toggle()


// let ab = document.getElementById("ul-container");
// let x = ab.classList;
// x.add("box")
// x.remove("li");
// x.replace("ul","ull");
// console.log(x.contains("box"));
// console.log(x.item(0));
// x.toggle("box");


