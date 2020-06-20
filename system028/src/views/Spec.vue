<template>
    <div class="spec">
        <div class="top">
            <div class="spec-cnt">
                <el-input placeholder="关键字" v-model="input" clearable size='mini'></el-input>
                <el-button type="primary" icon="el-icon-search" size='mini' @click='handsearch'>搜索</el-button>
            </div>
            <el-button type="primary" icon="el-icon-plus" size='mini' @click='dialogTableVisible = true'>添加规格</el-button>
            <el-dialog title="添加规格" :visible.sync="dialogTableVisible">
                <el-form :model="form">
                    <el-form-item label="规则名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="分类名称" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择分类">
                            <el-option v-for='(title,index) in getarry' :key="index" :label='title.name' :value="title.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="规格属性" :label-width="formLabelWidth">
                        <el-input v-model="form.date1" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogTableVisible = false;handeh()">取 消</el-button>
                    <el-button type="primary" @click="dialogTableVisible = false;handadd()">确 定
                    </el-button>
                </div>
            </el-dialog>
        </div>
        <hr>
        <div class="el-card__body">
            <template>
                <el-table :data="tableData" stripe style="width: 100%" border>
                    <el-table-column prop="name" label="规格名称"></el-table-column>
                    <el-table-column prop="option" label="规格属性值"></el-table-column>
                    <el-table-column prop="__v" label="规格归类"></el-table-column>
                    <el-table-column label="操作选项">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.row);dialogFormVisible = true">修改
                            </el-button>
                            <el-dialog title="修改规则" :visible.sync="dialogFormVisible">
                                <el-form :model="form">
                                    <el-form-item label="规则名称" :label-width="formLabelWidth">
                                        <el-input v-model="form.name" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="分类名称" :label-width="formLabelWidth">
                                        <el-select v-model="form.region" placeholder="请选择分类">
                                            <el-option v-for='(title,index) in getarry' :label='title.name' :value="title.name" :key="index"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="规格属性" :label-width="formLabelWidth">
                                        <el-select v-model="form.date1" placeholder="请选择属性">
                                            <el-option label='无属性' value='123'></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false;handeh()">取 消</el-button>
                                    <el-button type="primary" @click="dialogFormVisible = false;handup()">确 定
                                    </el-button>
                                </div>
                            </el-dialog>
                            <el-button size="mini" @click="handleDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='handeat'>
        </el-pagination>
    </div>
</template>

<style>
    .spec {
        background: white;
    }

    .spec-cnt {

        display: flex;
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

    import { getspec, getcate, updatespec, deletespec,searchspec,addspec } from '../api/spec'

    import { takeCategory } from '../api/category'

    export default {
        data() {
            return {
                pageSize: 5,
                pageNum: 1,
                total: 0,
                tableData: [],
                input: '',
                id: [],
                dialogFormVisible: false,
                dialogTableVisible: false,
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
                row: {},
                getarry:[],

            }
        },
        mounted() {
            this.handeat()
            this.handgetlist()
        },
        methods: {
            handleEdit(row) {
                this.form.region = row.__v
                this.form.date1 = row.option[0]
                return this.row = row
            },
            handleDelete(row) {
                console.log(row)
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(row._id)
                    deletespec(row._id).then((res) => {
                        this.$message({
                            message: '恭喜你，删除成功',
                            type: 'success'
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handeat() {
                this.token = localStorage.getItem('token')
                getspec(this.pageSize, this.pageNum, this.token).then((res) => {
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                    for (let i = 0; i < this.tableData.length; i++) {
                        getcate(this.tableData[i].category_id, this.token).then((req) => {
                            res.data.data.list[i].__v = req.data.data.name
                            this.tableData = res.data.data.list
                        })
                    }
                })
            },
            handgetlist(){
                let pageNum='';
                let pageSize='';
                this.token = localStorage.getItem('token')
                takeCategory(pageSize, pageNum, this.token).then((res)=>{
                    console.log(res.data.data.list)
                    this.getarry = res.data.data.list
                })
            },
            handup() {
                let arr = this.getarry.filter((val)=>{
                    return val.name == this.form.region
                })
                updatespec(this.row._id, this.form.name, arr[0]._id, this.row.option, this.token).then((res) => {
                    this.$message({
                        message: '恭喜你，修改成功',
                        type: 'success'
                    });
                })
            },
            handeh() {
                this.$message({
                    showClose: true,
                    message: '取消修改'
                });
            },
            handsearch(){
                searchspec(this.input,this.pageSize,this.pageNum,this.token).then((res)=>{
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                })
            },
            handadd(){
                let arr1 = this.getarry.filter((val)=>{
                    return val.name == this.form.region
                })
                console.log(arr1[0]._id)
                this.form.date1 = this.form.date1.split(',')
                addspec(this.form.name,arr1[0]._id,this.form.date1,this.token).then((res)=>{
                    console.log(res.data.data)
                })
            }
        }
    }
</script>