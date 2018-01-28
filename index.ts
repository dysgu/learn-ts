import Carro from "./carro";
import Moto from "./moto";
import Concessionaria from "./concessionaria";

let carro = new Carro("Veloster", 3);
carro.acelerar();
carro.acelerar();

let moto = new Moto();
moto.acelerar();
moto.acelerar();

let concessionaria = new Concessionaria("São Paulo", [carro]);

console.log(carro);
console.log(moto);
console.log(concessionaria.fornecerHorarioFuncionamento());
