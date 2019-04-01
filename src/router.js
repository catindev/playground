const router = require('express').Router()

router.get('/', (request, response) => response.json({
    name: 'Hi!',
    version: '1.0'
}))

router.all('*', (request, response) => response.status(404).json({
    status: 404,
    message: '🤷‍♂️'
}))

module.exports = router