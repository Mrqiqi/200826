import  Home from '@/pages/Home'
import  Login from '@/pages/Login'
import  Register from '@/pages/Register'
import  Search from '@/pages/Search'




//所有静态 路由配置得数组

export default [
    {   
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        name:'search',
        path:'/search/:keyword',
        component:Search,
        //props:true  只映射params参数  


        props: (route) =>{}
    },
    {   neme:'register',
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
]
