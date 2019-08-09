<template>
  <div class="add-shop fillcontain">
    <sideBar />
    <my-header :ruleForm="ruleForm"/>
    <div class="add-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
      >
        <el-form-item label="店铺名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="iphone">
          <el-input v-model="ruleForm.iphone"></el-input>
        </el-form-item>

        <el-form-item label="店铺特点">
            <span class="feature">品牌保证</span>
          <el-switch v-model="ruleForm.assurance" ></el-switch>
            <span class="feature">新开小铺</span>
          <el-switch v-model="ruleForm.new"></el-switch>
            <span class="feature">开发票</span>
          <el-switch v-model="ruleForm.bill"></el-switch>
        </el-form-item>

        <el-form-item label="营业时间">
          <el-time-select
            placeholder="起始时间"
            class="input-time"
            v-model="ruleForm.startTime"
            :picker-options="{
              start: '06:30',
              step: '00:15',
              end: '20:30'
            }">
          </el-time-select>
          <el-time-select
            placeholder="结束时间"
            class="input-time"
            v-model="ruleForm.endTime"
            :picker-options="{
              start: '06:30',
              step: '00:15',
              end: '23:30',
              minTime: ruleForm.startTime
            }">
          </el-time-select>
        </el-form-item>

        <el-form-item label="店铺分类">
          <div class="block food-type">
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
           ></el-cascader>
          </div>
        </el-form-item>
      
        <el-form-item label="店铺简介">
          <el-input v-model="ruleForm.describle"></el-input>
        </el-form-item>

        <!-- 过拽上传文件 -->
        <el-upload 
          class="upload-demo upload-image"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或<em>点击上传</em>
          </div>
          <div class="el-upload__tip upload-tip" slot="tip">
            <b>Tips : </b> 只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>

        <el-form-item class="form-submit">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>  
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import myHeader from "../components/Header"
import sideBar from "../components/SideBar"
export default {
  components:{
    myHeader,
    sideBar
  },
   data() {
      return {
        ruleForm: {
          //店铺特点：assurance是质量保证，new是新开小铺，bill是开发票
          name: '',
          address: '',
          iphone: '',
          assurance:true,
          new:true,
          bill:true,
          startTime: '',
          endTime: '',
          describle: '',
        },
        options:[],
        value:[],
        // selectedCategor:["快餐便当","简餐"],
        rules: {
          name: [
            { required: true, message: '请输入店铺名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入店铺地址', trigger: 'blur' }
          ],
          iphone: [
            { required: true, message: '请输入店铺联系方式', trigger: 'blur' },
            { value: Number, min:8, max:11, message: '最少8位，最多11位',trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      getFood(){
        this.axios.get("/foodType.json")
        .then(this.handleFood)
      },
      handleFood(res){
        this.options = res.data.food
        console.log(this.options)
      },
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          console.log(formName)
          if (valid) {
              Object.assign(this.ruleForm,{ruleOptions:this.ruleOptions},{
                category:this.selectedCategor.join("/")
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(val,opt){
        console.log(val)
        // return val.map(function(value,index,array){
        //   for(var itm of opt){
        //     if(itm.value === value){
        //       opt = itm.children
        //       return itm
        //     }
        //   }
        //   return null
        // })
      }
    },

    mounted(){
      this.getFood()
    }
}
</script>

<style scoped>
  .add-form{
    position:absolute;
    left:200px;top:60px;
    width:calc(100% - 200px);
    padding:25px 0;
  }
  .el-form.demo-ruleForm{
    width: 600px;
    margin:0 auto;
    box-sizing:border-box;
    padding:10px 20px 15px 20px;
    border:1px solid #eee;
  }
  .feature{
    display:inline-block;
    margin:0 10px;
  }
  /* 第一个span做外边距为0 */
  .feature:first-child{
    margin:0 10px 0 0;
  }
  .input-time{
    width:180px;
    display: inline-block;
    margin-right:10px;
  }
  .food-type{
    margin-bottom:10px;
  }
  .upload-image{
    width:360px;
    margin:0 auto;
  }
  .upload-tip{
    margin:12px;
  }
  .form-submit{
    margin:0;
    text-align:center;
  }
</style>