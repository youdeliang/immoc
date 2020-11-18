import { Card, Button, Radio } from 'antd'
import { SearchOutlined, EditOutlined, PlusOutlined, DeleteOutlined, ArrowDownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import '../ui.less'

export default class Buttons extends Component {
  state = {
    btnLoad: true,
    size: 'small',
  }
  handlelCloseLoad = () => {
    this.setState({
      btnLoad: false
    })
  }
  handlelStartLoad = () => {
    this.setState({
      btnLoad: true
    })
  }

  handleChage = e => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    const { btnLoad, size } = this.state
    return (
      <div className='buttons'>
        <Card title="基础按钮" className='card' >
          <Button type='primary'>imooc</Button>
          <Button type='dashed'>imooc</Button>
          <Button type='text'>imooc</Button>
          <Button danger disabled>imooc</Button>
          <Button disabled>imooc</Button>
        </Card>
        <Card title='图形按钮' className='card'>
          <Button icon={<PlusOutlined />}>创建</Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Button shape="circle" icon={<SearchOutlined />}></Button>
          <Button type='primary' icon={<SearchOutlined />}>搜索</Button>
          <Button type='primary' icon={<ArrowDownOutlined />}>下载</Button>
        </Card>
        <Card title='loading按钮' className='card'>
          <Button type='primary' loading={btnLoad} onClick={this.handlelStartLoad}>loading</Button>
          <Button shape='circle' loading={btnLoad}></Button>
          <Button shape='round' loading={btnLoad}></Button>
          <Button type='primary' onClick={this.handlelCloseLoad}>close</Button>
        </Card>
        <Card title='按钮组'>
          <Button.Group>
            <Button
              type='primary'
              icon={<LeftOutlined />}>返回</Button>
            <Button
              type='primary'
              icon={<RightOutlined />}>前进</Button>
          </Button.Group>
        </Card>
        <Card
          title='按钮尺寸'
          className='card-top'
        >
          <Radio.Group onChange={this.handleChage} value={size}>
            <Radio value='small' >小</Radio>
            <Radio value='default' >中</Radio>
            <Radio value='large' >大</Radio>
          </Radio.Group>
          <Button type='primary' size={size}>imooc</Button>
          <Button type='dashed' size={size}>imooc</Button>
          <Button type='text' size={size}>imooc</Button>
        </Card>
      </div>
    )
  }
}