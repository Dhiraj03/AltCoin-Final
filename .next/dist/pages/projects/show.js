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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _project = require("../../ethereum/project");

var _project2 = _interopRequireDefault(_project);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\dhira\\Desktop\\AltCoin-Final\\pages\\projects\\show.js?entry";


var ProjectShow = function (_Component) {
  (0, _inherits3.default)(ProjectShow, _Component);

  function ProjectShow() {
    (0, _classCallCheck3.default)(this, ProjectShow);

    return (0, _possibleConstructorReturn3.default)(this, (ProjectShow.__proto__ || (0, _getPrototypeOf2.default)(ProjectShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          address = _props.address,
          description = _props.description,
          donorCount = _props.donorCount;

      var items = [{
        header: address,
        meta: "Address of the project",
        description: "This is the address of the account of the project.",
        style: { overflowWrap: "break-word" }
      }, {
        header: "Project description",
        meta: "A brief description and summary of requirements.",
        description: description
      }, {
        header: donorCount,
        meta: "Number of donors",
        description: "Number of donors who have already contributed to the charity."
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var status = this.props.status;
      //if (isComplete) {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Campaign Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/validate", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: !status, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Validate a milestone!")))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/reject", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: !status, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Reject!"))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/donate", __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: !status, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Donate!")))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/add", __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: !status, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Add milestones!"))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/view", __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { disabled: !status, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "View Milestones!")))))));
      /* } else {
        return (
          <Layout>
            <h3>Campaign Show</h3>
            <Grid>
              <Grid.Row>
                <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
              </Grid.Row>
              <Grid.Column width={10}>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                  <Form.Field>
                    <label>Enter Bid Index to be viewed:</label>
                    <Input
                      value={this.state.value}
                      onChange={event =>
                        this.setState({ value: event.target.value })
                      }
                    />
                  </Form.Field>
                  <Message
                    error
                    header="Oops!"
                    content={this.state.errorMessage}
                  />
                  <Button
                    disabled={isComplete}
                    primary
                    loading={this.state.loading}
                  >
                    View!
                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Link route={`/tenders/${this.props.address}/bid`}>
                    <a>
                      <Button disabled={isComplete} primary>
                        Bid for this project
                      </Button>
                    </a>
                  </Link>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Link route={`/tenders/${this.props.address}/finalize`}>
                    <a>
                      <Button disabled={isComplete} primary>
                        Finalize the Winning Bid!
                      </Button>
                    </a>
                  </Link>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Button disabled={!isComplete} onClick={this.onClick} primary>
                    View all details of bids!
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Layout>
        );
      } */
    }
  }], [{
    key: "getInitialProps",

    /* state = {
      value: "",
      errorMessage: "",
      loading: false,
      index: "",
      winner: ""
    }; */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var project, donorNumber, description, status;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                project = (0, _project2.default)(props.query.address);
                _context.next = 3;
                return project.methods.n().call();

              case 3:
                donorNumber = _context.sent;
                _context.next = 6;
                return project.methods.desc().call();

              case 6:
                description = _context.sent;

                console.log(description);
                _context.next = 10;
                return project.methods.status().call();

              case 10:
                status = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  description: description,
                  donorCount: donorNumber,
                  status: status
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectShow;
}(_react.Component);

exports.default = ProjectShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9qZWN0c1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIlByb2plY3QiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJHcmlkUm93Iiwid2ViMyIsIlJvdXRlciIsIkxpbmsiLCJQcm9qZWN0U2hvdyIsInByb3BzIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZG9ub3JDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwic3RhdHVzIiwicmVuZGVyQ2FyZHMiLCJwcm9qZWN0IiwicXVlcnkiLCJtZXRob2RzIiwibiIsImNhbGwiLCJkb25vck51bWJlciIsImRlc2MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDbkQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYyxBQUN2QixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUdmOzs7Ozs7Ozs7OztrQ0F3QlU7bUJBQ2lDLEtBRGpDLEFBQ3NDO1VBRHRDLEFBQ0osaUJBREksQUFDSjtVQURJLEFBQ0sscUJBREwsQUFDSztVQURMLEFBQ2tCLG9CQURsQixBQUNrQixBQUU5Qjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQUxDLEFBQ1osQUFJUyxBQUFnQjtBQUp6QixBQUNFLE9BRlU7Z0JBT1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQVZVLEFBT1osQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWZKLEFB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QTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFVBQVUsQ0FBbEIsQUFBbUIsUUFBUSxTQUEzQjtvQkFBQTtzQkFBQTtBQUFBO1NBckRkLEFBQ0UsQUFFRSxBQThDRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBVWQ7QUE4REQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FoTEQ7Ozs7Ozs7Ozs7MkcsQUFPNkI7Ozs7O21CQUNyQjtBLDBCQUFVLHVCQUFRLE1BQUEsQUFBTSxNQUFkLEEsQUFBb0I7O3VCQUNWLFFBQUEsQUFBUSxRQUFSLEFBQWdCLElBQWhCLEFBQW9CLEE7O21CQUF4QztBOzt1QkFDb0IsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsTyxBQUFoQixBQUF1Qjs7bUJBQTNDO0EsdUNBQ047O3dCQUFBLEFBQVEsSUFBUixBQUFZOzt1QkFDUyxRQUFBLEFBQVEsUUFBUixBQUFnQixTQUFoQixBLEFBQXlCOzttQkFBeEM7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7K0JBRkssQUFFUSxBQUNiOzhCQUhLLEFBR08sQUFDWjswQkFKSyxBQUlHLEE7QUFKSCxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZm9CLEEsQUFvTDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC9BbHRDb2luLUZpbmFsIn0=