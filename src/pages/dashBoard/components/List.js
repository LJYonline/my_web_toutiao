import React ,{Component} from 'react'
import './List.css'
class List extends Component{
  handleClick(){
    //调用父组件的方法 将逻辑处理交给父组件
    this.props.handleClick(this.props.index);
  }
  render(){
    return(
      <li className={this.props.currentClass(this.props.index)} onClick={this.handleClick.bind(this)} >{this.props.item}</li>
    )
  }
}

export default List

