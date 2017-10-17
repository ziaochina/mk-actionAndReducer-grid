'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
    };

    this.isSelectAll = function () {
        var lst = _this.metaAction.gf(_this.option.listPath);
        if (!lst || lst.size == 0) return false;

        return lst.every(function (o) {
            return o.get(_this.option.selectFiledName);
        });
    };

    this.selectAll = function (e) {
        _this.injections.reduce('selectAll', e.target.checked);
    };

    this.getSelectedCount = function () {
        var lst = _this.metaAction.gf(_this.option.listPath);

        if (!lst || lst.size == 0) return 0;

        var ret = lst.filter(function (o) {
            return !!o.get(_this.option.selectFiledName);
        }).size;

        return ret;
    };

    this.metaAction = option.metaAction;
    this.option = {
        listPath: option.listPath,
        selectFieldName: option.selectFieldName
    };
};

exports.default = action;
module.exports = exports['default'];