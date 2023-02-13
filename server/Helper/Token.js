const jwt = require('jsonwebtoken')
const Token = {
  getDataFromToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY_TOKEN);
      return decoded
    } catch (err) {
      return 0
    }
  }
}
module.exports = Token