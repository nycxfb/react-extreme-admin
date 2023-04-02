import React from 'react';
import { useMount, useUnmount } from 'ahooks';
import * as echarts from 'echarts';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#a472e2'
        }
      }
    }
  ]
};
const ColumnChart = () => {
  useMount(() => {
    initEcharts();
  });

  useUnmount(() => {
    window.removeEventListener('resize', initEcharts);
  });

  const initEcharts = () => {
    const columnChart = echarts.init(document.getElementById('columnChart') as HTMLDivElement);
    columnChart.setOption(option);
    window.onresize = () => {
      columnChart.resize();
    };
  };
  return <div id={'columnChart'} style={{ width: '800px', height: '350px' }} />;
};

export default ColumnChart;
