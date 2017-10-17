'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    action: _action2.default,
    reducer: _reducer2.default
};
module.exports = exports['default'];