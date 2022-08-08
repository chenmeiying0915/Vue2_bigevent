<template>
<div>App 根组件
<el-button>123</el-button>
</div>
</template>

<script>
// 命名导入需要使用大括号
import { registerAPI } from '@/api'
export default {
  async created () {
    const res = await registerAPI()
    console.log(res)
  }

}
</script>

<style scoped>

</style>
