const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MysqlStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

//initialization 
const app = express();
require('./lib/passport');

//setint 
// app.set('/img',express.static(__dirname+'/public/img',{
//     maxAge:'12h'
// }));
// app.use('/font', express.static(__dirname + '/public/font', {
//     maxAge: '12h'
//   }));


app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')

}))
app.set('view engine', '.hbs');



//MIDDELWARE
app.use(session({
    secret: 'nico',
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore(database)
}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


//glabal variables 

app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;

    next();
});

//routes 
app.use(require("./routes/index"));
app.use(require("./routes/authentication"));
app.use("/pokemons",require("./routes/pokemons"))






//public 

app.use(express.static(path.join(__dirname,'public')))

//sataring the server 
app.listen(app.get('port'), () => {
    console.log('Esta funcionando en el puerto 4000', app.get('port'));
    console.log("http://localhost:4000");

}) 