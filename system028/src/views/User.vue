<template>
    <div class="user">
        <div class="top">
            <el-button type="primary" size='mini' @click='dialogTableVisible = true'>创建用户</el-button>
            <el-dialog title="修改用户" :visible.sync="dialogTableVisible">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label='密码' :label-width="formLabelWidth" prop="password">
                        <el-input v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
                        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                        <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="角色" :label-width="formLabelWidth">
                        <el-select v-model="ruleForm.region" placeholder="请选择角色">
                            <el-option v-for='(item,index) in getarr' :label="item.name" :value="item.name"
                                :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTableVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogTableVisible = false;handpost()">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <el-divider></el-divider>
        <div class="table">
            <el-table :data="tableData" stripe style="width: 100%" border>
                <el-table-column prop="username" label="用户名" width="180">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="180">
                </el-table-column>
                <el-table-column prop="phone" label="电话">
                </el-table-column>
                <el-table-column prop="create_time" label="注册时间">
                </el-table-column>
                <el-table-column prop="role_id" label="权限角色">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="dialogFormVisible = true;handleEdit(scope.row)">修改</el-button>
                        <el-button size="mini" @click="handleDelete(scope.row)">删除
                        </el-button>
                        <el-dialog title="修改用户" :visible.sync="dialogFormVisible">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                                <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
                                    <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
                                    <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                                    <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="角色" :label-width="formLabelWidth">
                                    <el-select v-model="ruleForm.region" placeholder="请选择角色">
                                        <el-option v-for='(item,index) in getarr' :label="item.name" :value="item.name"
                                            :key="index"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false;handup()">确 定</el-button>
                            </div>
                        </el-dialog>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='handget'>
        </el-pagination>
    </div>
</template>

<script>
    import { getuser, deleteuser, updateuser, adduser } from '../api/user'

    export default {
        data() {
            // 手机号验证
            var checkPhone = (rule, value, callback) => {
                const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
                if (!value) {
                    return callback(new Error('电话号码不能为空'))
                }
                setTimeout(() => {

                    if (!Number.isInteger(+value)) {
                        callback(new Error('请输入数字值'))
                    } else {
                        if (phoneReg.test(value)) {
                            callback()
                        } else {
                            callback(new Error('电话号码格式不正确'))
                        }
                    }
                }, 100)
            };
            return {
                pageNum: 1,
                pageSize: 4,
                total: 0,
                tableData: [],
                getarr: [],
                dialogTableVisible: false,
                dialogFormVisible: false,
                row: {},
                role_id: '',
                ruleForm: {
                    password:'',
                    name: '',
                    phone: '',
                    email: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, validator: checkPhone, trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                    ],
                    password:[
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            this.handget()
        },
        methods: {
            handget() {
                this.token = localStorage.getItem('token')
                getuser(this.pageNum, this.pageSize, this.token).then((res) => {
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                    Date.prototype.toLocaleString = function () {
                        function addZero(num) {
                            if (num < 10)
                                return "0" + num;
                            return num;
                        }
                        return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate()) + " " +
                            addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
                    };
                    this.tableData.map((val) => {
                        let date = new Date(val.create_time)
                        return val.create_time = date.toLocaleString()
                    })
                    this.getarr = res.data.data.roles
                    for (var val of this.tableData) {
                        for (const item of this.getarr) {
                            if (item._id == val.role_id) {
                                val.role_id = item.name
                            }
                        }
                    }
                })
            },
            handleEdit(row) {
                this.ruleForm.name = row.username
                this.ruleForm.phone = row.phone
                this.ruleForm.email = row.email
                this.ruleForm.region = row.role_id
                this.row = row
                
            },
            handleDelete(row) {
                console.log(this.getarr)
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteuser(row._id, this.token).then((res) => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handpost() {
                for (const val of this.getarr) {
                    if (this.ruleForm.region == val.name) {
                        this.role_id = val._id
                    }
                }
                adduser({username:this.ruleForm.name,password:this.ruleForm.password,phone:this.ruleForm.phone,email:this.ruleForm.email,role_id:this.role_id},this.token).then((res)=>{
                    this.$message({
                        message: '恭喜你，创建成功',
                        type: 'success'
                    });
                })
                console.log(123)
            },
            handup() {
                for (const val of this.getarr) {
                    if (this.ruleForm.region == val.name) {
                        this.role_id = val._id
                    }
                }
                updateuser({ _id: this.row._id, username: this.ruleForm.name, phone: this.ruleForm.phone, email: this.ruleForm.email, role_id: this.role_id }, this.token).then((res) => {
                    this.tableData.username = res.data.data.username
                    this.tableData.email = res.data.data.email
                    this.tableData.phone = res.data.data.phone
                    for(let item of this.getarr){
                        if(res.data.data.role_id == item._id){
                            this.tableData.role_id = item.name
                        }
                    }
                    this.$message({
                        message: '恭喜你，修改成功',
                        type: 'success'
                    });
                })
            }
        },
    }
</script>

<style>
    .user {
        margin: 24px;
        background: white;
    }

    .top {
        height: 60px;
        text-align: left;
    }

    .top .el-button {
        margin-top: 30px;
        margin-left: 20px;
    }

    .table {
        margin: 20px;
    }
</style>