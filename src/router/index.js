// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodRecordView from '../views/FoodRecordView.vue'
import DataAnalysisView from '../views/DataAnalysisView.vue'
import ExercisePlanView from '../views/ExercisePlanView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' }
  },
  {
    path: '/food-record',
    name: 'foodRecord',
    component: FoodRecordView,
    meta: { title: '食物记录' }
  },
  {
    path: '/data-analysis',
    name: 'dataAnalysis',
    component: DataAnalysisView,
    meta: { title: '数据分析' }
  },
  {
    path: '/exercise-plan',
    name: 'exercisePlan',
    component: ExercisePlanView,
    meta: { title: '运动计划' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { title: '个人中心' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router