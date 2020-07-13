<template>
  <div class="home">
    <div class="top">
      <h3>个人信息</h3>
      <el-button type="primary" icon="el-icon-edit" size='small' @click="dialogFormVisible = true;handupdata()">修改</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="Form" :rules="rules" ref="Form">
          <el-form-item label="账号名：" :label-width="formLabelWidth" prop='date'>
            <el-input v-model="Form.date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名：" :label-width="formLabelWidth" prop="name">
            <el-input v-model="Form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别：" :label-width="formLabelWidth" prop='value'>
            <el-select v-model="value" clearable placeholder="请选择性别">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密码：" :label-width="formLabelWidth" prop='password'>
            <el-input v-model="Form.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false;handleput()">保存</el-button>
        </div>
      </el-dialog>
    </div>
    <ul class="cent">
      <li>
        <span>账号名：</span>
        <span>{{id}}</span>
      </li>
      <li>
        <span>姓名：</span>
        <span>{{name}}</span>
      </li>
      <li>
        <span>性别：</span>
        <span>{{sex}}</span>
      </li>
      <li>
        <span>密码：</span>
        <span>{{password}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        id: 'zhangsan01',
        name: '张三',
        sex: '男',
        password: '123456',
        dialogFormVisible: false,
        Form: {
          name: '',
          date: '',
          password: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px',
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          value: [
            { required: true, message: '请输入性别', trigger: 'blur' }
          ],
          date: [
            { required: true, message: '请输入账户号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '长度最少6个字符', trigger: 'change' }
          ]
        },
        options: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        value: ''
      }
    },
    methods: {
      handupdata(){
        this.Form.name = this.name
        this.value = this.sex
        this.Form.date = this.id
        this.Form.password = this.password
      },
      handleput(){
        this.name = this.Form.name
        this.sex = this.value
        this.id = this.Form.date
        this.password = this.Form.password
      }
    },

  }
</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .cent {
    margin-top: 10px;
  }

  .cent li {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    list-style: none;
    background: white;
    margin-bottom: 10px;
    border: 1px solid #f1f1f1;
    padding-left: 20px;
  }

  .el-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .el-dialog__header {
    border-radius: 20px 20px 0 0;
    background: rgb(92, 136, 231);
  }

  .el-dialog__header .el-dialog__title {
    color: white;
  }

  .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
    color: white;
  }

  .el-dialog__wrapper .el-dialog {
    border-radius: 20px;
  }
</style>