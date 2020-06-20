import server from '../util/request';

export function takeCategory(pageNum,pageSize,token){
    return server({
        url:"/api/manage/category/list",
        method:"GET",
        params:{
            pageNum:pageNum,
            pageSize:pageSize,
        },
        headers: {
            'Authorization':token
        }
    })
}

export function updateCategory(categoryId,categoryName,token){
    return server({
        url:"/api/manage/category/update",
        method:"POST",
        data:{
            categoryId:categoryId,
            categoryName:categoryName,
        },
        headers: {
            'Authorization':token
        }
    })
}

export function addCategory(parentId,categoryName,token){
    return server({
        url:"/api/manage/category/add",
        method:"POST",
        data:{
            parentId:parentId,
            categoryName:categoryName,
        },
        headers: {
            'Authorization':token
        }
    })
}

export function getCategory(parentId,pageNum,pageSize,token){
    return server({
        url:"/api/manage/category/list",
        method:"GET",
        params:{
            parentId:parentId,
            pageNum:pageNum,
            pageSize:pageSize
        },
        headers: {
            'Authorization':token
        }
    })
}