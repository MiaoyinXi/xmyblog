'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router,controller}=app
    router.get('/default/index',controller.default.home.index);
    router.get('/default/index/getArticleList',controller.default.home.getArticleList);
    router.get('/default/index/getArticleById/:id',controller.default.home.getArticleById);
    router.get('/default/index/getTypeInfo',controller.default.home.getTypeInfo);
    router.get('/default/index/getListById/:id',controller.default.home.getListById);

}

