// Implement a simple shopping cart program using an array. Create
// functions to add items, remove items, and update quantities using the
// splice method. Print the cart's contents after each operation
var trally = [];
function add_items(trally_add, index, value) {
    trally_add.splice(index, 0, value); // 
    console.log(trally_add);
    trally = trally_add;
    console.log("trally add", trally);
}
function remove_item(trally_remove, index) {
    trally_remove.splice(index, 1);
    console.log("trally remove", trally);
}
function update_item(updated_item, index, value) {
    updated_item.splice(index, 1, value);
    console.log("trally Updated Item", trally);
}
add_items(["Shirts", "T-Shirts", "baby Shoes", "Baby Frock", "Purse"], 5, "Apple");
remove_item(trally, 2);
update_item(trally, 3, " bottle ");
