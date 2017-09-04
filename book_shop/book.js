console.log("book shop exercise");


var bookShelf = [
    {
        name: "Kasun's Diary",
        price: 29.99,
        stock: 5
    },
    {
        name: "DT's Journal",
        price: 99.99,
        stock: 5
    },
    {
        name: "Pride and Prejudice",
        price: 19.99,
        stock: 6
    }
];

// We need to allow customers to purchase books
var purchase = function (customerBook, quantity, customerName) {
    var total = calculateCost(customerBook,quantity);
    updateStock(customerBook,quantity);
    displayToCustomer(customerBook, quantity, customerName, total);
}

var calculateCost = function (customerBook, quantity) {
    var totalPrice = customerBook.price * quantity * 1.1;
    return totalPrice.toFixed(2);
}

var updateStock = function (customerBook, quantity) {
    bookShelf.forEach(function(bookLocal) {
        if (bookLocal.name === customerBook.name){
            bookLocal.stock = bookLocal.stock - quantity;
            // could use (book, index)
            //bookShelf[index].stock = bookShelf[index].stock - quantity
        }
    })
}

var displayToCustomer = function (customerBook, quantity, customerName, total) {
    var message = "Thank you "+customerName +" for buying " + quantity + " copies of " + customerBook.name + " for " + total + ".";
    console.log(message);
}


console.log(purchase(bookShelf[0],4,'Pauline'));
