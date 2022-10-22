//una clase controlador establece los metodos (ACCCIONES)
//que vamos a realizar en BD
//Y ESTA ALINEADO CON EL ARCHIVO DE RUTAS

export class ControladorHabitacion{

    constructor(){}

    agregarHabitacion(request,response){

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




    consultarHabitiones(request,response){
        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de habitaciones",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })

        }
    }



    consultarHabitacion(request,response){
        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de buscaqueda de una habitacion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion "+error,
                "datos":null
            })

        }
    }




    editarHabitacion(request,response){
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