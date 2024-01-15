import express from 'express'
const app = express();
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';
import session from 'express-session'
import flush from 'connect-flash'

//db
connectDB();



//cors 
app.use(cors());

//json middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static("./public")) //static folder
// app.use(express.static(__dirname + '/public'));

app.set('view engine', "ejs");
app.set('views', 'views');

app.use(session({
    secret:'secret',
    cookie:{maxAge:60000},
    resave:false,
    saveUninitialized:false
}));

app.use(flush());


//home
app.get("/", (req, res) => {
    res.render("index.ejs",{message:req.flash('message')})
});

app.get('/login',(req,res) => {
    res.render("login.ejs",{message:req.flash('message')})
});

app.use('/api/auth', authRoutes)

//server
app.listen(process.env.PORT, () => {
    console.log("api server running on port : " , process.env.PORT)
});

