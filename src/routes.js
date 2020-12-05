const Router = require('koa-router');
const router = new Router();

const Auth = require('./controllers/auth');

router.post('/auth', Auth.autenticar);

module.exports = router;