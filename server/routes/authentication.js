const { Router } = require('express');
const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
   res.send('works fine')
})

module.exports = router;