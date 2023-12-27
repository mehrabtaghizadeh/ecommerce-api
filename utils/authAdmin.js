import jwt from "jsonwebtoken"

export const authAdmin = async (req,res,next) => {
      const {token} = req.cookies
      try { 
          const data = jwt.verify(token,process.env.JWT)
          if(data.isAdmin === true) {
            next()
          }else{
           res.status(500).json({message:"you are not admin"})
          }
      } catch (error) {
        res.status(404).json({message:"you are not admin"})
      }
}