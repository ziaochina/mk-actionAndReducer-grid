"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.selectAll = function (state, checked) {
        var lst = _this.metaReducer.gf(state, _this.option.listPath);

        if (!lst || lst.size == 0) return state;

        for (var i = 0; i < lst.size; i++) {
            state = _this.metaReducer.sf(state, _this.option.listPath + "." + i + "." + _this.option.selectFiledName, checked);
        }

        return state;
    };

    this.metaReducer = option.metaReducer;
    this.option = {
        listPath: option.listPath,
        selectFieldName: option.selectFieldName
    };
};

exports.default = reducer;
module.exports = exports["default"];