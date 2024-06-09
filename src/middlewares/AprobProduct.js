export default function AprobProduct(req, res, next) {
    console.log('***** Producto Aprobado ******')
    console.log(req.body)
    next()
}