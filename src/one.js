// import { useState } from "react";

function ab(){
    let a=78
    function fd(){
        console.log(a)
    }
}


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

  var myVariable = 2000
function double(num) {
  console.log(myVariable)
  var myVariable;
  return num * 2;
}
console.log(double(3));

let a=[4,4,5,67]
let ab=a.map((r)=>r*2)
console.log(ab);

const [ab,setab]=useState("")


function foo(){
  return {bar: "hello"}
  }
  foo()
  console.log(foo());