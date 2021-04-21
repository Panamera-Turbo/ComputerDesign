<template>
    <el-row id="header"></el-row>
    <el-row :gutter="300" height="60px" type="flex" justify="center">
        <el-col :span=12>
            <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="下次考试成绩预测">
          </el-table-column>
      </el-table>
      </el-col>
    </el-row>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2021-03-27',
          name: '王小虎',
          grade: '11'
        }, {
          date: '2021-04-01',
          name: '王小虎',
          grade: '27'
        }, {
          date: '2021-04-13',
          name: '王小虎',
          grade: '18'
        }, {
          date: '2021-04-21',
          name: '王小虎',
          grade: '49'
        }]
      }
    }
  }
</script>


<style scoped>
    #header{
        height: 100px;
    }
</style>