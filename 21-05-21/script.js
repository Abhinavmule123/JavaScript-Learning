// let ab = [1,2,4,5];
// ab.length = 1;
// console.log(ab.length,ab);

// accidental global variables 
// let a=b=c=10;
// console.log(a,b,c);
// function abc() {
//     let a=b=c=10;                   //let a; let b let c
        //i=10;
    
        // for(i=0;i<5;i++){

        // }                       // window.b;  window.c    a=10 b=10 c=10 
    // console.log(a,b);
// }
// abc();
// console.log(a);
// console.log(i);

// Boolean 
// Primitive way
// var ab = true; 
//boolean function 
// var ax = Boolean(1>2);
//boolean constructor
// var ac = new Boolean(1>3) ;
// console.log(ac);
// document.write(ac);

//          String    
// let arr = [1,2,3,4,5,"abhianv"];
// let str = "abhinav";  
// using constructor
// let str = new String("abhinav");
// console.log(str);
// document.write(str);

// Template String / Template Literal 
// let firstName = "abhinav";
// let nameObject = {name:"rahul"};
// let nameArray = [1,2,4,5];
// let LastName = "Mule";
// let fullName = "Hello"+firstName+" "+LastName;
// let fullName = `hello ${firstName} ${LastName} ${nameObject.name} ${nameArray}`;
// console.log(fullName);

//  String Methods
// 1. concat()
// let ab = "abhinav";
// let LastName = "mule";
// let x = ab.concat(LastName);
// console.log(x);;

//2. charAt() -- what is the charcter at 2 index ? 
// let ab = "abhinav";
// let x  = ab.charAt(2); // by default 0 index 
// console.log(x);

// 3. charCodeAt() -- what is the unicode/keyCode/Ascii at 2 index? 
// let ab = "Abhinav";
// let x = ab.charCodeAt(0);
// console.log(x);

//4. toLowerCase() and 5. toUpperCase() 
// let ab = "Abhinav";
// let firstName //camelCase 
// let x = ab.toUpperCase();  // upper lower capitalize camelCase 
// let y = ab.toLowerCase();
// console.log(x,y);

// 6. split() -- it split the string data in the form of array
// let ab = "Abhinav and Mule and hello";
// let x = ab.split("and"); 
// console.log(x);

// 7. replace() -- it replace the data in given string with new data.
// let ab = "hello world";
// let x = ab.replace("world","india");   //array_name.replace(old_data,new_data);
// console.log(ab);
// console.log(x);

// 8. indexOf() -- it will return the index of character or string that we passed as argument , if not found it return -1 or if found it will return positive number.
// let ab = "Abhinav and Mule and hello";
// let x = ab.indexOf("and");
// if(ab.indexOf("axe")  != -1){
//     alert("Present");
// } else{
//     alert("not present");
// }
// console.log(x);




