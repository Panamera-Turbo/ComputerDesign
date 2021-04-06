<template>
    <el-row class="preserve"></el-row>
    <el-row :gutter="20" type="flex" justify="center">
        <el-col span="8">

            <el-card shadow="hover">
                <h1>欢迎来到心理健康咨询中心</h1>
                <el-divider></el-divider>
                <div class="card-item">
                    <span>已有账号？</span>
                    <!-- <a href="./login">点此登陆</a> -->
                    <el-button class="button" type="primary" @click="login">点此登陆</el-button>
                </div>
                <div class="divide"></div>
                <div class="card-item">
                    <span>还未注册？</span>
                    <!-- <a href="./login">点此登陆</a> -->
                    <el-button class="button" type="primary" @click="enroll">点此注册</el-button>
                </div>
            </el-card>
            
            
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Preface",
    methods: {
        login(){
            this.$router.push("./login");
        },
        enroll(){
            this.$router.push("./enroll");
        }
    }
}
</script>

<style scoped>
    .preserve {
        height: 100px
    }

    .el-card{
        color:rgb(250, 250, 250)
    }

    .card-item {
        text-align: center;
    }

    .divide{
        height: 20px
    }
</style>