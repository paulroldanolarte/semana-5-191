const routerx = require('express-promise-router');
const categoriaController = require ('../../controllers/CategoriaController'); 
const auth = require('../../middlewares/auth');
const router = routerx();


//pruebas front se quita: ,auth.verifyUsuario


//api/categoria/list   [GET]
router.get('/list', categoriaController.list);
//api/categoria/add    [POST]
router.post('/add',auth.verifyUsuario, categoriaController.add);
//api/categoria/update  [PUT]
router.put('/update' ,auth.verifyUsuario, categoriaController.update);
//api/categoria/activate [PUT]
router.put('/activate',auth.verifyUsuario , categoriaController.activate);
//api/categoria/deactivate  [PUT]
router.put('/deactivate' ,auth.verifyUsuario,categoriaController.deactivate);




module.exports = router;