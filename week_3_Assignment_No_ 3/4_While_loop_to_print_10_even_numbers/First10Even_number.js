//Write a program that uses a while loop to print the first 10 even numbers.
var even_number = 0;
while (even_number <= 10) {
    console.log("first 10 even number", even_number);
    even_number = even_number + 1;
    if (even_number % 2 == 0) {
        console.log(even_number);
    }
}
