<template>
    <div class="addUpdate">
        <el-page-header title="修改商品" @back="goBack"></el-page-header>
        <hr>
        <div class="wrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="商品描述" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop='price'>
                    <el-input type='number' placeholder="请输入价格" v-model="ruleForm.price">
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="商品分类" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择商品分类">
                        <el-option v-for='(item,key) in gatarry' :label="item" :value="item" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品图片">
                    <el-upload action="http://118.24.25.7:5000/api/manage/upload/" list-type="picture-card"
                        :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label='商品详情'>
                    <el-card style="height: 610px;">
                        <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;"
                            :options="editorOption">
                        </quill-editor>
                    </el-card>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
    import { getlist } from '../api/product'
    import { takeCategory } from '../api/category'
    import { quillEditor } from 'vue-quill-editor'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    export default {
        name: 'FuncFormsEdit',
        components: {
            quillEditor
        },
        data() {
            return {
                dialogImageUrl: '',
                imageUrl:'',
                dialogVisible: false,
                content: null,
                editorOption: {},
                id: '',
                gatarry: [],
                categoryId: '',
                pageNum: '',
                pageSize: '',
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    input2: '',
                    price: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, message: '至少3个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ],
                    price: [
                        { type: 'number', required: true, message: '请输入价格', trigger: 'blur' }
                    ]
                }
            }

        },

        mounted() {
            this.getlist()
        },

        methods: {
            goBack() {
                this.$router.push('/product/productList');
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            getlist() {
                this.id = this.$route.params.id
                this.token = localStorage.getItem('token')
                getlist(this.pageNum, this.pageSize, this.token).then((res) => {
                    let arr = res.data.data.list.filter((val) => {
                        return val._id == this.id
                    })
                    let getarry = arr[0]
                    console.log(getarry)
                    this.ruleForm.name = getarry.name
                    this.ruleForm.desc = getarry.desc
                    this.ruleForm.price = getarry.price
                    this.categoryId = getarry.categoryId
                    this.imageUrl = getarry.imgs[0]
                    console.log(this.dialogImageUrl)
                    this.getinfo()
                })
            },
            getinfo() {
                this.token = localStorage.getItem('token')
                takeCategory(this.pageNum, this.pageSize, this.token).then((res) => {
                    res.data.data.list.forEach((val) => {
                        this.gatarry.push(val.name)
                    })
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style>
    .addUpdate {
        margin: 24px;
        background: white;
    }

    .wrap {
        margin: 20px;
    }

    .el-page-header__left {
        margin-left: 20px;
    }

    .el-page-header__title {
        height: 60px;
        font-size: 20px;
        line-height: 60px;
    }
</style>