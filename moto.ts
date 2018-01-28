import Veiculo from "./veiculo";

class Moto extends Veiculo {
  public acelerar(): void {
    this.velocidade += 10;
  }
}

export default Moto;
