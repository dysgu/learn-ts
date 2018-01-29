import Car from "./car";

export default class Person {
  private name: string;
  private favoriteCarName: string;
  private car: any;

  constructor(name: string, favoriteCarName: string) {
    this.name = name;
    this.favoriteCarName = favoriteCarName;
  }

  public getName(): string {
    return this.name;
  }

  public getFavoriteCarName(): string {
    return this.favoriteCarName;
  }

  public getCar(): Car {
    return this.car;
  }

  public setCar(car: Car): void {
    this.car = car;
  }
}
