<template>
    <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <a href="###">登录</a>
                            <a href="###" class="register">免费注册</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link to="/" >
                        <img src="./images/logo.png" alt="">
                    </router-link>
                </h1> 
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input  v-model="keyword" type="text" id="autocomplete" class="input-error input-xxlarge" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="search">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
          keyword:''
      }
  },
   methods:{
      search(){
        //   this.$router.push(`/search/${this.keyword}`) 
        
        // this.$router.push({
        //      name:'search',
        //     params:{
        //         keyword:this.keyword
        //     },
        //     query:{
        //         keyword2:this.keyword.toUpperCase()
        //     }
// //             - 描述一下你的项目
// // - 说说你对API/API文档/测接口的理解
// // - 区别路由相关的2个对象:  $route 和 $router?
// // - 路由跳转/导航的2种方式?
// // - 路由跳转时携带的参数的2种类型?
// // - 如何向路由组件传入props数据?
// // - 路由跳转时location的2种类型?
// // - 如何实现params参数可传可不传?
// // - 路由跳转的params配置与path配置能不能一起使用? 
// // - 编程式跳转到当前路由且参数数据不变, 就会出警告错误, 什么原因? 如何解决? (重点&难点) location
        // })
        const location  ={
            name:'search',
        }

        if(this.keyword.trim()){
            location.params={
                keyword:this.keyword
            },
            location.query = {
                keyword2:this.keyword
            }
        }       //处理重复跳转路由得错误
        //方法一： 传入成功得回调函数
            // this.$router.push(location, ()=>{})
        //方法二：  catch处理错误得promis
            this.$router.push(location).catch(()=>{})
      }
  }
}
</script>

<style lang="less" scoped>
   .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>
