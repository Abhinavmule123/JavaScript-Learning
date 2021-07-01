// export -  export default -- per module one,  named export -- multiple times we can use it.
// show module
// export function show(){                 //Named export 
//     console.log("hello world");
// }
// function show(){                 // export default 
//     console.log("hello world");
// }
// export default show;

const a =20;
export default a;

function show(){                 //named export
    console.log("hello world");
}


function show1(){
    alert("hello");
}
export {show,show1};