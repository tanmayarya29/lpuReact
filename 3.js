//create a class vehicle
//props xyz...
//means of transport
//class car inherited{ mot-road}
//class ship inherited{mot-water}
//class aeroplane inherited{mot-air}

/*
Create a JS Class that has a property of a LinkedList (Class
implementation), and inside this JS class, create a function to get
the last element of the LinkedList, and also remove it from the
linkedList. If the list is empty, return null! Also, create a function
called, hasLast inside the JS class, which tells if the list has any
element by returning a boolean!

XYZ
ListNode

head;
let someVariable = new XYZ();
*/ 

class ListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class xyzz{
    constructor(){
        this.head=null;
    }
    add(data){
        let node=new ListNode(data);
        if(!this.head){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
    }
    removeLast(){
        let current=this.head;
        let previous=null;
        while(current.next){
            previous=current;
            current=current.next;
        }
        previous.next=null;
    }
    getLast(){
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        return current.data;
        this.removeLast();
    }
    
    hasLast(){
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        return current.data;
    }
}


let xyz=new xyzz();
xyz.add(1);
xyz.add(2);
xyz.add(3);
xyz.add(4);
console.log(xyz.hasLast());
console.log(xyz.getLast());
console.log(xyz.getLast());
console.log(xyz.getLast());
console.log(xyz.getLast());
console.log(xyz.hasLast());

//2>>Promises:*****VVI
//promise is a class in js
//constructor(function)

let n1=10;
let n2=20;
let myPromise=new Promise(
    (fulfilled,notFulfilled)=>
    {
        if(n1+n2>24){
            fulfilled();
        }
        else{
            notFulfilled();
        }
    }
);
//then when fulfilled// catch when not fulfilled//then n catch r function and takes functional argument as callback
myPromise.then(
    ()=>{
        console.log("success");
    }
    ).catch(
    ()=>{
        console.log("failure");
    }
)

//delay gets executed in another thread
//api n db calls n reading files uses settimeout

//eventLoops js is not multi threaded
//nested promise
console.log("start");

//Object.prototype is the root of all objects in js