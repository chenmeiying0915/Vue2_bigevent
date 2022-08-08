"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerAPI = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 封装的是具体的接口请求方法
// 注意：每个方法只负责请求一个url地址

/**
 * 注册接口
 * @param {*} param0 { username: 用户名, password: 密码 }
 * @returns Promise对象
 * 原地是一个Promise对象（内部包含Ajax请求）
 * 需要return这个promise对象到逻辑页面，去那边对promise对象提取结果
 * 记得export导出接口方法，以便在逻辑页面中引入后调用
 */
var registerAPI = function registerAPI() {
  return (0, _request["default"])({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'Maya',
      password: '111111',
      repassword: '111111'
    }
  });
};

exports.registerAPI = registerAPI;