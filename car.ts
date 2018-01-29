import Vehicle from "./vehicle";

export default class Car extends Vehicle {
  private doorsNumber: number;

  constructor(model: string, doorsNumber: number) {
    super();
    this.model = model;
    this.doorsNumber = doorsNumber;
  }
}
