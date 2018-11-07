import React, { Component } from 'react';
import './App.scss';
import Head from './Component/common/header/header.jsx';
import Side from './Component/common/sider/sider.jsx';
import Mian from './Component/common/content/content.jsx';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;



class App extends Component {
  render() {
    return (
        <div className="App">
            <Layout className="layout">
                <Sider className="sider">
                    <Side></Side>
                </Sider>
                <Layout>
                    <Header className="header">
                        <Head></Head>
                    </Header>
                    <Content className="content">
                        <Mian></Mian>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
  }
}

export default App;
