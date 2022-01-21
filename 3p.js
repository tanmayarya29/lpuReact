//1>>Reduce
let arr= new Array(1,2,3,4)
let res=arr.reduce((a,b)=>a*b);
console.log(res);

res=arr.reduce((a,b)=>a+b,5);//5 is initial value
console.log(res);//o/p 15

//Q1. max and min element
let min=arr.reduce((a,b)=>a<b?a:b);
console.log(min);
let max=arr.reduce((a,b)=>a>b?a:b);
console.log(max);

//Q2. reverse array
let rev=arr.reduce((a,b)=>[b].concat(a));
console.log(rev);

//best logic using sigle array ye mid to end reverse wala bhi kna h kya ya ye logic likha h
//
let revr = (a)=>{
    let i=0,j=a.length-1;
    while(i<j){
        [a[i],a[j]]=[a[j],a[i]];
        i++;
        j--;
    }
    return a;
}
console.log(revr(arr));

//Q3. camel casing
let sentence = "this is a string";

let camelCase = sentence.split(" ").reduce((a,b)=>a+b[0].toUpperCase()+b.slice(1));
console.log(camelCase);
//sir
let words = sentence.split(" ");
let resultCC = words.map((word)=>word[0]).join(".");
console.log(resultCC);

//Q4. differnce b/w oldest and youngest ppl
const students = [
    {
        name: 'John',
        age: 13
    },

    {
        name: 'Mark',
        age: 35
    },

    {
        name: 'Jack',
        age: 18
    },

    {
        name: 'George',
        age: 20
    }
]
//auto
let mx = students.map((student)=>student.age).reduce((a,b)=>a>b?a:b);
let mn = students.map((student)=>student.age).reduce((a,b)=>a<b?a:b);
console.log(mx-mn);
//sir
let ages = students.map((student)=>student.age);
let mxx = Math.max(...ages);
let mnn = Math.min(...ages);
console.log(mxx-mnn);




