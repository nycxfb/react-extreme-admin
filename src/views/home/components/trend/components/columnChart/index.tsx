import React, { forwardRef } from 'react';
import { useMount, useUnmount } from 'ahooks';
import * as echarts from 'echarts';

const option = {
  xAxis: {
    type: 'category',
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    show: false,
    top: '15%', // 一下数值可为百分比也可为具体像素值
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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: '40%',
      itemStyle: {
        normal: {
          color: '#a472e2',
          barBorderRadius: [20, 20, 0, 0]
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
  return <div id={'columnChart'} style={{ width: '100%', height: '316px' }} />;
};

export default ColumnChart;
