const sequelize = require('../config/connection');
const { Blog, Comment, User } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');