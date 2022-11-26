const UserRoleEnum = {
    contributor: 0,
    partner: 1,
    admin: 2
}

const PartnerQueueStatusEnum = {
    approved: 1,
    pending: 0,
    disapproved: -1
}
const BillStatusEnum = {
    success: 1,
    pending: 0,
    fail: -1
}

const CategoriesRubbish = {
    plastic: 0,
    paper: 1,
    cloth: 2
}


const PointOfRubbish = {
    plastic: 1,
    paper: 0.7,
    cloth: 0.5
}
module.exports = { UserRoleEnum, PartnerQueueStatusEnum, BillStatusEnum, CategoriesRubbish, PointOfRubbish }
