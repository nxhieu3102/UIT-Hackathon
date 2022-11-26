const tokenHelper = require('../helper/Token')
var AuthMiddleware = {
    authorizeUser: (req, res, next) => {
        data = tokenHelper.getDataFromToken(req.cookies.token)
        if (data === 0 || !data.user)
            res.status(403).send({
                status: 403,
                message: 'Bad authentication'
            })
        else {
            req.user = data.user
            next()
        }
    }
}

module.exports = AuthMiddleware