import User from "../models/user";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

module.exports = {
    async create(req, res) {
        try {
            const {email, password} = req.body

            // validations
            if(email == ""){
                return res.status(400).json({status: 400, message: "Preencher Email!"})
            }
            if(password.length < 4){
                return res.status(400).json({status: 400, message: "A senha deve ter pelo menos 4 caracteres!"})
            }

            const findUser = await User.findOne({email: email})

            if(findUser){
                return res.status(400).json({status: 400, message: "Email já cadastrado!"})
            }

            // Password Hashing
            const salt = bcrypt.genSaltSync(10)
            const passwordHash = bcrypt.hashSync(password, salt)

            const result = await User.create({email: email, password: passwordHash})

            return res.status(200).json(result)

        } catch (error) {
            return res.status(400).json({status: 400, message: error.message})
        }
         
    },
    
    async login(req, res) {
        try {
            const {email, password} = req.body

            // validations
            if(email == ""){
                return res.status(400).json({status: 400, message: "Preencher Email!"})
            }
            if(password.length < 4){
                return res.status(400).json({status: 400, message: "A senha deve ter pelo menos 4 caracteres!"})
            }

            const findUser = await User.findOne({email: email})

            if(!findUser){
                return res.status(400).json({status: 400, message: "Usuário não cadastrado!"})
            }

            // Validate the Password
            var validation = false
            if(email == findUser.email){
                validation = bcrypt.compareSync(password, findUser.password)
            }

            // Return token
            if(validation == true){
                const secretKey = process.env.AUTH_SECRET_KEY
                try {
                    const token = jwt.sign({
                        id: findUser.id,
                        name: findUser.name,
                        role: findUser.role
                    },
                    secretKey
                    )

                    return res.status(200).json({message: "Usuário autenticado com sucesso! Colocque o token de liberação nas suas requisições", token: `Bearer ${token}`})

                } catch (error) {
                    console.log(error)
                }

            }else{
                return res.status(422).json({status: 422, message: "Senha invalida!"})
            }

        } catch (error) {
            return res.status(400).json({status: 400, message: error.message})
        }
    }
}