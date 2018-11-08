import React from 'react';
import './page.css';

import { Pagination } from 'antd';



class Page extends React.Component{
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
        lis : [<li key="Javascript">Javascript</li>, <li key="Vue">Vue</li>, <li key="React">React</li>],
        students: [
            {id: 1, name: 'Tom', age: 18, gender: 1}, 
            {id: 2, name: 'Sam', age: 22, gender: 1}, 
            {id: 3, name: 'Lucy', age: 20, gender: 0}
        ],
    }
    showTotal = total=> {
        return `Total ${total} items`;
    }
  
    render(){
        return (
            <div>
                <Pagination size="small" total={50} />
                <Pagination size="small" total={50}  />
                <Pagination size="small" total={50} showTotal={this.showTotal} showSizeChanger showQuickJumper />
            </div>
        ) 
    }
}



export default Page;





