"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _project = require("../../ethereum/project");

var _project2 = _interopRequireDefault(_project);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\AltCoin-Final\\pages\\projects\\reject.js?entry";


var Reject = function (_Component) {
  (0, _inherits3.default)(Reject, _Component);

  function Reject() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Reject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Reject.__proto__ || (0, _getPrototypeOf2.default)(Reject)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var project, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                project = (0, _project2.default)(_this.props.address);

                _this.setState({ loading: true });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return project.methods.reject().send({
                  from: accounts[0],
                  gas: 100000
                });

              case 9:
                _routes.Router.replaceRoute("/projects/" + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Reject, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("div", { "class": "ui red message", __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Are you sure you want to reject? Rejecting will IMMEDIATELY ban the project from receiving further donations and pay the donors back."), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, "class": "ui negative massive button", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "REJECT!")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt("return", { address: address });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Reject;
}(_react.Component);

exports.default = Reject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9qZWN0c1xccmVqZWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiTWVzc2FnZSIsIlByb2plY3QiLCJ3ZWIzIiwiUm91dGVyIiwiTGF5b3V0IiwiUmVqZWN0Iiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJyZWplY3QiLCJzZW5kIiwiZnJvbSIsImdhcyIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFROztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFHYixBOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSjtvQkFBUSxBQUNRLEFBQ2Q7ZUFGTSxBQUVHLEE7QUFGSCxBQUNOLGEsQUFRRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47cUJBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNBO0FBRkcsMEJBRU8sdUJBQVEsTUFBQSxBQUFLLE1BRnBCLEFBRU8sQUFBbUIsQUFDbkM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBSFAsQUFHVCxBQUFjLEFBQVc7O2dDQUhoQjtnQ0FBQTt1QkFNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O21CQUExQjtBQU5DLG9DQUFBO2dDQUFBOytCQVFELEFBQVEsUUFBUixBQUFnQixTQUFoQixBQUF5Qjt3QkFDdkIsU0FENEIsQUFDNUIsQUFBUyxBQUNmO3VCQVZLLEFBUUQsQUFBOEIsQUFFN0I7QUFGNkIsQUFDbEMsaUJBREk7O21CQUlOOytCQUFBLEFBQU8sNEJBQTBCLE1BQUEsQUFBSyxNQVovQixBQVlQLEFBQTRDO2dDQVpyQztBQUFBOzttQkFBQTtnQ0FBQTtnREFjUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWR2QixBQWNQLEFBQWMsQUFBb0I7O21CQUVwQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQWhCUCxBQWdCVCxBQUFjLEFBQVc7O21CQWhCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFtQkYsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxTQUFMLEFBQVc7b0JBQVg7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFLQSwwSkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQU5GLEFBTUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQVEsU0FBUyxLQUFBLEFBQUssTUFBdkIsQUFBNkIsU0FBUyxTQUF0QyxBQUE0Qyw4QkFBNkIsU0FBekU7b0JBQUE7c0JBQUE7QUFBQTtTQVROLEFBQ0UsQUFDRSxBQU9FLEFBTVA7Ozs7OzZHQXhDNEIsQTs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE1BQWxCLEE7a0RBRUQsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSVSxBLEFBK0NyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWplY3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC9BbHRDb2luLUZpbmFsIn0=