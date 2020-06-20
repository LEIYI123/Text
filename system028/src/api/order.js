import server from '../util/request';

export function getlist(pageNum,pageSize,token){
    return server({
        url:"/api/manage/order/list",
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

export function searchorder(type,value,pageNum,pageSize,token){
    return server({
        url:"/api/manage/order/search",
        method:"GET",
        params:{
            type:type,
            value:value,
            pageNum:pageNum,
            pageSize:pageSize
        },
        headers: {
            'Authorization':token
        }
    })
}   

export function getinfo(value,token){
    return server({
        url:"/api/manage/order/info",
        method:"GET",
        params:{
            value:value
        },
        headers: {
            'Authorization':token
        }
    })
}