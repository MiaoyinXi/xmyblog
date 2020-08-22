import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import {Row, Col,List,Breadcrumb} from 'antd'
import {CalendarOutlined,FolderOutlined,FireOutlined} from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Recommend from '../components/Recommend'
import Footer from '../components/Footer'
import '../static/style/pages/list.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'

const MyList  = (list) => {

    const [ mylist , setMylist ] = useState(list.data)

    return(
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/">笔记</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={mylist}
                        renderItem={item =>(
                            <List.Item>
                                <div className="list-title">
                                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                    {item.title}
                                </div>
                                <div className="list-icon">
                                    <span><CalendarOutlined />{item}</span>
                                    <span><FolderOutlined /> 学习笔记</span>
                                    <span><FireOutlined /> 5700</span>
                                </div>
                                <div className="list-context">{item.context}</div>
                            </List.Item>
                        )}
                    />

                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Recommend />
                </Col>


            </Row>

            <Footer/>

        </div>
    )
}

MyList.getInitialProps = async (context)=>{
    let id = context.query.id
    const promise = new Promise((resolve)=>{

        axios(servicePath.getListById+id).then(
            (res)=>{
                resolve(res.data)
            }
        )
    })
    return await promise
}

export default MyList
