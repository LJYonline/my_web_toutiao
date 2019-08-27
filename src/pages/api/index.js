
// 引入 axios
import axios from 'axios'
// 做formData格式转换用的，当然您也可以使用encode自己处理
//import Qs from 'qs' 

axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8"
axios.defaults.baseURL = "" 

axios.interceptors.request.use(config => {
    // do something...
    console.log('请求')
    return config // return是必须的
},error =>{ // 出错的时候
    //do something
    console.log('请求失败')
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    // do something...
    console.log('响应')
    return response.data // return 是必须的
},error =>{ // 出错的时候
    //do something
    console.log('响应失败')
    return Promise.reject(error);}
)

// 定义一个方法并使用ES6 MODULE抛出
export  const getData = (params) => axios.get('/api',params)
