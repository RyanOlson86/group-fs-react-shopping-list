const router = require('express').Router()
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    // console.log('in get');
    const queryText = `SELECT * FROM "list";`
    pool.query(queryText)
        .then((result) => {
            // console.log(result.rows);
            res.send(result.rows)
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500)
        })
})

router.post('/', (req, res) => {
    // console.log('in post', req.body);
    const newItem = req.body
    const queryText = `
    INSERT INTO list ("item", "quantity", "unit")
VALUES 
($1, $2, $3);
    `
    const queryParams = [newItem.item, newItem.quantity, newItem.unit]
    if (newItem.item && newItem.quantity) {
        // console.log('in POST query');
        pool.query(queryText, queryParams)
            .then((result) => {
                // console.log('successful INSERT');
                res.sendStatus(201)
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(500)
    }


})

router.put('/:id', (req, res) => {
    console.log('in PUT');
    const queryText = `UPDATE list SET "bought"=TRUE WHERE "id"= $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(201)
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500)
        })

})

router.delete('/:deleteId', (req, res) => {
    console.log('in DELETE', req.params);
    const queryText = `DELETE FROM list WHERE "id"= $1;`
    pool.query(queryText, [req.params.deleteId])
        .then((result) => (
            res.sendStatus(200)
        )).catch((err) => {
            console.log(err);
            res.sendStatus(500)
        })
})



module.exports = router