<template>
    <div class="category">
        <div class="top">
            <p>一级商品分类列表</p>
            <el-button type="primary" icon="el-icon-plus" size='mini' @click="dialogFormVisible = true">添加分类</el-button>
            <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="分类列表" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择分类">
                            <el-option label="一级分类" value="shanghai"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="分类名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false;handadd()">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <div class="el-card__body">
            <template>
                <el-table :data="tableData" stripe style="width: 100%" border>
                    <el-table-column prop="name" label="商品分类">
                    </el-table-column>
                    <el-table-column label="操作选项">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.row)" >修改分类</el-button>
                            <el-button size="mini" @click="handleDelete(scope.row)" v-if='show'>查看子分类</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <el-pagination v-if='show' background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='handcate'>
        </el-pagination>
        <el-pagination v-else background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='handle'>
        </el-pagination>
    </div>
</template>

<style>
    .category {
        background: white;
    }

    .top {
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 0px 20px;
    }

    .is-background {
        height: 70px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>

    import { takeCategory, updateCategory, addCategory, getCategory } from '../api/category'

    export default {
        data() {
            return {
                pageNum: 1,
                pageSize: 5,
                tableData: [],
                total: 0,
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
                parentId: 0,
                show:true
            }
        },
        mounted() {
            this.handcate()
        },
        methods: {
            handleEdit(row) {
                this.$prompt('请输入新分类名', '修改分类', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    updateCategory(row._id, value, this.token).then((res) => {
                        this.$message({
                            type: 'success',
                            message: '新分类名是: ' + value
                        });
                    })
                    row.name = value
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
                console.log(row)
            },
            handleDelete(row) {
                this.show = false
                getCategory(row._id, this.pageNum, this.pageSize, this.token).then((res) => {
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                    this.id = row._id
                    let text = document.querySelector('.top>p')
                    text.innerHTML += `---${row.name}`
                })
                console.log(row);
            },
            handadd() {
                addCategory(this.parentId, this.form.name, this.token).then((res) => {
                    this.$message({
                        type: 'success',
                        message: '新分类名是: ' + this.form.name
                    });
                })
            },
            handcate() {
                if (localStorage.getItem('token')) {
                    this.token = localStorage.getItem('token')
                    takeCategory(this.pageNum, this.pageSize, this.token).then((res) => {
                        if (!res.data.status) {
                            this.tableData = res.data.data.list
                            this.total = res.data.data.total
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    })
                } else {
                    this.$message.error('你未登录，请登录')
                    this.$router.push('/login');
                }
            },
            handle(){
                getCategory(this.id, this.pageNum, this.pageSize, this.token).then((res) => {
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                })
            }
        }
    }

</script>

<style>
    .el-select {
        margin-left: -290px;
    }
</style>