import Product from "../models/product.model.js"


const productService = {
    createProduct: async function(product){
        return await Product.create(product)
    },
    getProducts: async function(){
        return await Product.find()
    }
}

export default productService