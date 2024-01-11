const router = require('express').Router()
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    console.log('in get');
    const queryText = ``
    pool.query(queryText)
    .then((result) => {
        console.log(result);
        res.send(result.rows)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
    console.log('in post',req.body);
    res.sendStatus(201)
})



module.exports = router