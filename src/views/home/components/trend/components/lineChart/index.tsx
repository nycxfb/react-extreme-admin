import React from 'react';
import { useMount, useUnmount } from 'ahooks';
import * as echarts from 'echarts';

const option = {
  color: '#a472e2',
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
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
  return <div id={'lineChart'} style={{ width: '800px', height: '350px' }} />;
};

export default LineChart;
