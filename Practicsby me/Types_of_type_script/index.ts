var num = 10 // every type of data is store if no define types
num = "hellow world"
num = false

// Number
var num: number = 10 ; // in Type script define the type
// if we use this varible agaIN IN NUMBER TO STRING THEN THIS GIVE ERRoe to us , so we find error 
// of this
// string
let userName : String = "Saira";

// Booleen
let isCompleted : boolean = false;
// decision making
// fan of or on

//null
 let isNull : null = null
// i no define his value at this time
 // mean this is nothing, empety
// no value store now after that we can put value in it , 
// use od null and undefine : i no have value but I also value 
let books : null = null
books = []
// after that from internet data can be define in it . 


// undefine
let  isUndefine : undefined = undefined
// no value assingn in it
//
// we take input from user till now  when user give value then we can put value
//

let  isUndefine : undefined | string  = undefined
// some time we need two type of undefine type , when data come then this type is string

let  isUndefine : undefined | string | number = undefined

//Void Type
 let isVoid : void = undefined
 // when we no return value 

 function printUserName ( userName : string) : string {  //return or output of function
            
 }

 function printUserName ( userName : string) : number {  //return or output of function
            console.log();
            return 56
            
 }

 function printUserName ( userName : string) : number {  //return or output of function
    console.log();
    return 56
    
}
function printUserName ( userName : string) : void {  //return or output of function
    // which no retuen any value 
}

function printUserName ( userName : string) : number {  //return or output of function
    console.log();
    return 56
// who no send the value back // jis na wapis koi value send ni karni    
}
//..............
function printUserName ( userName : string) : any {  //return or output of function
    console.log();
    return 36    
}

const result = printUSERName ()
console.log("result", result , typeof result);
//..............

//..............
function printUserName ( ) : void {  //he have no return
    // if in which no value we return void : void have also permisiion to save the undefined value
    console.log(printUserName);
      
}

const result = printUSERName ()
console.log("result", result , typeof result);
//..............

// Any Type
let isAny : any = "anything"  // every type of varible come in it. 
// unset the type cheking
 isAny = 12
 isAny = false
 // whos function tell to the visualstudio to do red line then any stop the red line function

 //Unknown

 let isunknown : unknown = "string"

 let isunknown : unknown = "string"
 isunknown = false 
 console.log("isunknown", isunknown);
 //   unknownis more comfortable then any

 // unknown and any is 

 // Never
 let never 
 function returnError (): never {
    Throw new Error ("isUnknown", isUnknown);
 }
 // if we through error from any function is used never ..


 // == They all are scaler type mean one .
 //33:00 mint

let student:object = {
    name: string,
    email: string,
    phone: 0234434454563
} = {
    name: "Saira",
    email: "",
    phone: 247
}
 //\\\\/\/\/\////////\\\\\\\\\\\\///////////\

 let student:object = {
    name: string,
    email: string,
    phone: 0234434454563
} = {
    name: "Saira",
    email: "",
    phone: 247
}
//\\\\\\\\\/////////
let student:object = {
    name: string,
    email: string,
    phone: 0234434454563
} 

 
let student:object = {
    name: string,
    email: string,
    phone: 0234434454563
} = {
    name: "Saira",
    email: "",
    phone: 247
}
// we are in scop then let is reman in the scope but var can also come out from the scope.

let data : number[]=[1,18,9,81,69]
let data 

//tuple:

let tuple: [string, number, boolean] = ["ajsh",235, false]

let newArr: [string, number, boolean] = ["ajsh",235, false]
let newArr:[number ,number:] = [123,3]

let studentNames = [{name: "naveed"},{name: "ajsk"}]// this is no good way
//because if their is no more keys then we use [{},{}] this if only one key then 
use only [ "", "", ""]

tuple.push("ajsjd")

tuple // fixed array size and no change.
// the size of tuple is no increse and no decres , and no change value = constant.

let dat = new Array(100) // in this index length is 100.// this is also an array.
// tuple is an object of an array.

let student: object [] = [{name:"shsh", email:ll ,phone: 988}]

type StudentType = {// which i no have the quantity
    nam:string,
    email: string,
    phone:number,
    adress: string | null   // value can cone or not
    adress?:string // that user put it or not.
    //? optional ha         (i:0)
}

let student : StudentType []= [{nam : "gfgj", email: "sjjs@gmailcom", phone:47743,adress: null},
{nam : "gfgj", email: "sjjs@gmailcom", phone:47743},
{nam : "gfgj", email: "sjjs@gmailcom", phone:47743,adress:"shs"}]
student[0].number
//.................
let student: [studantType ,studentType]

//

//Union Type // two type 
let num2 : number | number = null

num2 = 897
type SHAPE = {
    area: number
}

type CIRCLE = {
    area: string
}

let newShape : SHAPE | CIRCLE ={
    ARea: 2479,
    Size:"hdjd"
}

//      ? |

// intersection Type

// you put & 
num2 = 897
type SHAPE = {
    area: number
}

type CIRCLE = {
    area: string
}

let newShape : SHAPE & CIRCLE ={
    ARea: 2479,
    Size:"hdjd"
}
// if one is mision then also this give error // & both type fullfil is compalsory

let num2 : number & null = null // This is wrong

//   1:20 mint

type contactform = {
    name: "string",
    email: "string",
    budget: number,
    nessage: string | null   // 1: 28 mint
}
let newContact: contactform= {
    name: " hshs",
    email:"sjsjs",
    budget: 78262,
    mesage:null

}
newContact.message
//.....
type contactform2 = {
    name: "string",
    email: "string",
    budget: number,
    nessage: string | null   // 1: 28 mint
}
let newContact2: contactform= {
    name: " hshs",
    email:"sjsjs",
    budget: 78262,
    mesage:null

}
newContact.message
//........
type contactform &  contactform2

//............
//about page
//...........

// nested 

type contactform2 = {
    name: string,
    email: string,
    budget: number,
    nessage: {
        title: string,
        description: string
    }
}
let newContact2: contactform= {
    name: " hshs",
    email:"sjsjs",
    budget: 78262,
    mesage:null

}
newContact.message.title
//..........
type contactform2 = {
    name: string,
    email: string,
    budget: number,
    nessage?: {
        title: string,
        description: string
    }
}
let newContact2: contactform= {
    name: " hshs",
    email:"sjsjs",
    budget: 78262,
    message:null

}
newContact.message.title
// chances of crash because message is undefine.
// error or no give data.
//...........................
















