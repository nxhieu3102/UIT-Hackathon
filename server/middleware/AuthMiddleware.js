const tokenHelper = require('../helper/Token')
const { UserRoleEnum } = require('../constants/Enum')
var AuthMiddleware = {
    authorizeUser: (req, res, next, role) => {
        console.log("tests");
        data = tokenHelper.getDataFromToken(req.cookies.token)
        if (data === 0 || !data.user || data.user.role!=role)
            res.status(403).send({
                status: 403,
                message: 'Bad authentication'
            })
        else {
            console.log(data.user);
            req.user = data.user
            next()
        }
    },
    isContributor: (req, res, next) => {
        this.authorizeUser(req,res,next,UserRoleEnum.contributor)
    },
    isPartner: (req, res, next) => {

        authorizeUser(req,res,next,UserRoleEnum.partner)
        
    },
    isAdmin: (req, res, next) => {
        this.authorizeUser(req,res,next,UserRoleEnum.admin)
    }
}

module.exports = AuthMiddleware