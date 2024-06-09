// if (Number(req.body.stock) < 0) {
//     return res.status(400).json({ status: 400, message: `El stock debe ser mayor a 0 -> stock recibido: ${req.body.stock}` })
// }

const checkProduct = (req, res, next) => {
    if (Number(req.body.stock) < 0) {
        return res.status(400).json({ status: 400, message: `El stock debe ser mayor a 0 -> stock recibido: ${req.body.stock}` })
    }
    next()
}

export default checkProduct