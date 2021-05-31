// Array Methods 
// 1.push 
// let ab = [1,2,3,4,5];  
// let x = ab.push(7,8,9); 
// console.log(ab);
// 2.unshift
// let ab = [1,2,3,4,5];
// let x = ab.unshift(6,7);
// console.log(x);
// 3.pop
// let ab = [,2,3,4,5,[3,4,4]];
// let x = ab.pop();
// console.log(ab);
//4. shift
// let ab = [1,2,3,4,5,[3,4,4]];
// let x = ab.shift();
// console.log(ab);
// delete ab[2];
//5 . reverse
// let ab = [1,2,3,4,5];
// let x = ab.reverse();
// console.log(x);
//6. toString
// let ab = [1,2,3,4,5];  
// let x = ab.toString();
// console.log(x);
//7. join
// let ab = [1,2,3,4,5]; 
//  ab.join("and");
// console.log(x);
//8. Array.isArray
// let ab = [1,2,3,4,5];
// let x = Array.isArray(ab);
// console.log(x);
//9.fill
// let ab = [1,2,3,4,5];
// let x=ab.fill("hello",0,2);
// console.log(ab);

// // 10 concat 
// let ab = [1,2,3,4,5];
// let cd = [6,7,8];
// let x = ab.concat(cd,123,[77,88,99]);
// console.log(x);
//11. indexOf
// let ab = [1,2,3,4,5];
// let x = ab.indexOf(8);
// console.log(x);
// 12. slice
// let ab = [1,2,3,4,5];
// let x = ab.slice(-5,-1);
// console.log(x);
// // 13. splice 
// let ab = [1,2,3,4,5];
// let x = ab.splice(start,deleteCount,replaceValue);
// console.log(x);

// //14. forEach
//  let ab = [1,2,3,4,5];
// ab.forEach((arrayelement)=>console.log(arrayelement+1));
//15 map
// let ab = [1,2,3,4,5];

// let x =ab.map((arrayelement)=>{
//      return arrayelement+1;
// });
// console.log(x);
// // 16. filter
// let ab = [{name:"gaurav",class:2},{name:"manish",class:1},{name:"abhinav",class:3},{name:"yash",class:3}];
// let x = ab.filter((arrayelement)=>{
//   return  arrayelement.class == 1;
// })
// console.log(x);

//17. find

// let ac = [{name:"gaurav",class:2},{name:"manish",class:1},{name:"yash",class:3},{name:"abhinav",class:3}];
// let xe = ac.find((arrayelement)=>{
//    return arrayelement.class == 3;
// })
// console.log(xe); 

//18. every 
// let ab = [1,2,3,4,5];
// let x = ab.every((arrayelement)=>{
//    return arrayelement%2==0;
// });
// console.log(x);

// //19 . some
// let ab = [1,2,3,4,5];
// let x = ab.some((arrayelement)=>{
//    return arrayelement%2==0;
// });
// console.log(x);
