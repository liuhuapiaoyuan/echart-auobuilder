/**
 * 获得图标的配置图片
 * @param {*} echartConfig 
 * @param {*} dataOptions 
 * @returns 
 */
const getChartImage = (echartConfig,dataOptions)=>{
  let config = echartConfig || {
    width: 150*3,
    height: 90*3
  }
  var myChart = echartsNode.init(config);
  myChart.setOption(option);
  
  var src = myChart.getDataURL({
    pixelRatio: 2,
  });
  var base64Data = src.replace(/^data:image\/\w+;base64,/, "");
  var dataBuffer = new Buffer(base64Data, 'base64');
  return {
    base64:src ,
    buffer:dataBuffer
  }

}

module.exports={getChartImage}