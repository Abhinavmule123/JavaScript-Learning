let table = document.getElementById("mytable");

// Table Propertices
// 1. caption  - it gives us caption of table , get / set
// let caption1 = table.caption;
// console.log(caption1.innerText); 
// caption1.innerText = "Data";

// 2. tHead --  it gives table heading in a table set/get
// let thead1 = table.tHead;
// thead1.innerHTML = "<tr> <th>Roll No</th> <th>Student Name </th> </tr>";
// console.log(); 

// 3. tBodies -  it gives table body in a table set/get
// let tBodies1 = table.tBodies;
//  tBodies1[0].innerHTML += "<tr> <td>21</td> <td> Suraj </td> </tr>";
// console.log(tBodies1[0]); 

//4. tFoot -- it gives table footer data in  table set/get
// let tFoot1 = table.tFoot;
// tFoot1.innerHTML = "<tr><td align='center' colspan='2'>END OF TABLE</td></tr>";
// console.log(tFoot1);  

// 5. rows --  it gives all the table rows  set/get
// let rows = table.rows; 
// rows[0].innerHTML = "<tr> <th>Roll No</th> <th>Student Name </th> </tr>";
// console.log();


// Table Methods
// 1. createCaption() - it create caption for table 
// 2. deleteCaption() - it delete the caption of a table

// let caption1 = table.createCaption();
// caption1.innerHTML = "Student Information";
//deleteting caption element
// table.deleteCaption();

//3. createTHead() - it create the table thead
//4. deleteTHead() - it delete the table thead 

// let thead1 = table.createTHead();
// thead1.innerHTML = " <tr><th>ID</th> <th>Name</th></tr>";
//console.log(thead1);
// deleting thead
// table.deleteTHead();

// 5. createTBody()
// 6. deleteTBody()
// 7. createTFoot()
// 8. deleteTFoot() 

// EVENTS ***IMP
// on click function define
 const clickFunction = ()=> {
    alert("Button clicked");
    console.log("clicked");
}

let BtnId = document.getElementById("btn");
// BtnId.onclick = clickFunction; // on click event call
// BtnId.onclick = function () {
//     alert("clicked");
// }

// 3rd way of applying events 
BtnId.addEventListener("click",clickFunction);

