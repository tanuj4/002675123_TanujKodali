const  bcrypt = require('bcrypt');
const Joi = require('joi');
var User = require("../models/User");
const salt = 11;

const schema = Joi.object({
    fullname: Joi.string().required().min(5),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)).required(),
  });

const updateschema = Joi.object({
    fullname: Joi.string().required().min(5),
    password: Joi.string().pattern(RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)).required(),
  });

module.exports ={
    uservalidate:async (body)=>{
        const validationResult = schema.validate(body);
        return validationResult.error;
    } ,

    upadteuservalidate:async (body)=>{
        const validationResult = updateschema.validate(body);
        return validationResult.error;
    } ,

    userExist:async (email)=>{
        let user = await User.findOne({ email });
        if (user) return true;
    },

    usersave: async ( fullname,password,email)=>{
        var rec = new User({
            fullname:fullname,
            password: await bcrypt.hash(password, salt),
            email:email
          });
          return await rec.save();
    },

    userupdate: async (fullname,email,password)=>{
        var update = {
            fullname:fullname,
            password: await bcrypt.hash(password, salt),
          };
        await User.findOneAndUpdate({email},update)

        return await User.findOne({email})
    },

    userdelete: async (email)=>{
        return await User.deleteOne({email})
    },

    usergetAll: async()=>{
        return await User.find()
    },

    usercheck: async(email,password)=>{
        let user = await User.findOne({email})
        if((await bcrypt.compare(password, user.password)))
        {
            return true;
        }
        return false;
    }
};
