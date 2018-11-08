import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './Component/common/history';
import './App.css';


import Head from './Component/common/header/header.jsx';
import Side from './Component/common/sider/sider.jsx';


import Mian from './Component/common/content/content.jsx';
import LittleMouse from './Component/module/littleMouse/littleMouse.jsx'
import Page from './Component/common/page/page.jsx';
import TableData from './Component/module/tabel/tabel.jsx'


import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;



class App extends Component {
  render() {
    return (
        <div className="App">
            <Router history={history}>
                <Layout className="layout">
                
                    <Sider className="sider">
                        <Side></Side>
                    </Sider>

                    <Layout>

                        <Header className="header">
                            <Head></Head>
                        </Header>

                        <Content className="content">
                                <Switch>
                                    <Route path="/home" component={Mian}/>
                                    <Route path="/littleMouse" component={LittleMouse}/>
                                    <Route path="/page" component={Page}/>
                                    <Route path="/tabel" component={TableData}/>
                                </Switch>
                        </Content>

                    </Layout>
                </Layout>
            </Router>
        </div>
    );
  }
}

export default App;
