import authModel from '../models/authModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

class authController {

    //User registration
    static userRegistration = async(req, res) => {
        const {name , email, password,phone} = req.body;
        try {
            //user exist
            if(name && email && password){
                const isUser = await authModel.findOne({email:email});
                if(isUser){
                    req.flash('message', "User already exist")
                    res.redirect('/',)
                  
                }else{
                    //password hashing
                    const genSalt = await bcryptjs.genSalt(10)
                    const hashedPassword = await bcryptjs.hash(password, genSalt);
                    
                    //save the new user
                    const newUser = authModel({
                        name,
                        email,
                        phone,
                        password : hashedPassword,
                    });

                    const resUser = await newUser.save();
                        if(resUser){
                            req.flash('message', "Register Successfully")
                            res.redirect('/',)    
                        }
                }
            }else {
                req.flash('message', "All fields are")
                res.redirect('/',)
               
            }
            
        } catch (error) {
            return res.status(400).json({message : error.message});
        }
    };


    
   
}

export default authController;