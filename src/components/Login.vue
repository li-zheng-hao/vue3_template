<template>
  <div>login page</div>
  <div>{{profileStore.double}}</div>
  <div>{{msg}}
    <h1>test</h1>
  </div>
  <el-button @click="clicked">Default222</el-button>
  <img src="@/assets/happy.png"/>
  <div class="test"/>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useCounterStore } from '../store/storeA'
const profileStore = useCounterStore() // 获取到store的实例yarn
withDefaults(defineProps<{ msg: string }>(), { msg: 'default value' })
const clicked = ():void => {
  ElMessage.info('clicked')
}
// eslint-disable-next-line no-unused-vars
const imgUrl = new URL('@/assets/happy.png', import.meta.url).href
</script>

<style scoped lang="less">
div{
  color: red;
  h1{
    color: blue;
  }
}
.test{
  background: url("@/assets/happy.png") no-repeat center;
  width : 200px;
  height : 200px;
}
</style>
