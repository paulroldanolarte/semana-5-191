//Middleware de autenticacion;
const tokenService = require('../services/token');

module.exports = {
    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        else {
            const response = await tokenService.decode(req.headers.token);
            // console.log(response);
            if (response) {
                if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
                    next();
                } else {
                    return res.status(403).send({
                        message: 'No autorizado'
                    });
                }
            } else {
                return res.status(403).send({
                    message: 'No autorizado'
                });
            }
        }
    },
}
