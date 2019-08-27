import axios from 'axios';
export function queryNews(){
    return axios.get('/data.json')
}

