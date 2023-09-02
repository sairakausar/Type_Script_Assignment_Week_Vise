// Write a program having an array of numbers if the number is
// negative it should remove the negative number from the array.
var array = [0, -1, 2, -3, 4, 5, -6, -7, -9, 10];
console.log("before removing Negitive Number", array);
var positive_array = [];
var index = 0;
var length = array.length;
console.log(length);
while (index < length) {
    if (array[index] > 0) {
        positive_array.push(array[index]);
        console.log();
    }
    index = index + 1;
}
console.log(positive_array);
