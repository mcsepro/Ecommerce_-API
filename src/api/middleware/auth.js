const jwt = require('jsonwebtoken')
const Product = require('../models/product')
const auth = async(req, res, next) => {
try {
  const token = req.header('Authorization').replace('Bearer ', '')
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const product = await User.findOne({ _id: decoded._id, 'tokens.token':token })
if(!product) {
throw new Error
}
  req.token = token
  req.product = product
next()
} catch (error) {
res.status(401).send({error: "Authentication required"})
 }
}
module.exports = auth