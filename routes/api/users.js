const routerx = require('express-promise-router');
// const router = require('express').Router();
const userController = require ('../../controllers/UserController'); 
const auth = require('../../middlewares/auth')
const router = routerx();

//Estos metodos de abajo toca eliminarlos***
router.post('/login',userController.login);
// router.post('/register',userController.register);
// router.put('/update',auth.verifyUsuario ,userController.update);

//pruebas front se quita: ,auth.verifyUsuario


//api/usuario/list   [GET]
router.get('/list',userController.listar); //agregue list*****
//api/usuario/add    [POST]
router.post('/add', userController.add);
//api/usuario/update  [PUT]
router.put('/update' , userController.update);
//api/usuario/activate [PUT]
router.put('/activate' , userController.activate);
//api/usuario/deactivate  [PUT]
router.put('/deactivate'  ,userController.deactivate);







module.exports = router;