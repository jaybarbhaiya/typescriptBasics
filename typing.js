var myString;
myString = "This is my string";
// mySting cannot have "number" type as it was instantiated with type "string".
// myString = 4;
var anotherString = "this is another string";
// anotherString was instantiated with a string value and hence cannot be assigned by number. The type is inferred here.
// anotherString = 7;
var newString;
// newString does not contain type and hence the tsc compiler does not complain.
// this means that it is important to define types for the variables explicitly to avoid errors
newString = "This is a new String";
newString = 5;
var yetAnotherString;
// allows and data type to the variable
// basic types:
var iNumber;
var bBoolean;
var sString;
var aArray; // this is generic type. Array of type string.
var anything;
// We also have void and enums
