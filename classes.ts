class Car {
	engineName: string;
	gears: number;
	private speed: number;

	constructor(speed: number) {
		this.speed = speed || 0;
	}

	accelerate(): void {
		this.speed++;
	}

	throttle(): void {
		this.speed--;
	}

	getSpeed(): void {
		console.log(this.speed);
	}

	static numberOfWheels(): number {
		return 4;
	}
}

// Instantiate (create) an object from a class

let car = new Car(5);
car.engineName = "Opel";
car.gears = 6;
car.accelerate();
car.getSpeed();

// static functions can be called without instantiating an object from the class
console.log(Car.numberOfWheels());