import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'
import menuList from './../../resource/menuConfig'
import { Menu, Switch, Divider } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
const SubMenu = Menu.SubMenu

export default class NavLeft extends Component {

    state = ({
        showStyle: false,
        openKeys: [menuList[0].key],
    })

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode,
        })
    }

    renderMenu = (data) => {
        return (
            data.map((item) => {
                if (item.children)
                    return <SubMenu title={item.title} key={item.key} icon={item.icon}>{this.renderMenu(item.children)}</SubMenu>
                return <MenuItem title={item.title} key={item.key} icon={item.icon}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </MenuItem>
            })
        )
    }

    changeModal = () => {
        this.setState({ showStyle: !this.state.showStyle })
    }

    onOpenChange = openKeys => {
        const lastOpenKeys = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
        if (menuList.indexOf(lastOpenKeys) !== -1) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: lastOpenKeys ? [lastOpenKeys] : []
            })
        }
    }

    render() {
        const { menuTreeNode, showStyle, openKeys } = this.state
        const { showDarkTheme, clickShowTheme } = this.props
        return (
            <div>
                <div className="logo">
                    {/* <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""></img>
                   <h1>Imooc</h1> */}
                </div>
                <Switch onChange={this.changeModal}>change mode</Switch>
                <Divider type="vertical" />
                <Switch onChange={clickShowTheme}> change theme</Switch>
                <Menu
                    theme={showDarkTheme ? 'dark' : 'light'}
                    mode={showStyle ? 'vertical' : 'inline'}
                    openKeys={openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    {menuTreeNode}
                </Menu>
            </div>
        )
    }
}