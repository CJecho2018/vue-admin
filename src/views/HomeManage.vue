<template>
  <div class="home-manage">
    <side-bar />
    <my-header />
    <div class="container">
      <div class="echarts">
        <canvas id="renderChart">
        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from "chart.js"
  import { Bar } from "vue-chartjs"
  import myHeader from "../components/Header"
  import sideBar from "../components/SideBar"
  export default{
    components:{
      myHeader,
      sideBar
    },
    extends: Bar,
    mounted () {
      var ctx2 = document.getElementById("renderChart")
      var renderChart = new Chart(ctx2,{
        type:"doughnut",
        data:{
          labels:["T桖","短裤","休闲裤","牛仔裤","卫衣","毛衣"],
          datasets:[
            {
              label:"上一季数据表",
              backgroundColor:["#E11C01","#35B982","#E8674E","#00D8FF","#C15DDB","#eee"],
              data:[40,20,30,15,90,40]
            }
          ]
        },
        extends:{
          Bar
        }
      })
    }
  }
</script>
<style scoped>
  .home-manage{
    position: relative;
  }
  .container{
    width:calc(100% - 200px);
    position:absolute;
    top:80px;
    left:200px;
  }
  .echarts{
    position:relative;
    width:850px;
    height:400px;
    margin:0 auto;
  }
</style>
