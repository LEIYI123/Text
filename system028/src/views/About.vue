<template>
  <div class="about">
    <el-container>
      <el-aside width="230px">
        <el-aside width="230px">
          <img src="http://118.24.25.7:5000/img/logo.6f4321c1.png" alt="">
        </el-aside>
        <el-aside width="200px">
          <div @click="home"><i class="el-icon-menu"></i>
            <el-link :underline="false" type="success">首页</el-link>
          </div>
        </el-aside>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-s-shop"></i><span>商品</span></template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click='category'><i class="el-icon-s-marketing"></i>
                <el-link :underline="false" type="success">品类管理</el-link>
              </el-menu-item>
              <el-menu-item index="1-2" @click='product'><i class="el-icon-shopping-cart-full"></i>
                <el-link :underline="false" type="success">商品管理</el-link>
              </el-menu-item>
              <el-menu-item index="1-3" @click='spec'><i class="el-icon-paperclip"></i>
                <el-link :underline="false" type="success">规格属性</el-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-user"></i><span>用户</span></template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click='user'><i class="el-icon-user-solid"></i>
                <el-link :underline="false" type="success">用户管理</el-link>
              </el-menu-item>
              <el-menu-item index="1-2" @click='role'><i class="el-icon-setting"></i>
                <el-link :underline="false" type="success">权限管理</el-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-platform-eleme"></i><span>订单</span></template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click='order'><i class="el-icon-phone-outline"></i>
                <el-link :underline="false" type="success">订单管理</el-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="user-info">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <p>admin</p>
          <el-button type="text" @click="open">退出登录</el-button>
        </div>
        </el-header>
        <el-main>

          <router-view />

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('确定退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login');
          localStorage.setItem('token','')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
      },
      home(){
        this.$router.push(`/home`);
      },
      category(){
        this.$router.push(`/category`);
      },
      product(){
        this.$router.push(`/product/productList`);
      },
      spec(){
        this.$router.push(`/spec`);
      },
      user(){
        this.$router.push(`/user`);
      },
      role(){
        this.$router.push(`/role`);
      },
      order(){
        this.$router.push(`/order/orderList`);
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .el-header,
  .el-footer {
    background-color: white;
    color: #333;
  }

  .el-aside {
    background-color: black;
    color: rgb(255, 208, 75);
    line-height: 60px;
    box-sizing: border-box;
  }

  .el-aside i {
    margin-left: -50px;
    margin-right: 24px;
  }

  .el-aside a span {
    font-size: 16px;
  }

  .el-aside img {
    width: 160px;
    vertical-align: middle;
  }

  .el-submenu__title {
    background: black;
  }

  .el-submenu__title span {
    color: white;
  }

  .el-menu div {
    margin-left: -30px;
    font-size: 16px;
  }

  .el-menu-item.is-active {
    color: '';
  }

  .el-menu div>i:nth-of-type(1) {
    margin-right: 20px;
  }

  .el-menu ul li {
    background: black;
    color: white;
  }

  .about .el-menu ul li:hover {
    background: black;
  }

  .about .el-submenu__title:hover {
    background-color: black;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body>.el-container {
    position: relative;
    box-sizing: border-box;
  }

  body .is-vertical {
    height: 100vh;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .user-info{
    width: 200px;
    height: 60px;
    float: right;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>