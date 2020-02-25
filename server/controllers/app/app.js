const router = require('express').Router();

//router.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));

router.get('/test', (req, res) => res.send('Welcome to our API!'));

module.exports = router;
