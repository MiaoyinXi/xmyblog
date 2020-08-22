// 'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app =>{
    const {router,controller} = app
    var adminauth = app.middleware.adminauth()
    router.get('/admin/index',controller.admin.main.index)
    //router.get('/admin/getTypeInfo',adminauth ,controller.admin.main.getTypeInfo)
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
}
