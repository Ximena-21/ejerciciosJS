const cotizar = document.querySelector('.btn-cotizar')
const txtCotizacion = document.querySelector('.cotizacion')
const inputName = document.querySelector('.singIn_fullname')


const precioServicio = {
    bañoSeco: 20000,
    bañoInsecticida: 5000,
    bañoYPeluqueria: 45000,
    bañoHidratante: 8000,
    uñas: 5000,
    oidos: 3000,
    restauracion: 25000,
    dientes: 5000,
    vacio: 0,
};


function totalCotizacion () {

    
    let total =  0  
   
    const servicios = document.querySelectorAll('.selectServices');

    let cliente = inputName.value;
    
    let mensaje = cliente + " " + 'tu cotizacion es: '
   

    servicios.forEach((servicio => {
        const  cantidad  = servicio.nextElementSibling.value
        
        const nombreServicio = servicio.value

        const totalServicio = precioServicio[nombreServicio] * cantidad

        total = total + totalServicio ;


        if (cantidad > 0) {
            
            mensaje = mensaje + " " + nombreServicio + " " + totalServicio;
            
            //console.log(mensaje);
        };
    
        
    }));    

    txtCotizacion.textContent = mensaje + " " + 'total compra ' + total
        
};

cotizar.addEventListener('click', totalCotizacion)






// function calcServices(selectorActual,numberServices){
    
//     /*    se establecen dos parametros para la funcion, los cuales se declararan en la funcion de totalcotizacion, para que esta se ejecute segun el caso que se presente
//     */
   
//    let precioServicesActual 

//    if(selectorActual === 'ninguno'){
//     precioServicesActual = (vacio*numberServices)
//     }
   
//    if(selectorActual === 'bañoSeco'){
//        precioServicesActual = (pBañoSec*numberServices)
//     }
    
//     if(selectorActual === 'bañoInsect'){
//         precioServicesActual = (pBañoIns*numberServices)
//     }
//     if(selectorActual === 'bañoPel'){
//         precioServicesActual = (pBañoPel*numberServices)
//     }
//     if(selectorActual === 'bañoHidra'){
//         precioServicesActual = (pBañoHid*numberServices)
//     }
//     if(selectorActual === 'uñas'){
//         precioServicesActual = (pUñas*numberServices)
//     }
//     if(selectorActual === 'oidos'){
//         precioServicesActual = (pOidos*numberServices)
//     }
//     if(selectorActual === 'restauracion'){
//         precioServicesActual = (pRest*numberServices)
//     }
//     if(selectorActual === 'dientes'){
//         precioServicesActual = (pDientes*numberServices)
//     }
    
//     console.log(precioServicesActual)
    
//     return precioServicesActual
// }


// /* function diccionarioDeServicios = {
//     pBañoSec = 'Baño Seco'
//     pBañoIns = 'Insecticida'
//     pBañoPel = 'Baño y Peluqueria'
//     pBañoHid = 'Hidratación'
//     pUñas = 'Corte de Uñas'
//     pOidos = 'Limpieza de Oidos'
//     pRest = 'Restauracion de manto'
//     pDientes = 'Limpieza de dientes'
// }
//  */



// function totalCotizacion (){
    
    
//     const totalServicio1 = calcServices(services1.value, Number(cantidad1.value))
//     const totalServicio2 = calcServices(services2.value, Number(cantidad2.value))
//     const totalServicio3 = calcServices(services3.value, Number(cantidad3.value))
//     const totalServicio4 = calcServices(services4.value, Number(cantidad4.value))

//     const userName = (inputName.value)
    
//     console.log(userName)
    
//     let total = totalServicio1 + totalServicio2 + totalServicio3 + totalServicio4

//     console.log(total)
    
//     /*  const msmCotizacion = name + "tu cotizacion es" + total */
//     let message = userName + " " + "tu cotizacion es: "

//     if(totalServicio1 > 0 ){
//         message = message + " " + (services1.value) + " " + totalServicio1 
//     }
//     if(totalServicio2 > 0 ){
//         message = message + " " +  (services2.value) + " " + totalServicio2 
//     }
//     if(totalServicio3 > 0 ){
//         message = message + " " +  (services3.value) + " " + totalServicio3 
//     }
//     if(totalServicio4 > 0 ){
//         message = message + " " +  (services4.value) + " " + totalServicio4 
//     }

//     txtCotizacion.textContent = message + " " + "Total compra " + " " + total

//   /*   const msmCotizacion = (userName + " " + "tu cotizacion es: " + " " + (services1.value) + " " + totalServicio1 + " " + (services2.value) + " " + totalServicio2 + " " +(services3.value) + " " + totalServicio3 + " " + (services4.value) + " " + totalServicio4 + " " + "Total Compra " + total) */

//     /* txtCotizacion.textContent = msmCotizacion */
    
// }







/*La primer funcion usada es mas larga y no optimiza el proyecto, es una funcion hibrida en la cuall tendria que repetir dicha funcion la cantidad de veces que tenga un espacion de cotizacion para el caso en cuestion*/

/* function calcServices1(){

    const numberServices = Number(cantidad1.value)

    let precioServices1 

    if(services1.value === 'bañoSeco'){
        precioServices1 = (pBañoSec*numberServices)
    }
    
    if(services1.value === 'bañoInsect'){
        precioServices1 = (pBañoIns*numberServices)
    }
    if(services1.value === 'bañoPel'){
        precioServices1 = (pBañoPel*numberServices)
    }
    if(services1.value === 'bañoHidra'){
        precioServices1 = (pBañoHid*numberServices)
    }
    if(services1.value === 'uñas'){
        precioServices1 = (pUñas*numberServices)
    }
    if(services1.value === 'oidos'){
        precioServices1 = (pOidos*numberServices)
    }
    if(services1.value === 'restauracion'){
        precioServices1 = (pRest*numberServices)
    }
    if(services1.value === 'dientes'){
        precioServices1 = (pDientes*numberServices)
    }

    console.log(precioServices1)

    return precioServices1
} */

/*el uso de la segunda ecuacion ya encontrfammos que hay elementos que siempre se repiten , y que la funcion es la misma para todos los casos, su variacion consisten en el sevicio que se vya a tomar y en la cantidad del mismo, por ende establecemos una 3 funcion que sera la que usemos generalmente donde se declaran unas constantes o variables y estas son las que van a acambiar a lo largo del proyecto*/

/* function calcServices2(){
    
    const selectorActual = services2.value
    const numberServices = Number(cantidad2.value)
    
    let precioServicesActual  
    
    if(selectorActual === 'bañoSeco'){
        precioServicesActual = (pBañoSec*numberServices)
    }
    
    if(selectorActual === 'bañoInsect'){
        precioServicesActual = (pBañoIns*numberServices)
    }
    if(selectorActual === 'bañoPel'){
        precioServicesActual = (pBañoPel*numberServices)
    }
    if(selectorActual === 'bañoHidra'){
        precioServicesActual = (pBañoHid*numberServices)
    }
    if(selectorActual === 'uñas'){
        precioServicesActual = (pUñas*numberServices)
    }
    if(selectorActual === 'oidos'){
        precioServicesActual = (pOidos*numberServices)
    }
    if(selectorActual === 'restauracion'){
        precioServicesActual = (pRest*numberServices)
    }
    if(selectorActual === 'dientes'){
        precioServicesActual = (pDientes*numberServices)
    }
    
    console.log(precioServicesActual)

    return precioServicesActual
}
 */

/* function putName (){

    const name = (inputName.value)
    nameClient.textContent = name

    /*ESTA FUNCION ME SIRVE PARA INGRESAR ALGO EN EL INPUT Y QUE SE REESCRIBA AFUERA
}

inputName.addEventListener('input',putName)
 */
