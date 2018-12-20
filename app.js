const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.render('index')
});

    const contact = [{
        name: 'James',
        company: 'TicketSwap',
        email: 'james.rowbotham@hotmail.com',
        phone: '0650406209',
        description: 'lets work together'
     }]

app.post('/', (req, res) =>{  
    const newContact = {
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.number,
        description: req.body.description
    }
    contact.push(newContact)
        res.send(contact)
})

app.listen(port, () => console.log(`magic happening here ${port}!`))