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
        console.log('object');
        let city ='北京'
        Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
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
                        <span className="date">{sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}