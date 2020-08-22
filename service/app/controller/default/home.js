'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        //数据库获取内容get("表名",{条件})
       let result = await this.app.mysql.get("mb_articles_contents",{});
        //console.log(result);
        this.ctx.body='hi';
    }

    //建立接口
    async getArticleList(){
        let sql ='SELECT mb_articles.articleID as id ,'+
            'mb_articles.title as title ,'+
            'mb_articles.status as status ,' +
            'mb_articles.description as description ,'+
            'mb_articles.keywords as keywords ,'+
            'mb_articles.imgPath as imgPath ,'+
            'mb_articles.createTime as createTime ,'+
            'mb_articles.modifyTime as modifyTime '+
            'FROM mb_articles LEFT JOIN mb_articles_cate ON mb_articles.cateID = mb_articles_cate.cateID'
        const results = await this.app.mysql.query(sql);
        this.ctx.body={data:results};
    }
    async getArticleById(){
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id//通过 id 获得文章详细内容

        let sql ='SELECT mb_articles.articleID as id ,'+
            'mb_articles.title as title ,'+
            'mb_articles.cateID as cateID ,' +
            'mb_articles_contents.contents as article_contents ,' +
            'mb_articles.keywords as keywords ,'+
            'mb_articles.imgPath as imgPath ,'+
            'mb_articles.createTime as createTime ,'+
            'mb_articles.modifyTime as modifyTime '+
            'FROM mb_articles LEFT JOIN mb_articles_contents ON mb_articles.articleID = mb_articles_contents.articleID '+
            'WHERE mb_articles.articleID='+id


        const result = await this.app.mysql.query(sql)
        this.ctx.body = {data:result}
    }
    //得到类别名称和编号
    async getTypeInfo(){
        const result = await this.app.mysql.select('mb_header_type')//只读类别，不用sql
        this.ctx.body = {data:result}

    }
    //根据类别 id 获得文章列表
    async getListById(){
        let id = this.ctx.params.id;
        console.log('qqqqqqqqqqqqqqqqqqqq'+id)
        let sql ='SELECT mb_articles.articleID as id ,'+
            'mb_articles.title as title ,'+
            'mb_articles.status as status ,' +
            'mb_articles.description as description ,'+
            'mb_articles.keywords as keywords ,'+
            'mb_articles.imgPath as imgPath ,'+
            'mb_articles.createTime as createTime ,'+
            'mb_articles.modifyTime as modifyTime '+
            'FROM mb_articles LEFT JOIN mb_articles_cate ON mb_articles.cateID = mb_articles_cate.cateID' +
            'WHERE mb_articles.cateID='+ id
        const results = await this.app.mysql.query(sql);
        this.ctx.body={data:results};
    }
}

module.exports = HomeController;
