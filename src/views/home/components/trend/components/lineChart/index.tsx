import React from 'react';
import { useMount, useUnmount } from 'ahooks';
import * as echarts from 'echarts';

const option = {
  color: '#a472e2',
  xAxis: {
    type: 'category',
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    show: false,
    top: '15%',
    right: '5%',
    bottom: '10%',
    left: '5%'
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(32, 33, 36,.7)',
    borderColor: 'rgba(32, 33, 36,0.20)',
    borderWidth: 1,
    textStyle: {
      color: '#fff',
      fontSize: '12'
    },
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },

  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
};
const LineChart = () => {
  useMount(() => {
    initEcharts();
  });

  useUnmount(() => {
    window.removeEventListener('resize', initEcharts);
  });

  const initEcharts = () => {
    const lineChart = echarts.init(document.getElementById('lineChart') as HTMLDivElement);
    lineChart.setOption(option);
    window.onresize = () => {
      lineChart.resize();
    };
  };
  return <div id={'lineChart'} style={{ width: '100%', height: '316px' }} />;
};

export default LineChart;
