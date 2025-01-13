console.log("JAI SHREE RAM");

const accountId = 123456;
let accountEmail = "akshukla2424@gmail.com";
let accountPassword = 654321;
let accountCity = "Delhi";
let accountState;

// accountId = 13579; // NOT ALLOWED

accountEmail = "akshukla1234@gmail.com";
accountPassword = "121212";
accountCity = "Mumbai";


console.table({
  AccountID: accountId,
  Email: accountEmail,
  Password: accountPassword,
  City: accountCity,
  State: accountState,
});

// Prefer not to use 'var'
// because of issues with block scope and functional scope