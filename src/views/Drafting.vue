<template>
  <div class="drafting fillcontain" >
    <sideBar />
    <my-header />
    <div class="container">
      
      <section>
        <draggable class="list-group list1" :list="data" group="people" @end="end(data)">
             <li
            class="list-group-item"
            v-for="(element, index) in data"
            :key="element.name"
          >
          <i class="el-icon-edit"></i>
            {{ element.name }} {{ index }}
          </li>
        </draggable>

        <draggable class="list-group list2" :list="data2" group="people">
          <li
            class="list-group-item "
            v-for="(element, index) in data2"
            :key="element.name"
          >
            <i class="el-icon-edit"></i>
            {{ element.name }} {{ index }}
          </li>
        </draggable>
      </section>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import myHeader from "../components/Header"
import sideBar from "../components/SideBar"
export default {
  data(){
    return {
      data:[],
      data2:[]
    }
  },
  methods:{
    getmyArray(){
      this.axios.get("/drafting.json")
      .then(this.handleGetData)
    },
    handleGetData(res) {
      this.data = res.data.myArray
    },
    addPeople(e){
      console.log(e)
    },
    end(data){
      if(data){
        localStorage.setItem('myArray', this.data[0])
        console.log(this.data[0].name)
      }
    }
  },
  mounted(){
    this.getmyArray()
  },
  components:{
    draggable,
    myHeader,
    sideBar
  }
}
</script>

<style scoped>
  .container{
    width:calc(100% - 200px);
    position:absolute;
    top:80px;
    left:200px;
  }
  section{
    position:relative;
    width: calc(100% - 200px);
    height:300px;
    padding:10px 20px;
    box-sizing:border-box;
    font-size:12px;
    float:right;
  }
  .list1,.list2{
    width:200px;
    height:300px;
    list-style:none;
    padding:0 10px;
    border:1px solid #e0e0e0;
    display: inline-block;
  }
  .list1 li,.list2 li{
    height:30px;
    line-height:30px;
    border-bottom:1px solid #eee;
  }
  .list2{
    position:absolute;
    right:250px;
    top:10px;


  }
</style>