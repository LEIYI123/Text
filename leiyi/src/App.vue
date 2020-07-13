<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="rgb(50,71,138)" text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item>
            <img src="./assets/1.png" alt="" srcset="">
          </el-menu-item>
          <el-menu-item></el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-order"></i>
            <span slot="title">我的任务</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-s-cooperation"></i>
            <span slot="title">项目管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-question"></i>
            <span slot="title">问题管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-success"></i>
            <span slot="title">任务评价</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-s-release"></i>
            <span slot="title">档案库</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">组织管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="user">
            <span><i class="el-icon-sort"></i>切换账号</span>
            <span><i class="el-icon-bell"></i>消息</span>
            <span><i class="el-icon-pie-chart"></i>退出</span>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .el-header,
  .el-footer {
    background-color: white;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-item {
    position: relative;
  }

  img {
    position: absolute;
    width: 199px;
    left: 0;
  }

  .el-menu {
    height: 100vh;
  }

  .el-icon-sort {
    transform: rotate(90deg);
  }
  .user{
    width: 300px;
    float: right;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>