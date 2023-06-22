import axios from "axios"
// const baseUrl = "https://fakestoreapi.com/products"


export const getProducts = async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products")
    return data
}

export const getProductDetails = async(id)=>{
    const {data} = await axios.get("https://fakestoreapi.com/products"+`/${id}`)
    return data;
}
// export default getProducts  