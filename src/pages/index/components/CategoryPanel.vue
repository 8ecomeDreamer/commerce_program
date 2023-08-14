<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

// 定义 props 接收数据
const props = defineProps<{
  list: CategoryItem[]
}>()

// category页面activeIndex赋值
const clickNavigator = (index: number) => {
  getApp().globalData!.categoryActiveIndex = index > 8 ? 8 : index
}
</script>

<template>
  <view class="category">
    <navigator
      v-for="(item, index) in list"
      :key="item.id"
      class="category-item"
      hover-class="none"
      :url="`/pages/category/category`"
      open-type="switchTab"
      @click="clickNavigator(index)"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
@import '../styles/category.scss';
</style>
