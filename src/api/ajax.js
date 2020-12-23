//   axios二次封装
//   1.配置通用得基础路径和超时
//   2.显示请求进度条
//   3.成功返回的数据不再是response，而直接是响应体数据response.data
//   4.统一请求错误，具体要求可以处理也可以不处理
import axios from  'axios'
import   NProgress from 'nprogress'
import 'nprogress/nprogress.css'



// 1，配置通用的基础路径和超时
// service是一个能发任意ajax请求的函数 ，当然可以作为对象使用
const  service =  axios.create({
    // baseURL:'http://39.99.186.36/api', //基础路径
    baseURL:'/api',
    timeout:20000, //超时时间
})

//添加请求拦截器
service.interceptors.request.use((config)=>{
    //2.显示请求进度条
    // 显示请求进度条：在请求拦截器中
    NProgress.start()

    // 必须返回config
    return config  // 后面就会根据返回的config ，使用xhr对象发送ajax请求

})

//添加响应拦截器
service.interceptors.response.use(
    
   response =>{  //请求成功返回的回调
    // 隐藏请求进度条:在响应拦截器的回调中
    NProgress.done()

    // 3.返回的数据不再是respons ，而直接是响应体数据response.data 
    return response.data
   },
   error =>{ //请求失败返回的回调

    //隐藏请求进度条 ：在响应拦截器失败的回调中
    NProgress.done()   


    4// 统一处理请求错误 ，具体情况也可以选择处理或者不处理

    alert(error.message  || '未知的请求错')

    return Promise.reject(error)
   }
)


//向外暴露  service
export default service 




