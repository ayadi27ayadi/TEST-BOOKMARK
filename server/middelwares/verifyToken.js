const jwt = require("jsonwebtoken");
module.exports.verifyToken = (req, res, next) => {
  const token = req.header("access_token");
  if (!token) {
    return res.status(401).json('token not found')
  }
 try {
    const verifyUser = jwt.verify(token, process.env.TOKEN_KEY)
    req.verifyUser = verifyUser
     next()
 } catch (error) {
     return res.status(403).json({error, message:'token is not valide'})
 }
};