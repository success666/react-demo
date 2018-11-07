import React from 'react';
import './content.css';
import { Button } from 'antd';


class Mian extends React.Component{
    static defaultProps = {
        name: 'Tom',
       
        lis : [<li key="Javascript">Javascript</li>, <li key="Vue">Vue</li>, <li key="React">React</li>],
        students: [
            {id: 1, name: 'Tom', age: 18, gender: 1}, 
            {id: 2, name: 'Sam', age: 22, gender: 1}, 
            {id: 3, name: 'Lucy', age: 20, gender: 0}
        ]
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props){
        super(props)
        this.state = {
        type:'12345',
        age: 20,
        text: 'Hello React'
        }
    }


    target = (e) =>{
        console.log(e.target.innerHTML)
       
        this.setState({type:e.target.innerText});
        this.setState({age:999});
        console.log(this.state.type);
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
            
    //     }
    // }
    getKeys(item = {}){
        return Object.keys(item)
    }
    change = (e) => {
        this.setState({text: e.target.value})
    }
    render(){
        return (
            <div>
                <input  ref="btn" type="test"/>
                <Button type="primary" onClick={this.target}>Primary</Button>
                <Button>Default</Button>
                
                <Button type="dashed">{this.state.type}</Button>
                <Button type="danger">Danger</Button>
                <p><label>动态value-没锁定状态</label><input type="text" value={this.state.text} onChange={this.change}/></p>
                <h2>{this.state.text}</h2>
                <p>{this.state.age}</p>
                <table>
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.props.students[0]).map((key) => {
                                    return <th key={key}>{key}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((obj) => {
                                return (
                                    <tr key={obj.id}>
                                        {
                                            this.getKeys(obj).map((key, idx) => {
                                                return <td key={key + idx}>{obj[key]}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
               
                
            </div>
        ) 
    }
}



export default Mian;





