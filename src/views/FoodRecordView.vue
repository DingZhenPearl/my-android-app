<template>
  <div class="food-record">
    <el-header class="header">
      <h2>食物记录</h2>
    </el-header>
    <el-container>

      <el-main>
        <el-row>
          <el-col :span="24">
            <el-input placeholder="搜索食物数据库" v-model="searchQuery" class="search-input"></el-input>
            <el-button type="primary" @click="search">筛选</el-button>
          </el-col>
        </el-row>
        <el-tabs v-model="activeTab">
          <el-tab-pane label="实时识别" name="real-time">
            <div class="camera-preview">
              实时摄像头预览窗口
            </div>
            <div class="status-info">
              <p>识别状态：待命</p>
              <p>当前容器重量：0克</p>
              <el-button type="primary" @click="startRecognition">识别</el-button>
            </div>
            <div class="result-info">
              <p>识别食物：苹果</p>
              <p>估算卡路里：95大卡</p>
              <el-button type="success" @click="confirmOrModify">确认/修改</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手动添加" name="manual-add">
            手动添加内容
          </el-tab-pane>
          <el-tab-pane label="历史记录" name="history">
            历史记录内容
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      activeTab: 'real-time'
    };
  },
  methods: {
    search() {
      // 搜索逻辑
    },
    startRecognition() {
      // 开始识别逻辑
    },
    confirmOrModify() {
      // 确认或修改逻辑
    }
  }
};
</script>

<style scoped>
.food-record {
  height: 100%;
}

.header {
  background-color: #f8f8f8;
  padding: 10px;
}

.search-input {
  width: 70%;
  margin-right: 10px;
}

.camera-preview {
  background-color: #e6e6e6;
  height: 300px;
  margin-bottom: 10px;
}

.status-info, .result-info {
  text-align: center;
}
</style>