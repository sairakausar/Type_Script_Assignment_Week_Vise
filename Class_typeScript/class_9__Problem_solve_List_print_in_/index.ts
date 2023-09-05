
//          write a program that print all the car company
//        and year from the list make sure car is an object

type cartype ={ company : string,isUsedCar?: boolean, year: number}
var car : cartype [] = [{
    company:"honda",
    isUsedCar: true,
    year:2020,

}, {
    company:"civic",
    isUsedCar:  false,
    year:2021,
}, {
    company:"toyota",
    isUsedCar: true,
    year:2022,
}, {
    company:"kia",
    isUsedCar: true,
    year:2023,
}, {
    company:"BMW",
    isUsedCar: true,
    year:2024,
}, {
    company:"Mehran",
    isUsedCar: true,
    year:2025,
}, {
    company:"tiwota",
    isUsedCar: true,
    year:2026,
}, {
    company:"keya",
    isUsedCar: false,
    year:2027,
}, {
    company:"hondaa",
    isUsedCar: true,
    year:2028,
}, {
    company:"hondae",
    isUsedCar: true,
    year:2029,
},

]
for (let index = 0 ; index < 1; index++){
    console.log(car);  
}
for (let index = 0 ; index < car.length; index++){
    console.log(car[index].year);  
}
console.log(car[0].year,car[1].year,car[2].year,car[3].year,car[4].year,car[5].year,car[6].year,car[7].year,car[8].year,car[9].year);



// console.log((car[1],year[1],));
