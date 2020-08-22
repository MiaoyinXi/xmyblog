/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585450744683_5613';

  // add your middleware config here
  config.middleware = ['gzip' ];
  // 配置 gzip 中间件的配置
  config.gzip ={
    threshold: 1024// 小于 1k 的响应体不压缩
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '47.112.180.25',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'Guanhu,123',
      // database
      database: 'XGBlog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {enable: false},
    domainWhiteList: [ 'http://localhost:3000', 'http://localhost:3001']
  };

  config.cors = {
    //origin: 'http://localhost:3000',
    credentials: true, //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    //跨域问题 最后把 origin 字段注释掉 ，重启服务之后多等几秒，
    // 因为 cors 里面有origin 字段会忽略上面的白名单 （origin却只能写一个跨域地址）二选一
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: 'localhost',
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
