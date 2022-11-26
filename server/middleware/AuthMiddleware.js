const tokenHelper = require('../helper/Token')
var AuthMiddleware = {
    authorizeUser: (req, res, next, role) => {
        data = tokenHelper.getDataFromToken(req.cookies.token)
        if (data === 0 || !data.user || data.user.role!=role)
            res.status(403).send({
                status: 403,
                message: 'Bad authentication'
            })
        else {
            req.user = data.user
            next()
        }
    },
    isContributor: (req, res, next) => {
        this.authorizeUser(req,res,next,0)
    },
    isPartner: (req, res, next) => {
        this.authorizeUser(req,res,next,1)
    },
    isAdmin: (req, res, next) => {
        this.authorizeUser(req,res,next,2)
    }
}

module.exports = AuthMiddleware