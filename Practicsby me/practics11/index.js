// console.log("Before Aync COde ");
// var message = [{
//     name: "any_number",
//     type: "number",
//     message: "Please Enter a number"
// }]
// async function EnterNumberFunction(){
//     let result = await inquirer.prompt(message)
//     console.log("Result Object", result);
//     console.log("Result Number", result.any_number);
// }
// EnterNumberFunction()
// console.log("After Async COde");
// //..........................
// console.log("Before");
// async function give_marks(){
//     var course_one = await inquirer.prompt([{
//         name: "Math",
//         type: "number",
//         mesage: "Please Enter Math Number",
//     }])
//     console.log(course_one);
//     if (course_one.Math > 50){
//         var course_two = await inquirer.prompt([{
//             name: "Physics",
//             type: "number",
//             message: "Please Enter Physics Number",                                                       
//         }])                                                                  
//     }else{                                                             
//         console.log("YOur Failed in Math Now repeat All the Subjects");
//     }                                                                     
// }                                                                                   
// give_marks()                                                                              
// console.log("After");                                                                          
// .....................
//  = await inquirer.prompt([{
//         name: "Math",
//         type: "number",
//         mesage: "Please Enter Math Number",
//     }])
//     console.log("Math Marks",course_one.Math);
//    if (course_one.Math > 50){
//     var course_two = await inquirer.prompt([{
//             name: "Physics",
//             type: "number",
//             messag: "Please Enter Physics Number",
//      }])
//         console.console.log("Before");
// async function give_marks(){
//     var course_onelog("Physics Marks",course_two.Physics);
//         if(course_two.Physics> 50){
//             console.log("Your are Passed in Both Subjects");
//         }else{
//             console.log("Your have lower then 50 Marks in Physics, SO your failed");  
//         }
//     }else{
//         console.log("YOur Failed in Math Now repeat All the Subjects");   
//     }
// }
// give_marks()
// console.log("After");
//......................
//=====================
// console.log("before Async");
// let titles: any = [];
// async function myfunction(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let final_response = await response.json();
//     // console.log("Data from Link",final_response);
//     final_response.forEach((object: any) => {
//         titles.push(object.title)
//     });
//     console.log("GIve me all titles",titles);
// }
// myfunction()
// console.log("After Async");
//=====================================
//=====================================
// console.log("Data from Link", final_response);                                                 
// final_response.forEach((Element:any)=> {                                        
//     titles.push(Element.completed)                                  
//   200 object hain aur                                         
// })                                                                                 
// async function myfunction(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let final_response = await response.json();  // humain read
//      console.log("Data from Link",final_response);
//      for(var index = 0; index < final_response.length; index++){
//      console.log("Show current title of index", final_response[index].title );
//      }
// }
// myfunction()
//===================================================
// when net is off                                                                                                              
// async function myfunction (){                                                       
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         console.log('DATA FROM API', response);
//         let finalResponse = await response.json();
//         console.log('after converting into JSON', finalResponse);
//         // let titles: any = [];
//         for(var index = 0; index <= 10 && index < finalResponse.length; index++){
//             console.log("Show current title of index", index, finalResponse[index].title );
//         }
//         // finalResponse.forEach((element: any) => {
//         //   titles.push(element.title);
//         // });
//         // Do something with 'titles' if needed
//        } catch (error:any) {
//    //    console.error('An error occurred:', error.message);
//        console.log('An error occurred: no net');
//       }
// }                                                                                                                     
// myfunction()                                                              
// console.log("after Async");    
// //............==========--------_________;;;;;;;::::::::::'''''''''"'''''''''''"""""            
// https://jsonplaceholder.typicode.com/todos
async function my_function() {
    let response_data = await fetch(' https://jsonplaceholder.typicode.com/todos ');
    console.log("response_data", response_data);
    let result = await response_data.json();
    console.log("response_final", result);
    //   for(let index=0 ; index < result.length; index++ ){
    //    let ID =  result[index].title
    //     console.log("id", ID );
    //   }
    let Title = [];
    result.forEach((element) => {
        var final_results = Title.push(element.completed);
        console.log("titlee ", final_results);
    });
    console.log(Title);
}
my_function();
export {};
