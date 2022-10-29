//una clase controlador establece los metodos (ACCCIONES)
//que vamos a realizar en BD
//Y ESTA ALINEADO CON EL ARCHIVO DE RUTAS

export class ControladorReserva{

    constructor(){}

    agregarReserva(request,response){

        let datosARegistrar=request.body

        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"Fallamos en la consulta "+error,
                "datos":null
            })

        }
    }




    consultarReservas(request,response){
        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de reservas",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })

        }
    }



    consultarReserva(request,response){

        let id=request.params.id

        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una reserva",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion "+error,
                "datos":null
            })

        }
    }

    editarReserva(request,response){

        let id=request.params.id
        let datosAEditar=request.body

        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de edicion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"Fallo en la operacion "+error,
                "datos":null
            })

        }
    }



}