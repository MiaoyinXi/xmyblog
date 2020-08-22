'use strict';

/** @type Egg.EggPlugin
 * 组件配置
 * */
/*
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
*/
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
}
exports.cors ={
    enable: true,
    package:'egg-cors'
}
