import React from 'react';
import { Breadcrumb } from 'antd';
import './littleMouse.css'

class LittleMouse extends React.Component{
   
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