"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 创建一个自定的axios方法(比原axios多了个基地址)
// axios函数请求的url地址前面会被拼接基地址, 然后axios请求baseURL+url后台完整地址
var myAxios = _axios["default"].create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
}); // 导出自定义的axios方法, 供外面调用传参发请求


var _default = myAxios;
exports["default"] = _default;