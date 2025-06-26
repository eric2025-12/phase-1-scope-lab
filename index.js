// Write your solution in this file!
// 1. Declare global variable customerName using var
var customerName = 'bob';

// 2. Function that uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that declares a global variable bestCustomer inside it
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const makes it global
}

// 4. Function that overwrites the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// 6. Function that tries to change the const leastFavoriteCustomer (this will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // ❌ This will throw a TypeError
}
