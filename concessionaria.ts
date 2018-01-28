import Carro from "./carro";
import { ConcessionariaInterface } from "./concessionariaInterface";

export default class Concessionaria implements ConcessionariaInterface {
  private endereco: string;
  private listaCarros: Array<Carro>;

  constructor(endereco: string, listaCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaCarros = listaCarros;
  }

  public fornecerHorarioFuncionamento(): string {
    return "Atendimento ao público de segunda à sexta-feira, das 8h30 às 12h00 e de 14h00 às 18h30.";
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }

  public mostrarListaCarros(): Array<Carro> {
    return this.listaCarros;
  }
}
