


## 用于将echart渲染成图片并导出

## 依赖于 node-canvas 需要按照官方文档安装好

### Example:

```javascript
import {getChartImage} from "@suntree/echart-autobuilder"
const config = {
  width:100,
  height:100
}
const options = {
  //  xAxis,series,yAxis等
}
getChartImage(config,options)
```