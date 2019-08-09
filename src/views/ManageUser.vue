<template>
  <div class="manage-user clearfix">
    <side-bar />
    <my-header />
    <div class="container">
      <div class="table">
        <el-table
          :data="list.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
          stripe
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.$index,scope.row)" type="danger" size="small">删除</el-button>      
            </template>
          </el-table-column>
        </el-table>

        <!-- 弹出删除框 -->
        <el-dialog
          :visible.sync="dialogVisible"
          width="30%"
        >
          <span>确定删除吗？删除不可恢复</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteRow">确 定</el-button>
          </span>
        </el-dialog>
      </div>

      <!-- 分页查询 -->
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="list.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from "../components/Header"
  import sideBar from "../components/SideBar"
  export default{
    //初始页currentPage,每页数据pagesize,数据list
    data() {
      return {
        list:[],
        tableData:[],
        currentPage: 1,
        pageSize:5,
        select_cate:'',
        select_word:'',
        del_list:[],
        is_search:false,
        editVisible:false,
        dialogVisible:false, //弹出框
        form: {
          date:'',
          name: '',
          email:'',
          address:'',
          value:''
        },
        idx:-1,
      }
    },
    components:{
      myHeader,
      sideBar
    },
   computed:{
     data() {
     }
   },
    methods:{
      getData() {
        this.axios.get("/data.json")
        .then(this.handleGetData)
        .catch(err => console.log(err))
      },
      handleGetData(res) {
        const data = res.data
        this.list = data.list
        this.tableData = res.data.list
      },
      // 分页查询
      handleCurrentChange(val) {
        this.currentPage = val
      },
      handleDelete(index,row){
        this.idx = index
        this.dialogVisible = true
      },
      //确认删除
      deleteRow(){
        this.tableData.splice(this.idx,1)
        this.dialogVisible = false
      }
    },
    mounted(){
      this.getData()
    }
  }
</script>
<style scoped>
  .manage-user{
    position: relative;
  }
  .container{
    width:calc(100% - 200px);
    position:absolute;
    top:80px;
    left:200px;
  }
  .table{
    width:100%;
    padding:20px 30px 0 30px;
    box-sizing: border-box;
    display:inline-block;
    margin:0 auto;
  }
  /* 分页查询 */
  .block{
    display:inline-block;
    float: right;
    margin:20px 0;
  }
</style>