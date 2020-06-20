<template>
    <div class="order">
        <div class="top">
            <div class="spec-cnt">
                <el-select v-model="form.region" placeholder="按照名称">
                    <el-option label="按照订单号搜索" value="按照订单号搜索"></el-option>
                    <el-option label="按照收件人搜索" value="按照收件人搜索"></el-option>
                </el-select>
                <el-input placeholder="订单号" v-model="input" clearable size='medium'></el-input>
                <el-button type="primary" icon="el-icon-search" size='mini' @click='handbok'>搜索</el-button>
            </div>
        </div>
        <hr>
        <div class="table">
            <el-table :data="tableData" stripe style="width: 100%" border>
                <el-table-column prop="orderId" label="订单号" width="180">
                </el-table-column>
                <el-table-column prop="recipient" label="收件人" width="180">
                </el-table-column>
                <el-table-column prop="payStatus" label="订单状态">
                </el-table-column>
                <el-table-column prop="allPrice" label="订单总价">
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size='pageSize'
            :current-page.sync='pageNum' @current-change='hangbe'>
        </el-pagination>
    </div>
</template>

<script>
    import { getlist, searchorder } from '../api/order'
    export default {
        data() {
            return {
                pageSize: 2,
                pageNum: 1,
                total: 0,
                tableData: [],
                input: '',
                id: [],
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '按照订单号搜索',
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
            this.hangbe()
        },
        methods: {
            handbok() {
                if (this.form.region == '按照订单号搜索') {
                    searchorder('orderId', this.input, this.pageNum, this.pageSize, this.token).then((res) => {
                        res.data.data.list.map((val) => {
                            return val.allPrice = '￥' + val.allPrice
                        });
                        res.data.data.list.map((val) => {
                            return val.payStatus == 0 ? val.payStatus = '已支付' : val.payStatus = '未支付'
                        });
                        res.data.data.list.map((val) => {
                            var date = new Date(val.create_time);
                            return val.create_time = date.toLocaleString()
                        });
                        this.tableData = res.data.data.list
                        this.total = res.data.data.total
                    })
                } else {
                    searchorder('recipient', this.input, this.pageNum, this.pageSize, this.token).then((res) => {
                        res.data.data.list.map((val) => {
                            return val.allPrice = '￥' + val.allPrice
                        });
                        res.data.data.list.map((val) => {
                            return val.payStatus == 0 ? val.payStatus = '已支付' : val.payStatus = '未支付'
                        });
                        res.data.data.list.map((val) => {
                            var date = new Date(val.create_time);
                            return val.create_time = date.toLocaleString()
                        });
                        this.tableData = res.data.data.list
                        this.total = res.data.data.total
                    })
                }
            },
            handleClick(row) {
                this.$router.push(`/order/orderDetail/${row._id}`);
            },
            hangbe() {
                this.token = localStorage.getItem('token')
                getlist(this.pageNum, this.pageSize, this.token).then((res) => {
                    res.data.data.list.map((val) => {
                        return val.allPrice = '￥' + val.allPrice
                    });
                    res.data.data.list.map((val) => {
                        return val.payStatus == 0 ? val.payStatus = '已支付' : val.payStatus = '未支付'
                    });
                    Date.prototype.toLocaleString = function () {
                        function addZero(num) {
                            if (num < 10)
                                return "0" + num;
                            return num;
                        }
                        return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate()) + " " +
                            addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
                    };
                    res.data.data.list.map((val) => {
                        var date = new Date(val.create_time);
                        return val.create_time = date.toLocaleString()
                    });
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                })
            }
        },
    }
</script>

<style>
    .order {
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

    .table {
        margin: 20px;
    }
</style>