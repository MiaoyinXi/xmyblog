let ipUrl = 'http://127.0.0.1:7001/default/index/'

let servicePath = {

    getArticleList:ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo:ipUrl + 'getTypeInfo/',  // 文章类别接口header
    getListById:ipUrl + 'getListById/',  // 根据类别 ID 获取文章列表
    checkLogin:ipUrl + 'checkLogin' ,  //  检查用户名密码是否正确

}

export default servicePath;
