
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config'

export const useBlogs = ()=>{
    const [loading , setLoading] = useState(true)
    const [blogs , setBlogs] = useState([])


    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                // Authorization : localStorage.getItem('token')
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.Vvopcb04joTYWUr3NJsECRrhBNvghDjT6mOfU56rESk"
            }
        }).then((res)=>{
            setBlogs(res.data.blogs)
            setLoading(false)
        }).catch((error) => {
            console.error(error);
            setLoading(false);
        });
    },[])

    return{
        loading,
        blogs
    }
}