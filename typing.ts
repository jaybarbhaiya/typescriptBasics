let myString : string;

myString = "This is my string";
// mySting cannot have "number" type as it was instantiated with type "string".
// myString = 4;

let anotherString = "this is another string";
// anotherString was instantiated with a string value and hence cannot be assigned by number. The type is inferred here.
// anotherString = 7;

let newString;

// newString does not contain type and hence the tsc compiler does not complain.
// this means that it is important to define types for the variables explicitly to avoid errors
newString = "This is a new String";
newString = 5;

let yetAnotherString: any;
// allows and data type to the variable

// basic types:
let iNumber: number;
let bBoolean: boolean;
let sString: string;
let aArray: Array<string>; // this is generic type. Array of type string.
let anything: any;

// We also have void and enums