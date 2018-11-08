import React from 'react';
import './children.css';
import { Carousel } from 'antd';

class AntdCarousel extends React.Component{
    static defaultProps = {
        text: ''
    }
    state = {
        number1:'Carousel',
        number2:'React',
        number3:'components',
        number4:'ant'
    }
    changeChildren1 = text =>{
        // console.log(12345)
        this.setState({text: text});
    }

    render(){
        return (
            <div>
                <Carousel autoplay>
                    <div><h3>{this.state.text}</h3></div>
                    <div><h3>{this.state.number2}</h3></div>
                    <div><h3>{this.state.number3}</h3></div>
                    <div><h3>{this.state.number4}</h3></div>
                </Carousel>
                <p>子组件-来自父组件的调用：{this.state.text}</p>
                <p>子组件-来自父组件的传参：{this.props.text}</p>
            </div>
        )
    }
}
  
export default AntdCarousel;