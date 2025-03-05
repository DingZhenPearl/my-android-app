<template>
    <div class="home">
      <header>
        <div class="header-content">
          <span>早上好，李明 | 2025年3月4日 星期二</span>
          <img src="https://placehold.co/30x30" alt="用户头像" class="user-avatar">
        </div>
      </header>
  
      <main>
        <!-- 热量摄入圆环图 -->
        <div class="calorie-intake">
          <div id="calorie-chart"></div>
          <p>1200/2000大卡 良好</p>
        </div>
  
        <!-- 饮食比例饼状图 -->
        <div class="diet-ratio">
          <div id="diet-chart"></div>
          <div class="legend">
            <span style="color: #FF6384">蛋白质</span>
            <span style="color: #FFCE56">脂肪</span>
            <span style="color: #36A2EB">碳水化合物</span>
          </div>
        </div>
  
        <!-- 快速记录按钮 -->
        <van-button type="primary" @click="quickRecord">快速记录</van-button>
  
        <!-- 已连接设备信息 -->
        <p class="device-info">已连接设备：智能手环 | 电量：80%</p>
  
        <!-- 今日摄入列表 -->
        <h2>今日摄入</h2>
        <ul class="food-list">
          <li v-for="(item, index) in foodItems" :key="index">
            <img :src="item.image" :alt="item.name" class="food-image">
            <span>{{ item.name }}</span>
            <span>{{ item.quantity }}g{{ item.calories }}大卡</span>
          </li>
        </ul>
  
        <!-- 健康提示 -->
        <h2>健康提示</h2>
        <p class="health-tip">今天的热量摄入较低，可以考虑增加蔬菜摄入量。</p>
  
        <!-- 推荐运动 -->
        <h2>推荐运动</h2>
        <p class="exercise-recommendation">可以考虑散步30分钟，或者慢跑15分钟。</p>
      </main>
    </div>
  </template>
  
  <script>
  import { Button } from 'vant';
  import * as echarts from 'echarts';
  
  export default {
    name: 'HomeView',
    components: {
      [Button.name]: Button,
    },
    data() {
      return {
        foodItems: [
          { image: 'https://placehold.co/40x40', name: '苹果', quantity: 100, calories: 52 },
          { image: 'https://placehold.co/40x40', name: '香蕉', quantity: 150, calories: 89 },
        ],
      };
    },
    mounted() {
      this.initCalorieChart();
      this.initDietChart();
    },
    methods: {
      quickRecord() {
        // 快速记录逻辑
        console.log('快速记录');
      },
      initCalorieChart() {
        const calorieChart = echarts.init(document.getElementById('calorie-chart'));
        const option = {
          series: [
            {
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 2000,
              splitNumber: 10,
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.6, '#58D9F9'],
                    [0.8, '#EE97FB'],
                    [1, '#F4664A']
                  ]
                }
              },
              pointer: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                length: 12,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -60,
                color: '#999',
                fontSize: 15
              },
              title: {
                offsetCenter: ['0%', '-40%'],
                fontSize: 20
              },
              detail: {
                formatter: '{value} 大卡',
                fontSize: 30,
                color: 'auto'
              },
              data: [{ value: 1200 }]
            }
          ]
        };
        calorieChart.setOption(option);
      },
      initDietChart() {
        const dietChart = echarts.init(document.getElementById('diet-chart'));
        const option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: '饮食比例',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 335, name: '蛋白质' },
                { value: 310, name: '脂肪' },
                { value: 234, name: '碳水化合物' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        dietChart.setOption(option);
      }
    }
  };
  </script>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .user-avatar {
    border-radius: 50%;
  }
  
  .calorie-intake {
    text-align: center;
    margin-bottom: 20px;
  }
  
  #calorie-chart {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  
  .diet-ratio {
    text-align: center;
    margin-bottom: 20px;
  }
  
  #diet-chart {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  
  .legend {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  
  .food-list {
    list-style-type: none;
    padding: 0;
  }
  
  .food-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .food-image {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .health-tip, .exercise-recommendation {
    background-color: #e6ffe6;
    padding: 10px;
    margin-bottom: 20px;
  }
  </style>