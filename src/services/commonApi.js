import axios from "axios"

// Configuration Of API Format do Here:
const commonApi = async(reqMethod, reqUrl, reqBody)=>{
   const reqConfig = {
        url : reqUrl,
        method : reqMethod,
        header : {'content-type' : 'application/json'},
        data : reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err => {
        return err
    })
}

export default commonApi