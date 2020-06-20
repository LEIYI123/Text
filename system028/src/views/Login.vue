<template>
  <div id="loginBox">
    <div class="top">
      <img src="http://118.24.25.7:5000/img/logo.6f4321c1.png" alt="" srcset="">
    </div>
    <h3 style="font-size:30px;text-align:center">用户登录</h3>
    <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm">
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user" v-model="loginForm.username" type="text" placeholder="请输入用户名"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password" placeholder="密码(不能少于6位)"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSubmit('loginForm')" class="block-btn" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { takeLogin } from '../api/common'

  export default {
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, message: "用户名不能少于 5 个", trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      handleSubmit(loginForm) {
        this.$refs[loginForm].validate((valid) => {

          // if (performance.navigation.type == 1) {
          //   let username = localStorage.getItem(username)
          //   takeLogin()
          // }

          if (valid) {

            //发请求
            takeLogin(this.loginForm).then((res) => {

              if (!res.data.status) {

                //仓库有一个问题？页面刷新后数据就没有了，需要重新获取和设置
                localStorage.setItem('token', 'Bearer ' + res.data.token)
                localStorage.setItem('username', res.data.data.username)
                this.$store.state.count = res.data
                this.$router.push('/home');
                this.$message({
                  message: '恭喜你，登录成功',
                  type: 'success'
                });

              } else {

                this.$message.error(res.data.msg);

              }

            })

          } else {

            this.$message.error('数据有误！');

          }
        })
      }
    },
  };
</script>
<style>
  html {
    height: 100%;
    width: 100%;
    background: url(http://118.24.25.7:5000/img/bcphoto.407054bc.jpg) no-repeat;
    background-size: 100% 100%;
  }

  #loginBox {
    padding: 20px 40px;
    width: 400px;
    margin: 90px auto 0;
    background-color: hsla(0, 0%, 100%, 0.5);
    height: 300px;
    box-sizing: border-box;
    border-radius: 20px;
  }

  #loginBox .block-btn {
    width: 100%;
  }

  #loginBox .top {
    position: absolute;
    height: 80px;
    width: 100%;
    text-align: center;
    top: 0;
    left: 0;
    background-color: hsla(0, 0%, 100%, .2);
  }

  #loginBox .top img {
    width: 300px;
  }
</style>