<template>
  <div class="home">
    <div class="wrap">
      <el-progress type="dashboard" :percentage="10" color="#f56c6c"></el-progress>
      <el-button type="success" plain>CPU使用率</el-button>
    </div>
    <div class="wrap a01">
      <el-progress type="dashboard" :percentage="35" color="#f56c6c"></el-progress>
      <el-button type="success" plain>内存使用率</el-button>
    </div>
    <div class="wrap a02">
      <el-progress type="dashboard" :percentage="85" color="#909399"></el-progress>
      <el-button type="success" plain>虚拟机使用率</el-button>
    </div>
    <div class="wrap a03">
      <el-progress type="dashboard" :percentage="20" color="#f56c6c"></el-progress>
      <el-button type="success" plain>硬盘使用率</el-button>
    </div>

    <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
    <div id="mycode"></div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          xAxis: { type: 'category' },
          yAxis: { gridIndex: 0 },
          grid: { top: '55%' },
          series: [
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            { type: 'line', smooth: true, seriesLayoutBy: 'row' },
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        });
        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });

        myChart.setOption(myChart.setOption);
      },
    }
  }



</script>
<style>
  .el-main {
    background: #f3f3f3;
  }

  .home {
    height: 100%;
    width: 100%;
    position: relative;
    background: white;
    box-sizing: border-box;
  }

  .wrap {
    position: absolute;
    margin-left: 15%;
    margin-top: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #67c23a;
  }

  .home .a01 {
    margin-left: 35%;
    background: #e6a23c;
  }

  .home .a02 {
    margin-left: 55%;
    background: #f56c6c;
  }

  .home .a03 {
    margin-left: 75%;
    background: #909399;
  }

  #myChart {
    top: 300px;
    height: 500px;
  }
</style>