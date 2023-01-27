const app = require('express')()
const PORT = process.env.PORT || 5000;
const db = require('./config/mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));



app.use('/user', require('./routes/user_router'));
app.use('/post', require('./routes/post_router'));


app.get('/', (req, res) => {
    return res.json("Welcone to our LMNIT hackathon website");
})


app.listen(PORT, () => {
    console.log(`server live at ${PORT}`);
}); 