<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
import { onMounted } from 'vue'

// 定义 props 接收数据
const props = defineProps<{
  list: CategoryItem[]
}>()

onMounted(() => {
  console.log(props.list)
})
</script>

<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
@import '../styles/category.scss';
</style>
