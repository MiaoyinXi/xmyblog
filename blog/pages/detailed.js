import React from 'react'
import Head from 'next/head'
import {Row, Col,Breadcrumb,Affix} from 'antd'
import Header from '../components/Header'
import Recommend from '../components/Recommend'
import Author from '../components/Author'
import Footer from '../components/Footer'
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons'
import '../static/style/pages/detailed.css'
//import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'//tocify.tsx  typescript jsx
//先进行引入
import  servicePath  from '../config/apiUrl'


const Detailed = (props) => {

    const tocify = new Tocify()
    //renderer 使用 marked 必须要用的
    const renderer = new marked.Renderer()
    renderer.heading = function(text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    marked.setOptions({
        renderer:renderer,//可以自定义渲染方式
        gfm:true,//启动类似 GitHub 的 markdown
        pedantic:false,//true 完全不容错，false 是可以容错
        sanitize:false,//清洁:true 是忽略 html 标签，false是不忽略，主要是 iframe 的渲染
        tables:true,//GitHub 的表格样式，true:必须把 gfm 添上
        breaks:true,//换行
        smartLists:true,//自动渲染列表，改为 false 可以自己写
        highlight:function (code) {//代码高亮。需要传入 code，代表代码部分，
            return hljs.highlightAuto(code).value;//返回值是 highlight 插件
        }
    })
    let html = marked(props.article_contents)//用 marked 值渲染文章内容

    return(
        <div>
            <Head>
                <title>Detailed</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div>

                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="/">学习笔记</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="/">xxx</a></Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className="detailed-title">
                                {props.title}
                            </div>
                            <div className="list-icon center">
                                <span><CalendarOutlined/>{props.createTime}</span>
                                <span><FolderOutlined /> {props.keywords}</span>
                                <span><FireOutlined /> {props.description}</span>
                            </div>
                           {/* <ReactMarkdown
                                source={markdown}
                                escapeHtml={false}
                            />*/
                               /*{html}*不能用这种形式，要用上面那种形式渲染*/
                           }

                            <div className="detailed-content"
                                 dangerouslySetInnerHTML={{__html:html}}
                            >

                            </div>

                        </div>

                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Recommend/>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>

            </Row>
            <Footer/>
        </div>
    )
}


Detailed.getInitialProps = async (context)=>{
    console.log('--------'+context.query.id)
    //接收
    console.log(context.query.id)
    let id = context.query.id

    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleById+id).then(
            (res)=>{
               // console.log('-----------',res)
                resolve(res.data.data[0])
            }
        )
    })
    return await promise
}


export default Detailed
