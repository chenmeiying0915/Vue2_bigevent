"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 封装的是具体的接口请求方法
// 注意：每个方法只负责请求一个url地址
// import request from '@/utils/request'
// /**
//  * 注册接口
//  * @param {*} param0 { username: 用户名, password: 密码 }
//  * @returns Promise对象
//  * 原地是一个Promise对象（内部包含Ajax请求）
//  * 需要return这个promise对象到逻辑页面，去那边对promise对象提取结果
//  * 记得export导出接口方法，以便在逻辑页面中引入后调用
//  */
// export const registerAPI = ({ username, password, repassword }) => {
//   return request({
//     url: '/api/reg',
//     method: 'post',
//     data: {
//       username,
//       password,
//       repassword
//     }
//   })
// }
// 创建一个自定的axios方法(比原axios多了个基地址)
// axios函数请求的url地址前面会被拼接基地址, 然后axios请求baseURL+url后台完整地址
var myAxios = _axios["default"].create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
}); // 导出自定义的axios方法, 供外面调用传参发请求


var _default = myAxios;
exports["default"] = _default;