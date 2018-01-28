"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.table = "tbl_pessoa";
    }
    PessoaDao.prototype.insert = function (object) {
        console.log("Method insert");
        return true;
    };
    PessoaDao.prototype.update = function (object) {
        console.log("Method update");
        return true;
    };
    PessoaDao.prototype.remove = function (id) {
        console.log("Method remove");
        return new pessoa_1.default("@ftonato", "Mustang");
    };
    PessoaDao.prototype.select = function (id) {
        console.log("Method select");
        return new pessoa_1.default("@ftonato", "Mustang");
    };
    PessoaDao.prototype.selectAll = function () {
        console.log("Method selectAll");
        return [new pessoa_1.default("@ftonato", "Mustang")];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
