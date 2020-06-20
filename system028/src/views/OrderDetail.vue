<template>
    <div class="detail">
        <el-page-header title="订单详情" @back="goBack">
        </el-page-header>
        <hr>
        <div class="warp">
            <ul>
                <li>
                    <p>订&nbsp;单&nbsp;号</p><span>{{orderId}}</span>
                </li>
                <li>
                    <p>订&nbsp;单&nbsp;人</p><span>{{recipient}}</span>
                </li>
                <li>
                    <p>创建时间</p><span>{{create_time}}</span>
                </li>
                <li>
                    <p>订单状态</p><span>{{payStatus}}</span>
                </li>
                <li>
                    <p>商品价格</p><span>{{allPrice}}</span>
                </li>
                <li>
                    <p>支付方式</p><span>{{status}}</span>
                </li>
            </ul>
        </div>
        <el-divider><i class="el-icon-shopping-cart-full"></i></el-divider>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="商品名称" width="180">
            </el-table-column>
            <el-table-column label="商品图片" width="180">
                <el-image v-for='url in orderurl' style="width: 100px; height: 100px" :key="url" :src="url" fit='cover'>
                </el-image>
            </el-table-column>
            <el-table-column prop="info" label="商品信息">
            </el-table-column>
            <el-table-column prop="price" label="单价">
            </el-table-column>
            <el-table-column prop="count" label="数量">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    import { getinfo } from '../api/order'
    export default {
        data() {
            return {
                tableData: [],
                id: '',
                orderId: '',
                payStatus: '',
                paymentMethod: '',
                recipient: '',
                create_time: '',
                allPrice: '',
                status:'',
                show: true,
                orderurl: []
            }
        },
        mounted() {
            this.id = this.$route.params.id
            this.handbod()
        },
        methods: {
            goBack() {
                this.$router.push('/order/orderList');
            },
            handbod() {
                this.token = localStorage.getItem('token')
                getinfo(this.id, this.token).then((res) => {
                    this.tableData = res.data.data.details
                    for (let val of res.data.data.details) {
                        this.orderurl = val.imgs
                        val.price = '￥'+val.price
                    }
                    this.orderId = res.data.data.orderId
                    this.recipient = res.data.data.recipient
                    res.data.data.allPrice = '￥' + res.data.data.allPrice
                    res.data.data.status == 1?res.data.data.status='支付宝':res.data.data.status='微信'
                    res.data.data.payStatus == 0 ? res.data.data.payStatus = '已支付' : res.data.data.payStatus = '未支付'
                    Date.prototype.toLocaleString = function () {
                        function addZero(num) {
                            if (num < 10)
                                return "0" + num;
                            return num;
                        }
                        return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate()) + " " +
                            addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
                    };
                    var date = new Date(res.data.data.create_time);
                    res.data.data.create_time = date.toLocaleString()
                    this.allPrice = res.data.data.allPrice
                    this.create_time = res.data.data.create_time
                    this.payStatus = res.data.data.payStatus
                    this.status = res.data.data.status
                    console.log(res.data.data)
                })
            }
        }
    }
</script>

<style>
    li {
        list-style: none;
    }

    .detail {
        background: white;
    }

    .el-page-header {
        height: 60px;
        line-height: 60px;
        margin-left: 24px;
    }

    .el-icon-back {
        color: blue;
    }

    .el-page-header__title {
        font-size: 20px;
    }

    .warp ul {
        margin: 20px;
        margin-left: 30px;
        width: 150px;
        text-align: left;
    }

    .warp ul li {
        width: 300px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 14px;
    }

    .warp ul li span {
        width: 50px;
        display: inline-block;
        margin-left: 20px;
    }

    .detail .warp ul li:nth-of-type(3) span{
        height: 20px;
        width: 200px;
    }

    .warp ul li p {
        height: 20px;
        padding: 3px;
        color: #409eff;
        background: #ecf5ff;
        margin-right: 10px;
        box-sizing: border-box;
        border-radius: 8px;
    }

    .el-table {
        margin: 20px;
    }
</style>