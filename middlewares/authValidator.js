const Joi =require('joi')

const Shema= Joi.object({
    userName:string().min(4).required(),
    password:string().min(8).require()
})

module.exports=Shema