import React,{useState,useEffect} from 'react'
import '../static/style/components/header.css'
import {Row,Col, Menu} from 'antd'
import Icon from '@ant-design/icons';
import { HomeOutlined, BookOutlined, SmileOutlined } from '@ant-design/icons';
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'


const Header=()=>{
    //头部动态加载 type
    const [navArray,setNavArray]=useState([])//初始值置空
    useEffect(()=>{
        const fetchData=async ()=>{//必须声明一个方法里面再异步，不然会报错

            const result=await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    //setNavArray(res.data.data);
                    return res.data.data
                }
            )
            setNavArray(result);
        }
        fetchData();

    },[])//用useEffect得到信息，参数1：方法；参数 2：值可以是任何变化的值，比如 navArray变化的时候都会执行，置空表示第一次进入组件才会执行
    const handleClick =(e)=>{
        if(e.key==0){
            Router.push('/index')//next.js 的跳转
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    return(
        <div className="header">
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">UPMia</span>
                    <span className="header-txt">继续努力，一直向上</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                       {/* <Menu.Item key="home">
                           <HomeOutlined  twoToneColor="#eb2f96" />首页
                        </Menu.Item>*/}
                           {
                               navArray.map((item)=>{
                                   return (
                                       <Menu.Item key={item.id}>

                                           {item.typeName}

                                       </Menu.Item>
                                   )
                               })
                           }


                        {/*<Menu.Item key="note">
                            <BookOutlined />学习
                        </Menu.Item>

                        <Menu.Item key="life">
                            <SmileOutlined />生活
                        </Menu.Item>*/}
                    </Menu>
                </Col>

            </Row>
        </div>
    )
}
export default Header
