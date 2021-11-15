const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:$(PORT)`);
    });
});















/*
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// set up helpers
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
// originally was set to false ------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// need to setup API routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
*/
