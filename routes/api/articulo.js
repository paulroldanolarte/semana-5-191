const routerx = require('express-promise-router');
// const router = require('express').Router();
const articuloController = require ('../../controllers/ArticuloController'); 
const auth = require('../../middlewares/auth');

//pruebas front se quita: ,auth.verifyUsuario


const router = routerx();
//api/articulo/list   [GET]
router.get('/list',articuloController.list); //agregue list*****
//api/articulo/add    [POST]
router.post('/add',articuloController.add);
//api/articulo/update  [PUT]
router.put('/update',auth.verifyUsuario ,articuloController.update);
//api/articulo/activate [PUT]
router.put('/activate',articuloController.activate);
//api/articulo/deactivate  [PUT]
router.put('/deactivate',articuloController.deactivate);




module.exports = router;