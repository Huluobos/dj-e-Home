import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://02.yaojunrong.com/api',       //http://02.yaojunrong.com
  timeout: 15000
})

export default instance;
