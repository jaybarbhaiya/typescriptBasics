// Interfaces allow us to create contracts for other classes/objects have to implement
// We can use them to defines custom types without creating classes.
// Interfaces ARE NOT complied to JavaScript! Its just for validation purposes.

// Example Interface

interface User {
	username: string;
	password: string;
	confirmPassword?: string; // Optional property => Does not have to be implemented
}

let user:User;

// This value does not satisfy the interface => Compilation error
// user = {anything: "anything", anynumber: 4};

// This value satisfies the interface
user = {username: "jay", password: "supersecret"};


interface CanDrive {
	accelerate(speed:number): void;
}

// contracting objects should implement accelerate function with the given parameter
let Car: CanDrive = {
	accelerate: function(speed:number) {
		// ...
	}
};