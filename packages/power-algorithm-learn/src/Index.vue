<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        height="100%"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :default-active="router.currentRoute.value.path"
        router
        @open="handleOpen"
        @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>基础篇</span>
          </template>
          <el-menu-item-group>
            <router-link to="/">
              <el-menu-item index="/"> 05-数组 </el-menu-item>
            </router-link>

            <router-link to="/06-singleLinkedListAlgo">
              <el-menu-item index="/06-singleLinkedListAlgo"> 06-单链表 </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script setup>
import { Location } from '@element-plus/icons-vue';
import router from './router';
console.log(router.currentRoute.value.path);
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
</script>
