const mongoose = require('mongoose')
const db = mongoose.connection;

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://ShreyanshAgrawal:e50cf28@cluster0.pf6t0zk.mongodb.net/lmnitHackathon`);

db.on('error', console.error.bind(console, 'error connecting to db'))

db.once('open', () => {
    console.log('successfully connected to db')
})  