/* 
    包含应用的所有接口的接口请求函数
    函数内部调用ajax函数发送请求
    函数返回的是promis对象
*/
import  ajax from "./ajax";


// 首级三级分类 
//api/product/getBaseCategoryList
export function getCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
    })
}

