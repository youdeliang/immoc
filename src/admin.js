import React, { Component } from 'react'
import NavLeft from './components/NavLeft'
import { Row, Col, Button } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'


export default class Admin extends Component{

    state=({
        showDarkTheme: true,
    })

    clickShowTheme = () => {
        this.setState({
            showDarkTheme: !this.state.showDarkTheme
        })
    }

    render() {
        const { showDarkTheme } = this.state
        return (
            <div>
               <Row className="container">
                   <Col span='4' className={`nav-left ${showDarkTheme ? '' :'dark'}`} >
                       <NavLeft showDarkTheme={showDarkTheme} clickShowTheme={this.clickShowTheme}/>
                   </Col>
                   <Col span='20' className='main'>
                       <Header/>
                       <Row className="content">
                            <Button>SDSD</Button>
                        </Row>
                       <Footer/>
                   </Col>
                </Row> 
            </div>
        )
    }
}