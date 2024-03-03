
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config'

export const useBlogs = ()=>{
    const [loading , setLoading] = useState(false)
    const [blogs , setBlogs] = useState([])


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`).then((res)=>{
            setBlogs(res.data)
            setLoading(false)
        })
    })

    return{
        loading,
        blogs
    }
}