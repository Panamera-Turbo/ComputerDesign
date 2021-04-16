<template>
    <el-row :gutter="300" height="60px" id="head"></el-row>
    <el-row type="flex" justify="center">
      <el-col :span=7>
      <template #template>
        <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;" />
          <div
            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 30%;" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="../assets/watch1.jpg"
            class="image"
          />
          <div style="padding: 14px;">
            <span>运动手环，日常健康好助手，监测您日常身心状况</span>
            <div class="bottom card-header">
              <el-button type="text" class="button">点击添加</el-button>
            </div>
          </div>
        </el-card>
      </template>
      </el-col>

      <el-col :span=1 ></el-col>

      <el-col :span=7>
      <template #template>
        <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;" />
          <div
            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 30%;" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="../assets/bed3.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>智慧床垫，夜晚睡眠小卫士，监测您夜晚睡眠质量</span>
            <div class="bottom card-header">
              <el-button type="text" class="button">点击添加</el-button>
            </div>
          </div>
        </el-card>
      </template>
      </el-col>

      <el-col :span=1 ></el-col>

      <el-col :span=7>
      <template #template>
        <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;" />
          <div
            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 30%;" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="../assets/head1.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>脑机接口，脑部情况小管家，监测您脑部活动情况</span>
            <div class="bottom card-header">
              <el-button type="text" class="button">点击添加</el-button>
            </div>
          </div>
        </el-card>
      </template>
      </el-col>

    </el-row>
</template>

<script>
  import { defineComponent } from 'vue'

  const dayjs = require('dayjs')

  export default defineComponent({
    data() {
      return {
        loading: false,
      }
    },
  })
</script>

<style scoped>
  #head{
    height: 50px;
  }
</style>