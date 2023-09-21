
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Blog = require('./blog');
const Comment = sequelize.define('Comment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});

Comment.belongsTo(Blog);

module.exports = Comment;

