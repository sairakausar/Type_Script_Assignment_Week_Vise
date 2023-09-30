//   enam 
 // predefine value as three color i use red color , 
enum color {RED , GREEN , BLUE}

// VAlue give 
color[color.RED]  // if we need value then


color.RED
const whatCOLOR : number = color.RED
//enum also give index
console.log("what color", whatCOLOR);

//..........
enum WEEKDAYS{MONDAY, TUESDAy,}

//...............fixed.constatly assign one value in the code
//........
// let new


let newAdminn ={
    role: 'Admin',
    name: "Nab"
}

enum USERROLE {ADMIN, USER}
let newUser = {
    role: USERROLE.USER,
    name: "nab"
}

let newAdmin ={
    role: USERROLE.ADMIN,
    name: "sai"
}
if(newUser.role == USERROLE.USER){

}

//do something

//when enuum define then clearity is more
// constatnt value write in BIG character , it is standard.
//..................................................
// Genrarics
// make a function when take an input Array and have 2 indexes
// This function take array ang return another array

function swap(arr:number[]):number[]{
    return [arr[1],arr[0]]
}
 const result:number[]= swap ([10,20])
 console.log("result,",result);
 //.......................
 function swap2(arr:string[]):string[]{
    return [arr[1],arr[0]]
}
 const result2:string[]= swap2 (["Naveed","ALI"])
 console.log("result,",result2);

 //genaric = general type
 // type of function is T
 // i tell this type t is number when i call it.
 const result3:number[]= swap ([10,20])
 console.log("result,",result);

 const result10 = swap ([10,20])
 console.log("result,",result);

 function swap4<T>(arr: T []):T[]{
    return [arr[1],arr[0]]
   const input : number []= [10,20]
}
// only do this in function
 //..............................................
//  function swap21(arr:string[]):string[]{
//     return [arr[1],arr[0]]
// }
//  const result21:string[]= swap2 <string>(["Naveed","ALI"])
//  console.log("result,",result2)

 //...................
 function swapGenerics<T>(arr:T[]): T[]{
    return [arr[1], arr[0]]
 }
    swapGenerics<number>([2,4])
    swapGenerics<string>(["Saira","Kausar"])
    //its corrct way to make this when number 
    swapGenerics<boolean>([true,false])
    
    // 41:46 #24 video

    //................

//    // if two type of swap is use

//     const result:number[]=swap<number>([10,20])

//     function swapGenerics <T,B>(arr:T[]): B[]{
//         return ["Hello", "world"]
//      }
//     const result:number[]=swap<number,string>([10,20])
//     //.............................................


 

 

 


