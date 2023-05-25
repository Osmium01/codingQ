const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = "mongodb+srv://placement:aditya12@cluster0.zibshld.mongodb.net/placementmern?retryWrites=true&w=majority"// Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
const mongoB = async () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
    }).then(() => {
        console.log("MongoDB Connected…")
    
}).catch(err => console.log(err))
}

module.exports = mongoB;