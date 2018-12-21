const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { Pool } = require('pg');
const dotenv = require('dotenv');
const connectionString ='postgresql://admin:admin@localhost:5432/userPortfolio'
const pool = new Pool({ connectionString: connectionString 
});

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();

app.get('/', (req, res) =>{res.render('index')});

app.post('/', (req, res, error) =>{

const newContact = [
        req.body.name,
        req.body.company,
        req.body.email,
        req.body.number,
        req.body.description]

const text = ('INSERT INTO users (name, company, email, number, description) values ($1, $2, $3, $4, $5)')

pool.query(text, newContact ,(err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0]);       
    }   
})
   res.redirect('/')
})

app.listen(port, () => console.log(`magic happening here ${port}!`))


      
