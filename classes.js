var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed || 0;
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
}());
// Instantiate (create) an object from a class
var car = new Car(5);
car.engineName = "Opel";
car.gears = 6;
car.accelerate();
car.getSpeed();
// static functions can be called without instantiating an object from the class
console.log(Car.numberOfWheels());
