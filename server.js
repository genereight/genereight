const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const SiteInfo = require('./models/siteInfo')
const welcome = require('./controllers/welcome')
const {siteInformation} = require('./controllers/welcome')
const Handlebars = require('Handlebars')
let fs = require('fs')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`LIVE on ${port}`)
  })
app.use(bodyParser.urlencoded())

Handlebars.registerPartial('head-er', '{{name}}')
Handlebars.registerPartial('foot-er', '{{name}}')
Handlebars.registerPartial('head-er', '{{name}}')
Handlebars.registerPartial('welcome', '{{name}}')
Handlebars.registerHelper('siteInformation', '{{name}}')

const options = {
  dotfiles: 'ignore',
  extensions: ['htm', 'html'],
  index: false
}

app.use(express.static(path.join(__dirname, 'views'), options))

app.get('/', (req, res) => {
  if(siteInformation === undefined){
    res.render('welcome')
  } else {
    res.render('index', {siteInformation})
  }

});

app.get('/submit', (req, res) => {
  res.render('index')
})

app.get('/welcome', (req, res) =>{
  res.render('welcome');

});
app.post('/submit', (req, res) => {
  let siteInformation = req.body
  fs.writeFile(`${siteInformation.siteName}.json`, JSON.stringify(siteInformation), (err) => {
    if (err){
      console.log('Something Broke')
      return
    } else {
    }
  })
  res.render('index', {siteInformation})

})
app.listen(app.get('port'), () => {

app.get('port') + `; press Ctrl-C to terminate.`
});
