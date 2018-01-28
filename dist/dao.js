"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.table = "tbl_pessoa";
    }
    Dao.prototype.insert = function (object) {
        console.log("Method insert");
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log("Method update");
        return true;
    };
    Dao.prototype.remove = function (id) {
        console.log("Method remove");
        return Object();
    };
    Dao.prototype.select = function (id) {
        console.log("Method select");
        return Object();
    };
    Dao.prototype.selectAll = function () {
        console.log("Method selectAll");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
