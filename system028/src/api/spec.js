import server from '../util/request';

export function getspec(pageSize,pageNum,token){
    return server({
        url:"/api/manage/sysAttr/list",
        method:"get",
        params:{
            pageSize:pageSize,
            pageNum:pageNum,
        },
        headers: {
            'Authorization':token
        }
    })
}

export function getcate(categoryId,token){
    return server({
        url:"/api/manage/category/info",
        method:"GET",
        params:{
            categoryId:categoryId
        },
        headers: {
            'Authorization':token
        }
    })
}

export function updatespec(_id,name,category_id,option,token){
    return server({
        url:"/api/manage/sysAttr/update",
        method:"post",
        data:{
            _id:_id,
            name:name,
            category_id:category_id,
            option:option
        },
        headers: {
            'Authorization':token
        }
    })
}

export function deletespec(_id,token){
    return server({
        url:"/api/manage/sysAttr/delete",
        method:"post",
        data:{
            _id:_id,
        },
        headers: {
            'Authorization':token
        }
    })
}

export function addspec(name,category_id,option,token){
    return server({
        url:"/api/manage/sysAttr/add",
        method:"post",
        data:{
            name:name,
            category_id:category_id,
            option:option
        },
        headers: {
            'Authorization':token
        }
    })
}

export function searchspec(value,pageSize,pageNum,token){
    return server({
        url:"/api/manage/sysAttr/search",
        method:"get",
        params:{
            value:value,
            pageSize:pageSize,
            pageNum:pageNum
        },
        headers: {
            'Authorization':token
        }
    })
}

export function get(id,token){
    return server({
        url:"/api/manage/sysAttr/get",
        method:"get",
        params:{
            id:id
        },
        headers: {
            'Authorization':token
        }
    })
}