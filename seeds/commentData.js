const {Comment} = require('../models');

const commentData = [
    {
        "body": "MVC is sooooo important bestie thanks for saying it!",
        "user_id": 1,
        "post_id": 1
    },
    {
        "body": "lmao just use django you nerd",
        "user_id": 3,
        "post_id": 1
    },
    {
        "body": "Spitting facts right here lol",
        "user_id": 1,
        "post_id": 2
    },
    {
        "body": "just hire software developers lol",
        "user_id": 2,
        "post_id": 3
    },
    {
        "body": "lore ipsum",
        "user_id": 3,
        "post_id": 2
    },
  ]
  const seedComments = () => Comment.bulkCreate(commentData);
  module.exports = {seedComments}