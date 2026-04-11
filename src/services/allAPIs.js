import { base_url } from "./base_url";
import commonApi from "./commonApi";

//Specific API requests for all kind of CRUD Operations :-
    //POST(Because we need to Upload Videos and related Details in AddVideo)
    export const addVideo= async(data)=> {
        return await commonApi('POST',` ${base_url}/allVideos`,data)
    }

    export const getVideo = async()=> {
        return await commonApi('GET',`${base_url}/allVideos`,'')
    }

    export const deleteVideo = async(id)=> {
        return await commonApi('DELETE',`${base_url}/allVideos/${id}`,{})
    }

    // Category Related APIs:
    export const addCategory = async(data)=> {
        return await commonApi('POST', `${base_url}/categories`, data)
    }

    export const getCategory = async()=> {
        return await commonApi('GET', `${base_url}/categories`, '')
    }

    export const deleteCategory = async(id)=> {
        return await commonApi('DELETE', `${base_url}/categories/${id}`, {})
    }

    
// export const allAPIs = {addVideo, getVideo, deleteVideo} 