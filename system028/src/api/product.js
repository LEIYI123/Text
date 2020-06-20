import server from '../util/request';

export function getlist(pageNum,pageSize,token){
    return server({
        url:"/api/manage/product/list",
        method:"GET",
        params:{
            pageNum:pageNum,
            pageSize:pageSize
        },
        headers: {
            'Authorization':token
        }
    })
}

export function searchprod(obj,token){
    return server({
        url:"/api/manage/product/search",
        method:"GET",
        params:{ ...obj },
        headers: {
            'Authorization':token
        }
    })
}

export function updateStatus(productId,status,token){
    return server({
        url:"/api/manage/product/updateStatus",
        method:"POST",
        data:{
            productId:productId,
            status:status
        },
        headers: {
            'Authorization':token
        }
    })
}

export function updateproduct(obj,token){
    return server({
        url:"/api/manage/product/update",
        method:"POST",
        data:{...obj},
        headers: {
            'Authorization':token
        }
    })
}

export function addproduct(obj,token){
    return server({
        url:"/api/manage/product/add",
        method:"POST",
        data:{...obj},
        headers: {
            'Authorization':token
        }
    })
}
