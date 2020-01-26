"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Project = require("./build/Project.json");

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This file is used to export a function which takes an address as
an argument and returns an instance of the tender contract deployed 
at that address
*/

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Project2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxwcm9qZWN0LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJQcm9qZWN0IiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhLEFBRXBCOzs7Ozs7QUFSQTs7Ozs7a0JBUWUsbUJBQVcsQUFDeEI7U0FBTyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FBUyxLQUFBLEFBQUssTUFBTSxrQkFBakMsQUFBc0IsQUFBbUIsWUFBaEQsQUFBTyxBQUFxRCxBQUM3RDtBQUZEIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC9BbHRDb2luLUZpbmFsIn0=