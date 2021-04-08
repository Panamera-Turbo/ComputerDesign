
<template>
<el-container style="border: 1px solid #eee">
  <!-- aside -->
  <el-aside>
    <el-menu :default-openeds="[]">
      <el-submenu index="1">
        <template #title><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template #title><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template #title>选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template #title>选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <!-- header -->
    <el-header style="text-align: right; font-size: 18px">心理健康咨询中心
      <!-- <textarea style="text-align: center"></textarea> -->
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <!-- main -->
    <!-- <el-main>
      <el-table :data="tableData">
        <el-table-column prop="term" label="学期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="grade" label="排名" width="120">
        </el-table-column>
        <el-table-column prop="academy" label="学院" >
        </el-table-column>
      </el-table>
    </el-main> -->
  </el-container>
</el-container>
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
    }
  };
</script>

<style scoped>
  .el-table-column, .el-table{
    text-align: center;
  }
  
  .el-header, .el-footer {
    background-color: rgba(132, 197, 206, 0.9);
    color: rgba(51, 51, 51, 0.8);
    text-align: center;
    line-height: 60px;
    height: 60px;
    border: #333 1px solid;
  }

  .el-aside {
    background-color: rgba(57, 98, 122, 0.267);
    color: #333;
    text-align: center;
    line-height: 160px;
    top:60px;
    bottom: 0px;
    width: 200px;
    position: absolute;
    float: left;
    border: #333 1px solid;
  }

  .el-main {
    background-color: rgba(209, 213, 218, 0.7);
    color: #333;
    text-align: center;
    line-height: 160px;
    /* right: 0px; 
    margin-left: 200px; */
    top:60px;
    bottom: 0px;
    /* width: 80%; */
    position: absolute;
    /* float: right; */
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
