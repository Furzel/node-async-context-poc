const express = require('express')
const asyncContext = require('./async-context');
const { log } = require('./logger');


function delay(time) {
    return new Promise((res) => {
        setTimeout(() => {
            return res();
        }, time);
    });
};


/* SERVER PART */
const app = express()
const port = 3000

app.use(asyncContext.middleware);

app.get('/ping', (req, res) => {
    log('PING received');
    res.send('PONG');
})

app.get('/io', async (req, res) => {
    log('IO received');

    setTimeout(async () => {
        log('IO first IO finished');

        await delay(1000);
        log('IO second IO finisehd');

        for (let i = 0; i < 10; i++) {
            log('IO processing stuff');
            await delay(500);
            log('IO stuff processed');
        }

        res.send('High IO task finished');
        log('IO all data sent');
    });
});

app.listen(port, () => {
    log(`Example app listening at http://localhost:${port}`)
})

