import { Dao } from "./dao";
import { DaoI } from "./daoI";
import Dealership from "./dealership";
import Person from "./person";
import Motorcycle from "./motorcycle";
import Car from "./car";

const daoDealership: Dao<Dealership> = new Dao<Dealership>();
let dealership = new Dealership("", []);

console.log(
  "== Dealership:",
  daoDealership.insert(dealership),
  daoDealership.update(dealership)
);

const daoPerson: Dao<Person> = new Dao<Person>();
let person = new Person("@ftonato", "Mustang");

console.log("== Person:", daoPerson.insert(person), daoPerson.update(person));

const daoMotorcycle: Dao<Motorcycle> = new Dao<Motorcycle>();
let motorcycle = new Motorcycle();

console.log(
  "== Motorcycle:",
  daoMotorcycle.insert(motorcycle),
  daoMotorcycle.update(motorcycle)
);

const daoCar: Dao<Car> = new Dao<Car>();
let car = new Car("Mustang", 5);

console.log("== Car:", daoCar.insert(car), daoCar.update(car));
