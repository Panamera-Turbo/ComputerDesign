<template>
    <el-row class="preserve"></el-row>
    <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="8">
            <el-card class="box-card">
                <h1 style="text-align: center;">登录界面</h1>
                <el-divider></el-divider>
                <!-- 下面是一个表单 -->
                <el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">

                    <!-- 用户名输入的相关内容 -->
                    <el-form-item
                    label="用户名"
                    prop="username"
                    :rules="[
                        { required: true, message: '用户名不能为空'},
                        { type: 'string', message: '用户名必须为字符串，不能以数字开头'}
                    ]"
                    >
                    <el-input placeholder="请输入您的用户名" type="string" v-model.string="ValidateForm.username" autocomplete="off"></el-input>
                    </el-form-item>

                    <!--密码输入的相关内容-->
                    <el-form-item
                        label="密码"
                        prop="password"
                        :rules="[
                        { required: true, message: '密码不能为空'},
                        ]"
                    >
                    <el-input placeholder="请输入密码" type="password" v-model="ValidateForm.password" autocomplete="off" show-password></el-input>
                    </el-form-item>

                    <el-form-item id="form-end">
                        <el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
                        <el-button @click="resetForm('ValidateForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            ValidateForm: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$message.success({message: `用户: ${this.ValidateForm.username}，登陆成功！`})
            } else {
                this.$message.error('此用户并不存在，请重新输入！')
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style scoped>
    .el-col {
        border-radius: 4px;
        color: #fff;
    }

    .preserve {
        height: 100px
    }

    .h1 {
        text-align:center;
    }

    #form-end {
        display:flex;
        justify-content:center;
        /* text-align: center; */
    }
</style>