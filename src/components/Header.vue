<template>
  <div class="my-header ">
    <div class="list">
      <router-link to="/manage" >首页 /</router-link>
      <span v-for="(item, index) in $route.meta"
        :key="index" 
        class="list-title"
      >
        {{item}}
      </span>
    </div>
    <div class="user">
      <div class="head-avatar">
        <img src="/images/head-avator.jpg" alt="" width="30" height="30">
      </div>
      <div class="user-name">欢迎 {{ username }} 登录！</div>
    </div>
    
  </div>
</template>

<script>
  export default{
    props:{
      ruleForm:Object
    },
    data(){
      return {
        name:"jingjing",
      }
    },
    computed:{
      username (){
        console.log(this.ruleForm)
        return this.$store.state.username
      }
    }
  }
</script>
<style scoped>
.my-header{
  width:calc(100% - 200px);
  height: 60px;
  display:inline-block;
  vertical-align:top;
  box-sizing:border-box;
  padding:0 40px;
  background:#eee;
  color:#333;
}
.list{
  display:inline-block;
  line-height: 60px;
}
.list a{
  color:#909090;
}
.list a:active{
  color:lightblue;
}
.list-title{
  display:inline-block;
  padding:0 10px;
  box-sizing:border-box;
}
.user{
  width:18%;
  height:100%;
  position: relative;
  float:right;
}
.head-avatar{
  position:absolute;
  top:10px;left:0;bottom:10px;
}
.user-name{
  position:absolute;
  left:50px;
  line-height: 60px;
}
</style>
