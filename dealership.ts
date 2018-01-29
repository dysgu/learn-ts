import Car from "./car";
import { DealershipI } from "./dealershipI";

export default class Dealership implements DealershipI {
  private address: string;
  private carList: Array<Car>;

  constructor(address: string, carList: Array<Car>) {
    this.address = address;
    this.carList = carList;
  }

  public operatingHours(): string {
    return "From Monday to Friday from 9:00 a.m. to 5:00 p.m.";
  }

  public getAddress(): string {
    return this.address;
  }

  public getCarList(): Array<Car> {
    return this.carList;
  }
}
