
<template>
    <!-- header -->
    <el-header style="text-align: right; font-size: 18px">心理健康咨询中心
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>修改</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <div class="stupid"></div>
    <!-- 选择卡片 -->
    <!-- <main> -->
      <el-carousel :interval="4000" type="card" height="200px">
      <el-row :gutter="90" type="flex" justify="center" align="middle"> 

          <el-carousel-item :key="grade">

              <div class="grid-content bg-purple" @click="importGrade">
                <h2>导入成绩</h2>
              </div>
          </el-carousel-item>

          <el-carousel-item :key="predict">
              <div class="grid-content bg-purple" @click="checkFuture">
                <h2>查看预测</h2>
              </div>
          </el-carousel-item>

          <el-carousel-item :key="advice">
              <div class="grid-content bg-purple" @click="suppose">
                <h2>建议</h2>          
              </div>
          </el-carousel-item>

          <el-carousel-item :key="hardware" id="test">
              <div class="grid-content bg-purple" @click="changeHard">
                <h2>添加硬件监测</h2>          
              </div>
          </el-carousel-item>
        
      </el-row>
    </el-carousel>
    <!-- </main> -->
</template>

<script>
  export default {
    data() {
      return {
        // tableData: [
        //   {
        //     term: 1,
        //     name: '王小虎',
        //     academy: "信息与软件学院",
        //     grade: "198",
        //   },
        //   {
        //     term: 1,
        //     name: '王小虎',
        //     academy: "信息与软件学院",
        //     grade: "198",
        //   },
        //             {
        //     term: 1,
        //     name: '王小虎',
        //     academy: "信息与软件学院",
        //     grade: "198",
        //   },
        //   {
        //     term: 1,
        //     name: '王小虎',
        //     academy: "信息与软件学院",
        //     grade: "198",
        //   },
        //   {
        //     term: 1,
        //     name: '王小虎',
        //     academy: "信息与软件学院",
        //     grade: "198",
        //   },
        // ]
        
      };
    },
    methods:{
      importGrade(){
        this.$router.push('./importGrade')
      },
      checkFuture(){
        this.$router.push('./checkFuture')
      },
      suppose(){
        this.$router.push('./suppose')
      },
      changeHard(){
        this.$router.push('./hardware')
      }
    }
  };
</script>

<style scoped>
  .stupid{
    height: 90px;
  }
  .el-table-column, .el-table{
    text-align: center;
  }
  
  .el-header, .el-footer {
    background-color: rgba(132, 197, 206, 0.9);
    color: rgba(51, 51, 51, 0.8);
    text-align: center;
    line-height: 60px;
    height: 60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .main{
    height: 100%;
  }
  .el-row {
    margin-bottom: 20px;
    height: 100%;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 8px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #d3dce6;
    height: 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .bg-purple:hover{
    background: #9dbbdf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 15px;
    min-height: 36px;
    font-size: 30px;
    color: rgba(65, 58, 58, 0.993);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    vertical-align: middle;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>