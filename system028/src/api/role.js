import server from '../util/request';

export function getlist(pageNum,pageSize,token){
    return server({
        url:"/api/manage/role/list",
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

export function addrole(roleName,token){
    return server({
        url:"/api/manage/role/add",
        method:"POST",
        data:{
            roleName:roleName
        },
        headers: {
            'Authorization':token
        }
    })
}

export function updaterole(_id,menus,auth_time,auth_name,token){
    return server({
        url:"/api/manage/role/update",
        method:"POST",
        data:{
            _id:_id,
            menus:menus,
            auth_time:auth_time,
            auth_name:auth_name
        },
        headers: {
            'Authorization':token
        }
    })
}