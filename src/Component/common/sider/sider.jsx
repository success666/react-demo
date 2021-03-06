import React from 'react';
import { Link } from 'react-router-dom';
import './sider.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Side extends React.Component{
    static defaultProps = {
        name: 'Tom',
        age: 20
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
      openKeys: ['sub1','sub2','sub4'],
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            // window.location.href = "/home"
            // this.props.history.push('/home')
            console.log(1234567890)
            this.setState({ openKeys });
        } else {
            this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render(){
        return (
            <div>
                <Menu
                    className="menu"
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}>

                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">
                            <Link to={"/home"}>home</Link>
                            
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={"/page"}>littleMouse</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={"/"}>toPagehome</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={"/littleMouse"}>littleMouse</Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">
                            <Link to={"/tabel"}>toPagehome</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to={"/littleMouse"}>littleMouse</Link>
                        </Menu.Item>

                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">
                                <Link to={"/page"}>page</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to={"/"}>tabel</Link>
                            </Menu.Item>
                        </SubMenu>

                    </SubMenu>


                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">
                            <Link to={"/tabel"}>tabel</Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Link to={"/home"}>tabel</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to={"/page"}>tabel</Link>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Link to={"/"}>tabel</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        ) 
    }
}



export default Side;





