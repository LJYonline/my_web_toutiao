//import fetch from 'dva/fetch'; 
import axios from 'axios'
    // function parseJSON(response) { 
    //     return response.json(); 
    // } 
    // function checkStatus(response) { 
    //     if (response.status >= 200 && response.status < 300) {
    //         return response;
    //     } 
    //     const error = new Error(response.statusText); 
    //     error.response = response; throw error; 
    // }
      /*** Requests a URL, returning a promise.*
       * * @param {string} url The URL we want to request
       * * @param {object} [options] The options we want to pass to "fetch"
       * * @return {object} An object containing either "data" or "err"*/
    // export default function request(url, options) { 
    //     console.log("请求数据")
    //     return fetch(url, options)
    //     .then(checkStatus)
    //     .then(parseJSON)
    //     .then(data => ({ 
            
    //         data 
    //     }))
    //     .catch(err => ({ 
            
    //         err })); 
    // } 

    export default function request(url){
     
        let response; 
    axios.get(url)
     .then(function (res) {

        //dispatch({type:'app/updateState',payload:{service:res.data}})
         
        console.log("==", res.data[0].title)
        
      })
      .catch(function (error) {
        console.log(error)
      })

      return response
    }