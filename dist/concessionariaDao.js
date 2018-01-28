"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.table = "tbl_concessionaria";
    }
    ConcessionariaDao.prototype.insert = function (object) {
        console.log("Method insert");
        return true;
    };
    ConcessionariaDao.prototype.update = function (object) {
        console.log("Method update");
        return true;
    };
    ConcessionariaDao.prototype.remove = function (id) {
        console.log("Method remove");
        return new concessionaria_1.default("Porto Alegre", []);
    };
    ConcessionariaDao.prototype.select = function (id) {
        console.log("Method select");
        return new concessionaria_1.default("Porto Alegre", []);
    };
    ConcessionariaDao.prototype.selectAll = function () {
        console.log("Method selectAll");
        return [new concessionaria_1.default("Porto Alegre", [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
