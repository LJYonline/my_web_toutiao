import React ,{ Component } from 'react'
import {  Route } from 'react-router-dom';
import Redirect from 'umi/redirect'



class Index extends Component{

  render() {
    return <Redirect to='/DashBoard'/>
  }
}
export default Index