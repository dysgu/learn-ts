import Vehicle from "./vehicle";

class Motorcycle extends Vehicle {
  public accelerate(): void {
    this.velocity += 10;
  }
}

export default Motorcycle;
