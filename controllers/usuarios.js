const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey } = req.query;
    res.json({
        msg: 'get API',
        q, nombre, apikey
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API',
        nombre, edad
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost
}