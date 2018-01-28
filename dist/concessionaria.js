"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    Concessionaria.prototype.fornecerHorarioFuncionamento = function () {
        return "Atendimento ao público de segunda à sexta-feira, das 8h30 às 12h00 e de 14h00 às 18h30.";
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
