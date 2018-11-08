import React from 'react';
import './tabel.css';
import { Table, Tag } from 'antd';

import AntdCarousel from './children/children.jsx';

const { Column } = Table;


class TableData extends React.Component{
  
    static defaultProps = {
        data : [{
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }]
    }

    state = {
        text : ''
    }
    change = event=>{
        this.setState({text: event.target.value});
        //调用子组件的方法
        this.refs.children.changeChildren1(event.target.value);
    }

    render(){
        return (
            <div>
                <Table dataSource={this.props.data}>

                    <Column
                        title="First Name"
                        dataIndex="firstName"
                        key="firstName"
                    />

                    <Column
                        title="Last Name"
                        dataIndex="lastName"
                        key="lastName"
                    />


                    <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                    />

                    <Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                    />

                    <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <span>
                        {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                        </span>
                    )}
                    />

                </Table>
                <hr/>
                <p><label>父组件</label><input type="text" onChange={this.change}/></p>
                <hr/>

                <AntdCarousel ref="children" text={this.state.text}></AntdCarousel>
            </div>
    ) 
}

}

export default TableData;
