//js obj to json
// JSON.stringify()
//json to js obj
// JSON.parse()
//
console.log("\<--------------------MAP--------------------\>");
// 1>>Map: It gives new array based on old array,
// if you tell what is computation logic.
{//S
let array =[1,2,3,4,5];
let newArray=[];
for(let i=0;i<array.length;i++){
    newArray[i]=array[i]*array[i];
}
console.log(newArray);//Itterating from left to right we are using old array to print new array
//Same logic using map(),in JS a function is also a JSobject
let array1=[5,10,15,20];
function functionFormap(element){
    return element*element;
}
let array2=array1.map(functionFormap);
console.log(array2);
//Map is function which works like for loop which takes a function as an argument and returns a modified new array
//Efficient
let array3=[5,10,15,20];
let funtionForMap=(element)=>element*element;
let newarr=array3.map(funtionForMap);
console.log(newarr);
//logic for above problem
// let addtwonum=(a,b)=>a+b;
// let num1=4;
//let num2=5;
//addtwonum(num1,num2);
let orderlist=[5,10,15,20];
let narr = orderlist.map((order)=>order*order);
console.log(narr);
//new
// let ar= array.map(element,index)=>{
//     console.log(index);
//     return element*element;
// });
//
}
{//T
  let array = [1, 2, 3, 4, 5];
  // //m1
  // function functionForMap(element) {
  //     return element * element;
  // }
  // //m2
  // let ffm = (e) => e*e;
  // let newArray = array.map(ffm);
  
  //m3//
  let newArray = array.map((e) => e*e);
  console.log(newArray)
  }

console.log("\<--------------------FOREACH--------------------\>");
//2>>Foreach Loop:It is void type function , it doesn't return anything it only performs action.
//Chaining of forEach loop in map()
{//T
//// In JS, a function is also a JS Object
//////////////----------------------------------------------------------------------------------------------------------------------------------------------
//for each
let array2 = [1, 2, 3, 4, 5];
array2.forEach((element, index) => {
element *= element;
console.log(element);
})
console.log("Array is: ", array2);

//cant chain after foreach
}
{
let array = [10, 20, 30, 40, 50];
let newArray=[];
array.map((element) => {
if(element<=20){
return element * element;
}
 return (element - 10) * element;
}).forEach((element) => {
if(element>50) 
{
    newArray.push(element) ;
    }else{
     newArray.push(element - 10);
    }
});
console.log(newArray);
}
//In case of foreach loop  pass by reference is not supported, to change array use map()
// also foreach and map cannot be breakout in an array, it will show error
{let array=[1,2,3,4,5];
array.forEach((element,index) => {
    console.log(element);
});}
{let array=[1,2,3,4,5];
array.forEach((element,index) => {
    element*=element;
    console.log(element);
});
console.log("Array is:", array);
}
{//To breakoutof loop
let array=[1,2,3,4,5]
array.forEach((element,index)=>{
    element*=element;
    if(index==2){
        // break;
    }
    console.log(element);
});}

console.log("\<--------------------FILTER--------------------\>");
//3>>filter used like vector in c++
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//filter
{let ar=[1,2,3,4,5]
let ar2=ar.filter((e)=>e>3)
console.log(ar2);}

{
let array = [10, 20, 30, 40, 50];
let newArray = array
.filter((element) => element >= 30)
.map((element) => element > 30)
.filter((element) => element >= 100);
console.log(newArray) ;}

{//Array in booleans
let array=[10,20,30,40,50];
let newArray=array
.filter((element)=>element>=30)
.map((element)=>element>30)
console.log(newArray);}
{//To find value in array
let ar1=[10,20,30,40,50];
let temp=ar1.find((value)=>{////find(value,index)
    return value>20; //if we write return value<0; than output will be undefined
});
console.log(temp);}
{//To find index of array
let ar2=[10,20,30,40,50];
let temp=ar2.findIndex((value)=>{
    return value>20; //if return value<0; thn op:-1
});
console.log(temp);}
{
  //to find first occurace of elem from given index
  let ar2=[10,20,30,40,50];
  let temp=ar2.indexOf((value,index)=>{
    return value>20; //if return value<0; thn op:-1
});
console.log(temp);
}


console.log("\<--------------------SORT--------------------\>");
// 4>>Sort
{let array=[50,40,30,20,10,111]
array.sort() //always return new array
let sortedArray=array.sort();
console.log(sortedArray);//it will give output 10,111,20,30,40,50 as sort array function works lexographically in js
}
{//To sort array using integer value instead of string we use compareter(it helps in comparison in linear data structure)
//Compareter function in JS:->
let array = [10, 40, 111, 30, 20, 10];
let sortedArray = array.sort((el1,el2) => {
  el1=Number(el1);
    el2=Number(el2);
return el1 - el2;
});
console.log(sortedArray) ;
//Op:10,20,30,40,50,111
//if we write return el2-el1 =descending order and for el1-el2=0 =>no change
}

console.log("\<--------------------OBJECT DESTRUCTURING--------------------\>");
//5>>Object destructing
{let details = {
    name:"Alex",
    age: 24,
    address: {
    street: "Brooklyn",
    city: "New York",
    state: "NY",
    country: "USA",
    passportDetails: {
     passportNumber: "ABCD1234",
    },
},
};
let{name:myName,age}=details;
console.log(myName,age);
//Output: Alex 24
//To print address properties
let{
  address:{
    country,
    passportDetails:{passportNumber}
    },
  }=details;
console.log(country,passportNumber);
// OP: USA  ABCD1234
}


console.log("\<--------------------ARRAY MATCHING--------------------\>");
//6>>Array Matching: Pending.........
// { let myName = details.name;
//  let age = details.age; 
//  let { name: myName, age } = details;
// console.log(myName, age); 
//
// let{
// address: {
// country,
// passportDetails: { passportNumber },
// },
// } = details;
// console.log(country, passportNumber) ;
// if (arrayl == array2)
// }

console.log("\<--------------------OBJECT MATCHING--------------------\>");
//7>>Object Matching:
//Checking same no. of key value pair
{let obj1 = { name: "Shantanu" }; //Set [name] "Shantanu": 
let obj2 = { name: "Shantanu" }; 
function areEqual(obj1, obj2){ //‘obj1" is already declared
if (obj1 == obj2) {
return true;}
if (Object.keys(obj1).length != Object.keys(obj2).length) {
return false;
}

for (let key of Object.keys(obj1)) {
if(typeof obj2[key]=="undefined"){
return false;
}

if (obj2[key] != obj1[key]) {
return false;
}
}
return true;
}
console.log(areEqual(obj1,obj2));//op:true
//For let obj1 = { name: "Shantanu",age:24 }; let obj2 = { name: "Shantanu" };=>op:false
}

console.log("\<--------------------MAP & SET--------------------\>");
//8>>MAP and SET
{let map = new Map();
map.set(1, "Shantanu");
map.set(2, "Alex");
console.log(map);
map.values()
//op:{1=>'Shantanu',2=>'Alex'}
}
{//SET:It has no duplicate values
let set = new Set();
set.add(1);
set.add(1);
console.log(set);}
//op:{1}
//set.add(1);
//set.add(-1);
//op:{1,-1} 
//set.delete(-1);->for deleting
// let arr=[...set]
// console.log(set);

console.log("\<--------------------CLASSES--------------------\>");
//9>>Classes:
//Classes are used to create objects
{
class Animal{
  noOfLegs;
  color;
  family;
  sound;
  constructor(noOfLegs,color,family,sound){
    this.noOfLegs=noOfLegs;
    this.color=color;
    this.family=family;
    this.sound=sound;
  }
  showAnimal(){
    console.log("The animal belongs to "+this.family+" family and has "+this.noOfLegs+" legs and "+this.color+" color and "+this.sound+" sound");
}
}

let animal= new Animal(4,"brown","rodent","something");
console.log(animal);
animal.showAnimal();
Animal.prototype.showAnimal();//for using class name

class Dog extends Animal {
    breed;
    weight;
    height;
  
    constructor(color, breed, weight, height) {
      super();
      super.sound = "Woof";
      super.noOfLegs = 4;
      super.family = "LoyalAnimal";
      super.color = color;
      this.breed = breed;
      this.weight = weight;
      this.height = height;
    }
}

let dog= new Dog("brown","Lab","20kg","2m");
console.log(dog);
}
//
//tomorrow: promises ,modules, nodejs, npm