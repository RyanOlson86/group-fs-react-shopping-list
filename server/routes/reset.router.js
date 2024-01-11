const router = require('express').Router()
const pool = require('../modules/pool')

router.delete('/', (req, res) => {
    console.log('in delete');
    const queryText = `DELETE FROM list WHERE "bought"=TRUE;`

    pool.query(queryText)
    .then((result) => {
        res.sendStatus(200)
    }).catch((err) => {
        console.log('Error in /api/shopping/reset DELETE', err);
        res.sendStatus(500)
    })
})

module.exports = router