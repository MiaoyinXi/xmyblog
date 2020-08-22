import React from 'react'
import { QqOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons';
import '../static/style/components/author.css'
import {Avatar,Divider} from 'antd'





const Author=()=>{
    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://pic2.zhimg.com/v2-8c5064d67acbaa87411a96f10e45e722_im.jpg"/>
            </div>
            <div className="author-introduction">
                我还是当年那个少年，没有一丝丝改变
                <Divider>社交账号</Divider>
                <div className="account-box">
                    <span><QqOutlined  /></span>
                    <span><WechatOutlined /></span>
                    <span><GithubOutlined  /></span>
                </div>

            </div>

         </div>
    )
}

export default Author;
