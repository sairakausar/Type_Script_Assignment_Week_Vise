// Create a function that takes an array, an index, and a value as
// parameters. Inside the function, use the splice method to insert the
// value at the specified index in the array. Return the modified array.
function modify_an_array(an_array, index, value) {
    an_array.splice(index, 1, value);
    console.log(an_array);
}
modify_an_array([1, 2, 3, 5, 6, 8, 10], 1, "apple");
