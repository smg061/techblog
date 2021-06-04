const {Post} = require('../models');

const postData = [
    {
        "title": "MVC",
        "body": "MVC is important",
        "user_id": 1
    },
    {
        "title": "About machine learning models",
        "body": "Machine learning is just spicy statistics",
        "user_id": 1
    },
    {
        "title": "About nocode",
        "body": "No-code is just adding another middleman to software development.",
        "user_id": 2
    },
    {
        "title": "lore ipsum",
        "body": "placeholderplaceholderplaceholderplaceholder",
        "user_id": 2
    },
    {
        "title": "Test",
        "body": "TestTestTestTestTestTestTestTestTestTestTestTestTest",
        "user_id": 3
    },
    {
        "title": "TestTestTestTestTestTestTestTestTest",
        "body": "TestTestTestTestTestTestTestTest",
        "user_id": 4
    },
    {
        "title": "TestTestTestTestTest",
        "body": "TestTestTestTestTestTestTestTestTestTest",
        "user_id": 1
    },
    {
        "title": "TestTestTestTestTestTestTestTest",
        "body": "TestTestTestTestTestTestTestTestTestTestTest",
        "user_id": 3
    }
  ]


const seedPosts = () => Post.bulkCreate(postData);
module.exports = {seedPosts}