<template>
    <div class="productList">
        <div class="top">
            <div class="spec-cnt">
                <el-select v-model="form.region" placeholder="按照名称">
                    <el-option label="按照名称搜索" value="按照名称搜索"></el-option>
                    <el-option label="按照描述搜索" value="按照描述搜索"></el-option>
                </el-select>
                <el-input placeholder="关键字" v-model="input" clearable size='medium'></el-input>
                <el-button type="primary" icon="el-icon-search" size='mini' @click='handbok'>搜索</el-button>
            </div>
            <el-button type="primary" icon="el-icon-plus" size='medium' @click='dialogFormVisible = true'>添加商品
            </el-button>
        </div>
        <hr>
        <div class="el-card__body">
            <template>
                <el-table :data="tableData" stripe style="width: 100%" border>
                    <el-table-column prop="name" label="商品名称"></el-table-column>
                    <el-table-column prop="desc" label="商品描述"></el-table-column>
                    <el-table-column prop="price" label="商品价格"></el-table-column>
                    <el-table-column label="商品状态">
                        <template slot-scope="scope">
                            <template v-if="!scope.row.status">
                                <el-button size="mini" @click="handleEdit(scope.row)">上架</el-button>
                                <el-button type="text" size="mini">已下架</el-button>
                            </template>
                            <template v-else>
                                <el-button size="mini" @click="handleEdit(scope.row)">下架</el-button>
                                <el-button type="text" size="mini">销售中</el-button>
                            </template>


                        </template>
                    </el-table-column>
                    <el-table-column label="操作选项">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdot(scope.row)">修改</el-button>
                            <el-button size="mini" @click="handleDelete(scope.row)">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='handget'></el-pagination>
    </div>
</template>

<script>

    import { getlist, updateStatus, searchprod } from '../api/product'

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
                form: {
                    name: '',
                    region: '按照名称搜索',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                row: {},
                status: 0,
                productName: '',
                productDesc: ''
            }
        },
        mounted() {
            this.handget()
        },
        methods: {
            handget() {
                this.token = localStorage.getItem('token')
                getlist(this.pageNum, this.pageSize, this.token).then((res) => {
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                })
            },
            handleEdit(row) {
                console.log(row.status);
                row.status == 0 ? row.status = 1 : row.status = 0
                updateStatus(row._id, row.status, this.token).then((res) => {
                    this.$message({
                        message: '恭喜你,商品状态更新成功',
                        type: 'success'
                    });
                })
                console.log(row)
            },
            handleDelete(row) {
                this.$router.push(`/product/productDetail/${row._id}`);
                console.log(row)
            },
            handleEdot(row) {
                this.$router.push(`/product/addUpdateProduct/${row._id}`);
            },
            handbok() {
                if (this.form.region == '按照名称搜索') {
                    searchprod({ pageNum: this.pageNum, pageSize: this.pageSize, productName: this.input }, this.token).then((res) => {
                        this.tableData = res.data.data.list
                        this.total = res.data.data.total
                    })
                } else if (this.form.region == '按照描述搜索') {
                    searchprod({ pageNum: this.pageNum, pageSize: this.pageSize, productDesc: this.input }, this.token).then((res) => {
                        this.tableData = res.data.data.list
                        this.total = res.data.data.total
                    })
                }
            }
        },
    }
</script>

<style>
    .productList {
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

    .el-input__inner {
        width: 150px;
    }

    .el-input--medium .el-input__inner {
        margin-left: 20px;
        margin-right: 20px;
    }

    .el-select .el-input__inner {
        cursor: pointer;
        padding-right: 35px;
    }
</style>