import express from 'express'

//EN EL ARCHIVO DE RUTAS CREO UNA VARIABLE
//ENCARGADA DE DEFINIR TODOS LOS ENDPOINTS DE MI API

//POR CADA SERVICIO QUE ODRECE MI API DEBO TENER UN ENDPOINT O RUTA
export let rutas=express.Router()

//DEFINO LAS RUTAS PARA CADA SERVICIO DE MI API:


rutas.post('/api/hotel/habitaciones',function (req, res) {
    res.send('estamos registrando una habitacion')
})
rutas.get('/api/hotel/habitaciones',function (req, res) {
    res.send('estamos buscando habitaciones')
})
rutas.get('/api/hotel/habitaciones/:id',function (req, res) {
    res.send('estamos buscando una habitacion por id')
})
rutas.put('/api/hotel/habitaciones/:id',function (req, res) {
    res.send('estamos editando una habitacion')
})

