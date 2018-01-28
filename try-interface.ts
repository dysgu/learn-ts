import { Dao } from "./dao";
import { DaoI } from "./daoInterface";
import Concessionaria from "./concessionaria";
import Pessoa from "./pessoa";
import Moto from "./moto";
import Carro from "./carro";

const daoConcessionaria: Dao<Concessionaria> = new Dao<Concessionaria>();
let concessionaria = new Concessionaria("", []);

console.log(
  "== Concessionaria:",
  daoConcessionaria.insert(concessionaria),
  daoConcessionaria.update(concessionaria)
);

const daoPessoa: Dao<Pessoa> = new Dao<Pessoa>();
let pessoa = new Pessoa("@ftonato", "Mustang");

console.log("== Pessoa:", daoPessoa.insert(pessoa), daoPessoa.update(pessoa));

const daoMoto: Dao<Moto> = new Dao<Moto>();
let moto = new Moto();

console.log("== Moto:", daoMoto.insert(moto), daoMoto.update(moto));

const daoCarro: Dao<Carro> = new Dao<Carro>();
let carro = new Carro("Mustang", 5);

console.log("== Carro:", daoCarro.insert(carro), daoCarro.update(carro));
