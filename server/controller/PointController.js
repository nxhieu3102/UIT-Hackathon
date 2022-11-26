const  mongoose  = require("mongoose");
const { PointOfRubbish } = require("../constants/PointConverter");
const Bill = require("../model/Bill");
const Point = require("../model/Point");

class PointController {
    async updateUserPoint(userId) {
        const bills = await Bill.find({ userId: userId });
        var pointValue=0;
        console.log(bills)
        bills.forEach(bill=>{
            bill.rubbish.forEach(ele=>{
                pointValue+=ele.weight*PointOfRubbish[ele.category]
            })
        })
        const newPoint=new Point({
            userId:mongoose.Types.ObjectId(userId),
            value:pointValue
        })
        await newPoint.save()
        return newPoint
    }
}
module.exports=new PointController