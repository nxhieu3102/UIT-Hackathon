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
module.exports = { UserRoleEnum, PartnerQueueStatusEnum, BillStatusEnum }
