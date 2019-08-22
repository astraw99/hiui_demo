import React, { Component } from 'react'
import { Theme } from '@hi-ui/classic-theme'
import MyGrid from './MyTheme';

// 路由组件
const Mi = () => <div>小米手机-wangcheng<MyGrid /></div>
const RedMi = () => <div>红米手机</div>
const BlackShark = () => <div>黑鲨手机</div>
const TV = () => <div>小米电视</div>
const SoundBox = () => <div>小米音响</div>
const Robot = () => <div>米家扫地机器人</div>

// 路由菜单配置项
const routeConfig = [
    {
        name: '手机', // 一级菜单名称
        children: [
            { name: '小米9', path: '/mi', component: Mi }, // 二级菜单名称、跳转路径、匹配的路由组件
            { name: '红米', path: '/red-mi', component: RedMi },
            { name: '黑鲨', path: '/black-shark', component: BlackShark }
        ]
    },
    { name: '电视', path: '/tv', component: TV }, // 不存在 children 属性将不会渲染二级菜单
    {
        name: '智能硬件',
        children: [
            { name: '音响', path: '/audio', component: SoundBox },
            { name: '扫地机器人', path: '/robot', component: Robot }
        ]
    }
]

// 系统 logo 配置项
const logoConfig = {
    logoUrl: 'https://xiaomi.github.io/hiui/static/img/logo.png?241e0618fe55d933c280e38954edea05', // 点击 logo 跳转地址
    name: 'HIUI Theme', // logo 名称
    url: 'https://xiaomi.github.io/hiui/#/' // logo 资源地址
}

// 系统登录信息配置项
const loginConfig = {
    name: 'Mi Guest', // 登录用户
    icon: 'user', // 登录用户 icon
    children: [
        <div key='user-info' style={{ textAlign: 'center', margin: 4, width: 100 }}>
            <a href='#info'>个人信息</a>
        </div>,
        <div key='logout' style={{ textAlign: 'center', margin: 4, width: 100 }}>
            <a href='#logout'>注销</a>
        </div>
    ] // 登录项菜单
}

class App extends Component {
    render() {
        return <Theme routes={routeConfig} logo={logoConfig} login={loginConfig} type='classic' /> // 传递各配置项供主题使用
    }
}

export default App