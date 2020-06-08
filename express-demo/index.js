const config = require('config');
const debug = require('debug')('app');
const express = require('express');
const Joi = require('@hapi/joi');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const app = express();
const courses = require('./routes/courses');
const home = require('./routes/home');

app.set('view engine', 'pug');
app.set('views', './views') // default

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('morgan enabled');
}

app.use(logger);
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port}`));
