const Router = require('koa-router');
const router = new Router();

const Auth = require('./controllers/auth');

router.post('/auth', Auth.autenticar);

module.exports = router;

/*rotas base a inserir:
/clientes POST e PUT;
/usuarios POST;
/cobrancas POST e PUT;
/relatorios GET
*/