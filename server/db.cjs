const mongoose = require('mongoose')

const url = `mongodb+srv://jer:<jer>@cluster0.4mlajb4.mongodb.net/?retryWrites=true&w=majority`;


const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })