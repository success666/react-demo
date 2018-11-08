import React from 'react';
import { Breadcrumb } from 'antd';
import './littleMouse.css'

class LittleMouse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        type:'12345',
        age: 20,
        text: 'Hello React'
        }
    }
    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item>Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        ) 
    }
}



export default LittleMouse;