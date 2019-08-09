<template>
  <div class="login-wrap">
    <div class="ms-login">
      <h3 class="ms-title">后台管理系统</h3>

      <el-form 
        :model="ruleForm" 
        :rules="rules" 
        ref="ruleForm" 
        label-width="0px" 
        class="ms-content"
      >
        <el-form-item class="my-input"> 
          <el-input 
            v-model="ruleForm.username"
            placeholder="username"
          >
            <el-button icon="el-icon-user"
              slot="prepend"
              plain disabled
              style="border:0"
            >
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item class="my-input">
          <el-input type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button icon="el-icon-lock"
              slot="prepend"
              plain disabled
              style="border:0"
            >
            </el-button>
          </el-input>
        </el-form-item>
          <div class="login-btn">
            <el-button type="primary"
              class="mySublit"
              @click="submitForm('ruleForm')"
            >
            登录
            </el-button>
          </div>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm:{
        username:"admin",
        password:"123456"
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submitForm(forName){
      this.$refs[forName].validate((value) => {
        if(value){
          localStorage.setItem("ms-login", this.ruleForm.name)
          this.$router.push("/manage")
        } else {
          console.log("submit error")
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-wrap{
    width:100%;
    height:100%;
    position:relative;
    background-image:url("/images/bg.jpg");
    background-size:100% 100%;
    background-repeat:no-repeat;
  }
  .ms-login{
    width:300px;
    height:300px;
    padding:20px;
    box-sizing:border-box;
    position:absolute;
    background:hsla(0,0%,100%,.5);
    top:0;left:0;bottom:0;right:0;
    margin:auto;
    border-radius: 5px;
  }
  .ms-title{
    height:40px;
    line-height: 20px;
    color:#000;
    text-align:center;
  }
  .login-btn .mySublit{
    width:100%;
    height:30px;
    line-height: 0;
  }
</style>
