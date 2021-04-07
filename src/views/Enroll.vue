<template>
    <el-row class="preserve"></el-row>
    <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="8">
            <!-- 这是装信息的卡片 -->
            <el-card class="box-card">
                <h1 style="text-align: center;">注册界面</h1>
                <el-divider></el-divider>
                <!-- 下面是一个表单 -->
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <!-- <el-input type="string" v-model="ruleForm.username"></el-input> -->
                        <el-input placeholder="请输入您的用户名" type="string" v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>


                    <el-form-item label="密码" prop="pass">
                        <el-input placeholder="请输入您的密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>


                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input placeholder="请再次输入您的密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    
                    <el-form-item id="form-end">
                        <el-button type="primary" @click="submitForm('ruleForm')" v-loading.fullscreen.lock="fullscreenLoading">注册</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        var checkUsername = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('用户名不能为空'));
            } else {
                return callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                console.log("我在这里")
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                username: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ]
            },
            //和页面加载相关的组件数据
            fullscreenLoading: false,
        };
    },
    methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                

                if (valid) {
                    this.$message.success({message: `用户: ${this.ruleForm.username}，注册成功！请登陆网站！`})

                    // 这里以后做的是ajax处理，这里先用setTimeout来表示加载过程,添加了加载功能
                    this.fullscreenLoading = true;
                    setTimeout(() => {
                        this.fullscreenLoading = false;
                    }, 2000);

                    this.$router.push("./")
                } else {
                    this.$message.error({message: `注册失败，请重新进行注册。`})
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