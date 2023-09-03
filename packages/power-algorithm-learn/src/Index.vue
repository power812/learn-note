<template>

<el-container>
    <el-aside width="200px" >
        <el-menu
        height="100%"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>基础篇</span>
          </template>
          <el-menu-item-group>
            <router-link to="/">   
              <el-menu-item index="1-1">
                数组
              </el-menu-item>
            </router-link>
         
            <router-link to="/about">   
              <el-menu-item index="1-2">
              Go to About
              </el-menu-item>
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
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

