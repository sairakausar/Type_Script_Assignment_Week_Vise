// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
                             
var temperature_Celsiud : number = 41;                                       
                                                                                                                                      
  var result : number=   temperature_Celsiud * 9/5+32;                            
                                            
    console.log("Cto F", result);
                                                                                         
                                                                                                                                      
  var temperature_Fahrenheit : number = 41;                     
                                                                          
  var result2 : number = (temperature_Fahrenheit-32 ) * 5/9;                     
                                                                        
      console.log("f2c",result2);                                   
                                                                                               
    //  - Write a program that calculates the percentage.
                                                                               
    var achive_number : number = 50;
    var total_number : number =90;
    var percentage : number = (achive_number /total_number)*100;
    console.log("===percentage===");
    
    console.log(`The ${total_number} percentage of  ${achive_number}  is =  ${percentage}`);
    console.log("The", total_number, "percentage of", achive_number,  "is =",  percentage);

//  - Write a program that converts given number of days in 
// to weeks and days such as 17 days = 2 weeks and 3 days.

var given_number : number = 17
var weeks : number = Math.floor(given_number/7)
console.log("week",weeks);
var days: number = given_number%7
console.log("days",days);
console.log(`In your given days ${given_number}, the total weeks are ${weeks} and ${days} days`);

//Write a program that calculates the discount for a product based on its price. If
// the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var dis_10_percent : number = 20
var dis_5_percent :  number = 5
var price : number = 100

if (price >= 100){
  console.log("price is above 100 then % discount" , price*dis_10_percent/100);
  var discount: number = price*dis_10_percent/100
  console.log("now your price =", price-discount);
  
}
else {
  console.log("price is less then 100 then % discount", price*dis_5_percent/100);
  var discount: number = price*dis_5_percent/100
  console.log("now your price =", price-discount);
  
}
//  - Create a program that determines the category of a user-provided age. 
//If the age is between 0
// and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

// var child : number = 0 to 12
// var Teenager : number =  13 to 19
// var Adult : number = >19
var age : number = 5
if (age > 0 && age <= 12){
  console.log("if age is 0 to 12 then child ");
  
}
else if (age >= 13 && age <= 19  ){
  console.log("if age is 13 to 19 then teenager");
  
}
else{
  console.log("if age is greater 19 then audit") ;
  
  
}


// - Write a program that takes temperature and check it. 
//If it is cold then suggest the user to wear warm clothes
// and so on according to the weather.

var temperature_check : number = 21
if (temperature_check<10) {
  console.log("cold so wear warm clothes temperature =", temperature_check);
  
}
else if (temperature_check >= 10 && 30 >= temperature_check){
  console.log("less cold so wear less cold clothes temperature =",temperature_check );
  
}
else if (temperature_check >= 31 && 35 >= temperature_check)
   console.log("less hot so wear cotton clothes temprature =", temperature_check);
   
else{
  console.log("hot so wear light clothes temperature =", temperature_check);
  
}
//  - Write a program that checks 
//if the given number is  divisible by 3 or 5 or
// both or not divisible by anyone show output accordingly.
var any_number : number = 101
var divider_1 : number = 3
var result_1 : number =any_number%divider_1
var divider_2: number = 5;
var result_2 : number =any_number%divider_2
if (result_1==0){                                                                                            
  console.log("number divided on 3");
  }  
else if (result_2 ==0){                                                               
  console.log("number divided on 5");
}
else if (result_1 ==0 &&  result_2 ==0)
{                                                                    
  console.log("divieing on both 3 and 5");
  
}
else{
  console.log("number not divided on 3 or 5");
  
}
//  - Develop a program that determines the day of the week. Ask the user
//  for a number (1-7) and use nested if statements to print the corresponding day's name.

var day_1 : number = 4
if (day_1 == 1){
  console.log("Monday");
  }
  else if(day_1 == 2){
    console.log("Tuesday");
    }
    else if (day_1 == 3){
      console.log("wednesday");
     }
     else if(day_1 == 4){
      console.log("Tthusaday");
      }
      else if (day_1 == 5){
        console.log("Friday");
       }
       else if(day_1 == 6){
        console.log("Saturday");
        }
        else {
          console.log("sunday");
        }

//  - Write a program that takes the number of units consumed by a user
// if it is greater than 100 then add 10% tax if greater than 200 then 
// add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var units_consumed : number = 150


if(units_consumed > 100 && units_consumed <200){
  console.log("10% tax on 100 units");
  }
  else if (units_consumed > 200 && units_consumed < 500 ){
    console.log("15% tax on 200 units");
    }
    else {
      console.log("25% tax on 500 units");
      }


  

   




    
 


