const mongoose = require ("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@studentdata.fiifh.mongodb.net/${process.env.DB_DATABASENAME}?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection is Successful");
}).catch((e) => {
    console.log("No Connection");
})