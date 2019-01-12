import {Layout, Menu, Breadcrumb, Icon, Avatar} from 'antd';
import React, {Component} from 'react';

const {Header, Footer, Content, Sider} = Layout;

const {SubMenu} = Menu;
 import PropTypes from 'prop-types';
 
import {  createStore } from 'redux';
export default class Login extends Component {

  render () {
    return (
      <div>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">图书查询</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">图书借阅</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">图书归还</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">图书购买</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{marginLeft: 200}}>
            <Header style={{background: '#fff', padding: 0}}>
              <div style={{position:"absolute",right:150}}>
              
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <h3>{}</h3>
              </div>
            </Header>
            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
              <div
                style={{padding: 24, background: '#fff', textAlign: 'center'}}
              >
                ...
                <br />
                Really
                <br />...<br />...<br />...<br />
                long
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />
                content
              </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>,
      </div>
    );
  }
}
