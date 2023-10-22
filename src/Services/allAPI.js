import {commonAPI} from "./commonAPI"
import {serverURL} from "./serverURL"

export const uploadContact = async (body)=>{
    return await commonAPI("POST",`${serverURL}/contacts`,body)
}

export const viewContacts = async (body)=>{
    return await commonAPI("GET",`${serverURL}/contacts`,body)
}

export const getAContact = async (id)=>{
    return await commonAPI("GET",`${serverURL}/contacts/${id}`,"")
}
export const deleteAContact = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/contacts/${id}`,{})
}
export const uploadFav = async (body)=>{
    return await commonAPI("POST",`${serverURL}/favourite`,body)
}

export const viewFav = async (body)=>{
    return await commonAPI("GET",`${serverURL}/favourite`,body)
}

export const updateContact= async(id,body)=>{
    return await commonAPI("PUT",`${serverURL}/contacts/${id}`,body)
} 