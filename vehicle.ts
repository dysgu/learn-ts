export default class Vehicle {
  protected model: string = "";
  protected velocity: number = 0;

  public accelerate(): void {
    this.velocity += 5;
  }

  public stop(): void {
    this.velocity = 0;
  }

  public currentVelocity(): number {
    return this.velocity;
  }
}
