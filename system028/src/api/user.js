import server from '../util/request';

export function getuser(pageNum,pageSize,token){
    return server({
        url:"/api/manage/user/list",
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

export function deleteuser(userId,token){
    return server({
        url:"/api/manage/user/delete",
        method:"POST",
        data:{
            userId:userId
        },
        headers: {
            'Authorization':token
        }
    })
}

export function updateuser(obj,token){
    return server({
        url:"/api/manage/user/update",
        method:"POST",
        data:{...obj},
        headers: {
            'Authorization':token
        }
    })
}

export function adduser(obj,token){
    return server({
        url:"/api/manage/user/add",
        method:"POST",
        data:{...obj},
        headers: {
            'Authorization':token
        }
    })
}