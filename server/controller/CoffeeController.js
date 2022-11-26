const Coffee = require("../model/Coffee");

const CoffeeController = {

    //create coffee
    createCoffee: async(req, res) => {
        const newCoffee = new Coffee(req.body);
        try {
            const saveCoffee = await newCoffee.save();
            res.status(200).json(saveCoffee);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //get all coffee
    getAllCoffee: async (req, res) => {
        try {
            const allCoffees = await Coffee.find();
            res.status(200).json(allCoffees);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

module.exports = CoffeeController;