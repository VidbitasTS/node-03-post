'use strict';
console.log('index.js');

const ezpress = require('express');

const.app = express()

const PORT = 3000

app.get(('/', (request, response) => {
    response.send('okk')
}))

app.listen(PORT, () => { console.log('ok') })