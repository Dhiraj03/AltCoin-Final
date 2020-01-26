"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /* This file is used to create an instance of web3 attached to a provider
                   to be used in other files
                   */

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are in the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/f15c170790644d87be404f2e35c6993e");
  web3 = new _web2.default(provider);
}
/*const getProvider = async () => {
  await window.web3.currentProvider.enable(); // request authentication
};

getProvider();
*/
/* window.web3.currentProvider assumes that MetaMask has
automatically injected web3 into the page
*/
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEFBQU87Ozs7OztBQUNQLElBQUksWUFBSixHQUxBOzs7O0FBT0EsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFIRCxPQUdPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNmLEFBRUg7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNoQjs7QUFDRDs7Ozs7O0FBTUEsQUFHQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9kaGlyYS9EZXNrdG9wL0FsdENvaW4tRmluYWwifQ==