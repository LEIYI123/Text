import server from '../util/request';

export function takeLogin(obj){
       
    return server({
        url:"/api/login",
        method:"POST",
        data:obj
    })

}