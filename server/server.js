const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shoppingRouter = require('./routes/shopping.router')
const resetRouter = require('./routes/reset.router.js')
const clearRouter = require('./routes/clear.router.js')
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/shopping', shoppingRouter)
app.use('/api/shopping-reset', resetRouter)
app.use('/api/shopping-clear', clearRouter)

// Create your API routes in a separate file
// and plug them in here with `app.use()`

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
