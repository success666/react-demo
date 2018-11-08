import React from 'react';
import { Breadcrumb } from 'antd';
import './header.css'

class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        type:'12345',
        age: 20,
        text: 'Hello React'
        }
    }
    static defaultProps = {
        name: 'Tom',
        age: 20
    }
    render(){
        return (
            <div className="head">
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



export default Head;