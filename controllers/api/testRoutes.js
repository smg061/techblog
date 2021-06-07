const router = require('express').Router();


router.get('/', async (req, res) => {
    res.send("Send route works")
})

router.post('/', async (req, res) => {
    res.send("post route works")
})

router.put('/', async (req, res) => {
    res.send("put route works")
})

router.delete('/', async (req, res) => {
    res.send("delete route works")
})

module.exports = router;