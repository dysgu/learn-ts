"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.table = "tbl_carro";
    }
    CarroDao.prototype.insert = function (object) {
        console.log("Method insert");
        return true;
    };
    CarroDao.prototype.update = function (object) {
        console.log("Method update");
        return true;
    };
    CarroDao.prototype.remove = function (id) {
        console.log("Method remove");
        return new carro_1.default("Mustang", 5);
    };
    CarroDao.prototype.select = function (id) {
        console.log("Method select");
        return new carro_1.default("Mustang", 5);
    };
    CarroDao.prototype.selectAll = function () {
        console.log("Method selectAll");
        return [new carro_1.default("Mustang", 5)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
