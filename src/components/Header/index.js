import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Axios from '../../axios'
import {timeFormat} from '../../utils/utils'

export default class Header extends Component{

    state=({
        userName:'ccaa',
        sysTime: timeFormat('YYYY-MM-DD hh:mm'),
    })

    componentDidMount(){
        console.log(timeFormat('YYYY-MM-DD hh:mm'));
        setInterval(()=>{
            this.setState({sysTime: timeFormat('YYYY-MM-DD hh:mm')})
        },60000)
        this.getWeatherApi()
    }

    getWeatherApi(){
        Axios.jsonp({
            url:'http://api.map.baidu.com/weather/v1/?district_id=310112&data_type=all&ak=U1wc3z3p8sptnlIBEaHtZe3OWxdoFQqM'
        }).then((res)=>{
            console.log(res)
        })


    }

    render(){
        const { userName, sysTime } = this.state
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span> 欢迎，{userName}</span>
                        {/* <a href="#">退出</a> */}
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{sysTime}</span>
                        <span className='weather-detail'>晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}