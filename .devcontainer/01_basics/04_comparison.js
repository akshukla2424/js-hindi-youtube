console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">=1); //type conversion happen

console.log(null>0);
console.log(null==0);
console.log(null<=0); // "0 = 0" => true
/*
The reason is that an equality check == and comparisons > < >= <= work differently.

Comparisons convert null to a number, treating it as 0.

That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log("2" === 2); //False beause it also check typeof