<template>
  <div class="data-analysis">
    <!-- 头部 -->
    <el-page-header @back="$router.back()" content="数据分析" />

    <!-- 数据图表 -->
    <div ref="chartContainer" style="height: 300px;"></div>

    <!-- 数据概览 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="grid-content green">
          <p>平均卡路里摄入</p>
          <p>2200kcal</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content purple">
          <p>最高/最低摄入日</p>
          <p>2700kcal / 1900kcal</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content yellow">
          <p>目标达成率</p>
          <p>80%</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content pink">
          <p>体重变化</p>
          <p>-1kg 本周</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 详细数据表格 -->
    <h3>详细数据表格</h3>
    <el-button type="primary" @click="generateReport">生成报告</el-button>

    <!-- 数据洞察 -->
    <el-card class="data-insight">
      <h3>数据洞察</h3>
      <p>本周饮食较为均衡，继续保持。</p>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'DataAnalysisView',
  setup() {
    const chartContainer = ref(null);

    // 初始化图表
    const initChart = () => {
      const chart = echarts.init(chartContainer.value);
      const option = {
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [2200, 2300, 2100, 2400, 2000, 2500, 1800],
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#66b1ff'
            }
          },
          {
            data: [2000, 2000, 2000, 2000, 2000, 2000, 2000],
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#ccc'
            }
          }
        ]
      };
      chart.setOption(option);
    };

    onMounted(() => {
      initChart();
    });

    const generateReport = () => {
      console.log('生成报告');
    };

    return {
      chartContainer,
      generateReport
    };
  }
});
</script>

<style scoped>
.data-analysis {
  padding: 10px;
}

.grid-content {
  text-align: center;
  padding: 10px;
  border-radius: 5px;
}

.green {
  background-color: #e6ffe6;
}

.purple {
  background-color: #f0e6ff;
}

.yellow {
  background-color: #fffbe6;
}

.pink {
  background-color: #ffe6e6;
}

.data-insight {
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>