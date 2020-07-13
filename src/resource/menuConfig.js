import {UserOutlined,SettingOutlined,TagsOutlined,TeamOutlined,LikeOutlined,OrderedListOutlined,BankOutlined,GlobalOutlined,HighlightOutlined,BarChartOutlined,BarcodeOutlined} from '@ant-design/icons';
import React from 'react'

const menuList = [{
        title: '首页',
        key: "/admin/home",
        icon: <SettingOutlined />
    },
    {
        title: 'UI',
        key: "/admin/ui",
        icon:<HighlightOutlined />,
        children: [{
            title: '按钮',
            key: "/admin/ui/buttons"
        }, {
            title: "弹窗",
            key: '/admin/ui/modals'
        }, {
            title: "loading",
            key: '/admin/ui/loading'
        }, {
            title: '通知提醒',
            key: '/admin/ui/inform'
        }]
    },
    {
        title: '表单',
        key: '/admin/form',
        icon:<BarChartOutlined />,
        children: [{
            title: "登录",
            key: "/admin/form/login"
        }, {
            title: '注册',
            key: '/admin/form/register'
        }]
    },
    {
        title: '表格',
        key: '/admin/table',
        icon:<OrderedListOutlined />
    },
    {
        title: '富文本',
        key: '/admin/text',
        icon:<BarcodeOutlined />
    },
    {
        title: '城市管理',
        key: '/admin/cityManage',
        icon:<BankOutlined />
    },
    {
        title: '订单管理',
        key: '/admin/orderManage',
        icon:<TagsOutlined />
    },
    {
        title: '员工管理',
        key: '/admin/staffManage',
        icon: <TeamOutlined />,
    },
    {
        title: '车辆地图',
        key: '/admin/vehicleMap',
        icon:<GlobalOutlined />
    },
    {
        title: '图标',
        key: '/admin/icon',
        icon:<LikeOutlined />
    },
    {
        title: '权限设置',
        key: '/admin/permissions',
        icon: < UserOutlined / >
    }
]

export default menuList;