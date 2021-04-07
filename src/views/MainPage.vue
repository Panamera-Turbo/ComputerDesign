<template>
    <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>

<style scoped>
    .el-header, .el-footer {
    background-color: rgba(134, 152, 163, 0.9);
    color: rgba(51, 51, 51, 0.8);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: rgba(51, 51, 51, 0.3);
    color: #333;
    text-align: center;
    line-height: 600px;
  }

  .el-main {
    background-color: rgba(209, 213, 218, 0.7);
    color: #333;
    text-align: center;
    line-height: 600px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>