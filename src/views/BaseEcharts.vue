<template>
  <div id="base-echarts" class="fillcontain">
    <side-bar />
    <my-header />
    <div class="container">
      <div class="echarts">
        <canvas width="500px" height="300px" id="renderChart" >
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
        type:"line",
        data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                        label: "test1",
                        backgroundColor: "rgba(225,10,10,0.3)",
                        borderColor: "rgba(225,103,110,1)",
                        borderWidth: 1,
                        pointStrokeColor: "#fff",
                        pointStyle: "crossRot",
                        data: [65, 59, 0, 81, 56, 10, 40, 22, 32, 54, 10, 30],
                        cubicInterpolationMode: "monotone",
                        spanGaps: "false",
                        fill: "false"
                    }
                ]
            },
            options: {
                
            }
      })
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
  .echarts{
    width:600px;
    height:300px;
    margin:0 auto;
  }
</style>
