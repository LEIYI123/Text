<template>
    <div class="role">
        <div class="top">
            <el-button type="primary" size='mini' @click='dialogTableVisible = true;handadd()'>创建角色</el-button>
        </div>
        <el-divider></el-divider>
        <div class="table">
            <el-table :data="tableData" stripe style="width: 100%" border>
                <el-table-column prop="name" label="角色名称" width="180">
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" width="180">
                </el-table-column>
                <el-table-column prop="auth_time" label="授权时间">
                </el-table-column>
                <el-table-column prop="auth_name" label="授权人">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="dialogFormVisible=true;handleEdit(scope.row)">
                            设置权限</el-button>
                        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox label="首页"></el-checkbox>
                                <el-checkbox label="商品"></el-checkbox>
                                <el-checkbox label="用户"></el-checkbox>
                                <el-checkbox label="订单"></el-checkbox>
                            </el-checkbox-group>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false;hand()">确 定</el-button>
                            </div>
                        </el-dialog>
                    </template>

                </el-table-column>
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='handp'>
        </el-pagination>
    </div>
</template>

<script>
    import { getlist, addrole, updaterole } from '../api/role'
    export default {
        data() {
            return {
                pageNum: 1,
                pageSize: 5,
                total: 0,
                tableData: [],
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                checkList: []
            }
        },
        mounted() {
            this.handp()
        },
        methods: {
            handp() {
                this.token = localStorage.getItem('token')
                getlist(this.pageNum, this.pageSize, this.token).then((res) => {
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
                    }
                    this.tableData.map((val) => {
                        let date1 = new Date(val.create_time)
                        return val.create_time = date1.toLocaleString()
                    })
                    this.tableData.map((item) => {
                        let date2 = new Date(item.auth_time)
                        return item.auth_time = date2.toLocaleString()
                    })
                })
            },
            handadd() {
                this.$prompt('请输入角色名', '添加角色', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    addrole(value, this.token).then((res) => {
                        this.$message({
                            type: 'success',
                            message: '你的角色是: ' + value
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            handleEdit(row) {
                console.log(row)
            },
            hand(){
                console.log(this.checkList)
            }
        },
    }
</script>

<style>
    .role {
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