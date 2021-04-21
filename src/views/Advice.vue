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
            prop="evaluate"
            label="心理测评情况">
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
          evaluate: '心理评测情况良好'
        }, {
          date: '2021-04-01',
          name: '王小虎',
          evaluate: '心理评测情况略显波动，请您多注意'
        }, {
          date: '2021-04-13',
          name: '王小虎',
          evaluate: '心理评测情况有所好转，请继续保持！'
        }, {
          date: '2021-04-21',
          name: '王小虎',
          evaluate: '心理评测情况较差，已联系负责人，请一定好好爱惜自己的生命！'
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