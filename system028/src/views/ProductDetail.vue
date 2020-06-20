<template>
    <div class="detail">
        <el-page-header title="商品详情" @back="goBack"></el-page-header>
        <el-divider></el-divider>
        <div class="warp">
            <ul>商品名称</ul>
            <p>{{name}}</p>
        </div>
        <el-divider><i class="el-icon-coordinate"></i></el-divider>
        <div class="warp">
            <ul>商品描述</ul>
            <p>{{descript}}</p>
        </div>
        <el-divider><i class="el-icon-collection-tag"></i></el-divider>
        <div class="warp">
            <ul>商品价格</ul>
            <p>{{price}}</p>
        </div>
        <el-divider><i class="el-icon-shopping-cart-full"></i></el-divider>
        <div class="warp">
            <ul>所属分类</ul>
            <p>{{spec}}</p>
        </div>
        <el-divider><i class="el-icon-chat-line-round"></i></el-divider>
        <div class="warp">
            <ul>规格属性</ul>
            <p>{{desc}}</p>
        </div>
        <el-divider><i class="el-icon-medal"></i></el-divider>
        <div class="warp">
            <ul>商品图片</ul>
            <p>
                <img v-for='(item,index) in imgs' :src="item" alt="" :key="index" width="100px">
            </p>
        </div>
        <el-divider><i class="el-icon-medal"></i></el-divider>
    </div>
</template>

<script>
    import { getlist } from '../api/product'
    import { getcate, get } from '../api/spec'
    export default {
        data() {
            return {
                name: '',
                descript: '',
                price: '',
                spec: '',
                desc: '',
                id: '',
                pageNum: '',
                pageSize: '',
                imgs: []
            }
        },
        mounted() {
            this.handubg()
            console.log(this.$route.params.id)
        },
        methods: {
            goBack() {
                this.$router.push('/product/productList');
            },
            handubg() {
                this.id = this.$route.params.id
                this.token = localStorage.getItem('token')
                getlist(this.pageNum, this.pageSize, this.token).then((res) => {
                    let arr = res.data.data.list.filter((val) => {
                        return val._id == this.id
                    })
                    this.name = arr[0].name
                    this.descript = arr[0].desc
                    this.price = '￥' + arr[0].price
                    this.imgs = arr[0].imgs
                    getcate(arr[0].categoryId, this.token).then((req) => {
                        this.spec = req.data.data.name
                        console.log(req.data)
                        get(req.data.data._id, this.token).then((que) => {
                            this.desc = que.data.data[0].name
                        })
                    })
                })
            }
        },
    }
</script>

<style>
    .detail {
        height: 100%;
        margin: 24px;
        background: white;
    }

    .el-page-header__left {
        margin-left: 20px;
        color: blue;
    }

    .el-page-header__title {
        height: 60px;
        font-size: 20px;
        line-height: 60px;
    }

    .warp {
        width: 100%;
        display: flex;
    }

    .warp ul {
        height: 23px;
        color: #409eff;
        background: #ecf5ff;
        border-radius: 5px;
        margin-left: 20px;
    }

    .warp p {
        margin-left: 20px;
    }
</style>