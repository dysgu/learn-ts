import Car from "./car";
import Motorcycle from "./motorcycle";
import Dealership from "./dealership";

let car = new Car("Veloster", 3);
console.log('Car accelerate 2x');
car.accelerate();
car.accelerate();
console.log('Car current velocity:', car.currentVelocity());
car.stop();
console.log('Car stop');

let motorcycle = new Motorcycle();
console.log('Motorcycle accelerate 2x');
motorcycle.accelerate();
motorcycle.accelerate();
console.log('Motorcycle current velocity:', motorcycle.currentVelocity());

let dealership = new Dealership("São Paulo", [car]);

console.log(car);
console.log(motorcycle);
console.log(dealership);
console.log('Dealership operating Hours:', dealership.operatingHours());
