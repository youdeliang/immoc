import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class Header extends Component{

    state=({
        userName:'ccaa'
    })

    render(){
        const { userName } = this.state
        return (
            <div className='header'>
                <Row>
                    <Col span={24}>
                        <span> 欢迎，{userName}</span>
                        {/* <a href="#">退出</a> */}
                    </Col>
                </Row>
                <Row></Row>
            </div>
        )
    }
}