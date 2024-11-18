import axios from "axios";

const cilent = axios.create({
    baseURL: "http://localhost:8001" 
})

export async function getProducts(){
    const {data} = await cilent("/product")
return data
}