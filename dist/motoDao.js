"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moto_1 = require("./moto");
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.table = "tbl_moto";
    }
    MotoDao.prototype.insert = function (object) {
        console.log("Method insert");
        return true;
    };
    MotoDao.prototype.update = function (object) {
        console.log("Method update");
        return true;
    };
    MotoDao.prototype.remove = function (id) {
        console.log("Method remove");
        return new moto_1.default();
    };
    MotoDao.prototype.select = function (id) {
        console.log("Method select");
        return new moto_1.default();
    };
    MotoDao.prototype.selectAll = function () {
        console.log("Method selectAll");
        return [new moto_1.default()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
