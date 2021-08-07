 
const  option = {
  animation: false,
  backgroundColor:'rgba(255, 255, 255, 0)',
  legend: {
    data: ['蒸发量', '平均温度'],
    show:false,
  },
  grid :{
    left:0,
    right:0,
    top:10,
    bottom:10
  },

  xAxis: [
    {
      type: 'category',
      data: ['11月', '2月', '3月', '4月'],
      show:false
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '水量',
      show:false
    },
    {
      type: 'value',
      name: '温度',
      show:false
    }
  ],
  series: [
    {
      name: '蒸发量',
      type: 'bar',
      itemStyle: {
        color: '#FFF8EC'
      },
      data: [130.0, 80.9, 370.0, 231.2]
    },
    {
      name: '平均温度',
      type: 'line',
      color: '#c23531',
      yAxisIndex: 1,
      //如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：
      //(value: Array|number, params: Object) => number|Array
      //以为不能注入变量，所以要先计算好
      symbolSize:13,
      lineStyle:{
        color:'#FE9D79',
        width:5,
        shadowColor: 'rgba(255,199,104,.5)',
        shadowBlur: 15,
        shadowOffsetX:6,
        shadowOffsetY:10
      },
      smooth:true,
      itemStyle:{
        color: '#FF9693',
        borderColor:'#FF9693',
        borderWidth:10,
        borderType:'solid'
      },
      data: [7.0, 2.2, 13.3, 4.5]
    }
  ]
};

option.xAxis.data = [0,0,0,0]
option.series[0].data = [0,0,0,0]
option.series[1].data = [0,0,0,0]

let time = Date.now()
console.log("--->")

var echartsNode = require('./echarts_node');
var fs = require("fs")
//配置项，canvas的尺寸等
var config = {
    width: 150*3,
    height: 90*3
};
var myChart = echartsNode.init(config);
myChart.setOption(option);

var src = myChart.getDataURL({
  pixelRatio: 2,
});
var base64Data = src.replace(/^data:image\/\w+;base64,/, "");
var dataBuffer = new Buffer(base64Data, 'base64');
fs.writeFile("./image.png", dataBuffer, function(err) {
  if(err){
    //console.log(err);
  }else{
    console.log("保存成功！");
  }
});

console.log("--->",Date.now() -time)