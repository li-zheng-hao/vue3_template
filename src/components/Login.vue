<template>
  <div>login page</div>
  <div>{{profileStore.double}}</div>
  <div>{{msg}}
    <h1>test</h1>
  </div>
  <el-button>Default</el-button>

</template>

<script setup lang="ts">
import { useCounterStore } from '../store/storeA'
const profileStore = useCounterStore() // 获取到store的实例yarn
withDefaults(defineProps<{ msg: string }>(), { msg: 'default value' })

</script>

<style scoped lang="less">
div{
  color: red;
  h1{
    color: blue;
  }
}
</style>
