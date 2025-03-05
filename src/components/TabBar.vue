// src/components/TabBar.vue
<template>
  <div class="tab-bar">
    <router-link to="/" class="tab-item" active-class="active">
      <div class="tab-icon">
        <i class="icon-home"></i>
      </div>
      <div class="tab-label">首页</div>
    </router-link>
    
    <router-link to="/food-record" class="tab-item" active-class="active">
      <div class="tab-icon">
        <i class="icon-food"></i>
      </div>
      <div class="tab-label">食物记录</div>
    </router-link>
    
    <router-link to="/data-analysis" class="tab-item" active-class="active">
      <div class="tab-icon">
        <i class="icon-chart"></i>
      </div>
      <div class="tab-label">数据分析</div>
    </router-link>
    
    <router-link to="/exercise-plan" class="tab-item" active-class="active">
      <div class="tab-icon">
        <i class="icon-exercise"></i>
      </div>
      <div class="tab-label">运动计划</div>
    </router-link>
    
    <router-link to="/profile" class="tab-item" active-class="active">
      <div class="tab-icon">
        <i class="icon-user"></i>
      </div>
      <div class="tab-label">个人中心</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #888;
  font-size: 12px;
  padding: 5px 0;
}

.tab-icon {
  font-size: 22px;
  margin-bottom: 2px;
}

.tab-item.active {
  color: #42b983; /* Vue 绿色 */
}

/* 可以使用实际的图标库如 Font Awesome 或者自定义图标 */
.icon-home:before { content: "🏠"; }
.icon-food:before { content: "🍲"; }
.icon-chart:before { content: "📊"; }
.icon-exercise:before { content: "🏃"; }
.icon-user:before { content: "👤"; }
</style>