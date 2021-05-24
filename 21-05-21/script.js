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

// 8. indexOf() -- it will return the index of character or string that we passed as argument , if not found it return -1 or if found it will return positive number , in second parameter we can pass the start position .
// let ab = "Abhinav and Mule and hello";
// let x = ab.indexOf("and");
// if(ab.indexOf("axe")  != -1){
//     alert("Present");
// } else{
//     alert("not present");
// }
// console.log(x);

//  9.  trim -- it removes the whitespaces from both side of the string
// let ab = "     abhinav  ";
// let x = ab.trim();
// console.log(ab);

// 10 . search --  it will return the index of character or string that we passed as argument , if not found it return -1 or if found it will return positive number ,it does not take second parameter.
// let ab = "the hello the";
// let x = ab.search("the");
// console.log(x);

//11. lastIndexOf() - it will return the index of character or string that we passed as argument , if not found it return -1 or if found it will return positive number , it start the searching from last and return the last occurenece of string.
// let ab = "the hello the";
// let x = ab.lastIndexOf("the")
// console.log(x);

//12 slice(start,end) -- its extract the string from the given string 
// let ab = "this is cricket game";
// let x = ab.slice(0,10);
// console.log(x); 

//13. substring(start,end) -- its extract the string from the given string but it does not accept negative index .
// let ab = "this is cricket game";
// let x = ab.substring(0,10);
// console.log(x); 

//14 . substr(start,length) -- its extract the string from the given string but in second parameter we need to pass the length 
// let ab = "this is cricket game";
// let x = ab.substr(5,20);
// console.log(x); 

//15. includes  -- it checks presence of string in the given string and it will return true or false.
// let ab = "this is cricket game";
// let x = ab.includes("game");
// console.log(x); 

//  16. repeat() - it repeat  the given string and in parameter it takes count to how much times it repeat the string.
// let ab = "  this is cricket game  ";
// let x = ab.repeat(10);
// console.log(x); 

//17. valueOf() -- it wil return the value of string.
// let ab = "this is cricket game";
// let x = ab.valueOf();
// console.log(x); 

// 18 match()  -- it uses for string matching in given string and return array object if found and null if not found 
// let ab = "this is cricket game";
// let x  = ab.match("game");
// console.log(x);    


//  Number 
// let val = -5/0;
// constructor 
// let ac = new Number(100);
// let a = 30;
// let b = "20";  
// let c = 10;
// let d = "hello";
// console.log(d-c); 
// NaN - Not-a-Number property , NaN is not equal to itself also.
// let val = 20;
// Infinity and -Infinity property
// console.log(-5/0);
// if(val != -Infinity){
//     alert("pass");
//     //addition 
// }else{
//     alert("not pass");
//     console.log(val);
// }


// isNaN() -- value pass in isNaN parameter is NaN or not if yes then return true if not then return false.
// let ab = "123"; 
// console.log(isNaN(ab));

// Number Methods 
// 1. toFixed -- 
// let ab = 121.6267727;
// console.log(ab.toFixed(2));
 //2. toExponential()
//  let ab = 121.626778787727;
// console.log(ab.toExponential(2));
// //3. toString()  -- 
// let ab =11;
// let x = ab.toString();
// console.log(x);
// 4. toPrecision -- 
// let ab = 12.4343434;
// let x = ab.toPrecision(4);
// console.log(x);

// Number.isSafeInteger(number) --  it check it given value is integer or not .-2power53-1 to 2power53-1 . 
// Number.isInteger(number) --  it check it given value is integer or not .
//  Number.isFinite(number) --  it check it given value is finite or not .

// let a = "123";
// Number() --  it convert the string into number --
// let x = Number(a);
// console.log(typeof x);
// parseInt() -- it convert the string into number --
// let x  = parseInt(a);
// console.log(typeof x);
// parseFloat() --  it convert the string into number --
// let x  = parseFloat(a);
// console.log(typeof x);

//  Math sqrt min max
// let ab = Math.random();
//  console.log((ab*10000).toFixed(0));

// // Date 
// var tarikh = new Date();

// console.log(tarikh.getDate());