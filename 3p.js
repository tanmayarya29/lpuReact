//1>>Reduce
let arr= new Array(1,2,3,4)
let res=arr.reduce((a,b)=>a*b);
console.log(res);

res=arr.reduce((a,b)=>a+b,5);//5 is initial value
console.log(res);//o/p 15

