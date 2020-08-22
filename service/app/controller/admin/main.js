'use strict';
const Controller = require('egg').Controller

class MainController extends Controller{

    async index(){
        //首页的文章列表数据
        this.ctx.body='hi api'
    }

    //判断用户名密码是否正确
    async checkLogin(){
        this.ctx.body='hi checkLogin'
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT username FROM mb_admins WHERE username = '"+ userName +
            "' AND password = '"+ password +"'"

        const res = await this.app.mysql.query(sql)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId=new Date().getTime()
            this.ctx.session.openId={ 'openId':openId } //登录状态存的是 session
            this.ctx.body={'data':'登录成功','openId':openId}//记录登录的时间戳，防止sql注入

        }else{
            this.ctx.body={data:'登录失败'}
        }
    }


    //后台文章分类信息
    async getTypeInfo(){
        const resType = await this.app.mysql.select('type')
        this.ctx.body={data:resType}
    }




}

module.exports = MainController
