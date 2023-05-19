import jwt from "jsonwebtoken"

export function checkUserToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) {
        return res.status(401).json({message: "Acesso negado!"})
    }

    try {
        const secretKey = process.env.AUTH_SECRET_KEY

        var dataUser = {}
        jwt.verify(token, secretKey, (err, decoded) => {
            if(err){
                throw new Error(err)
            }else{
                dataUser = decoded
            }
        })
        
        if(dataUser != {}){
            next()
        }else{
            return res.status(400).json({status: 400, message: "Acesso não autorizado"})
        }


    } catch (error) {
        return res.status(400).json({message: "Token invalido!"})
    }
}