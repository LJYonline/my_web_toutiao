import React ,{ Component } from 'react'
import Redirect from 'umi/redirect'



class Index extends Component{

  render() {
    return <Redirect to={'/dashboard'} />
  }
}
export default Index
