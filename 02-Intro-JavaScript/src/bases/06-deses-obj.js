const persona = {
    nombre: "Tony",
    edad :45,
    clave: "Iroman"
}

// Vamos hacer la desestructuracion 
//const { nombre, edad, clave}= persona;
//console.log(nombre);
//console.log(edad);
//console.log(clave);

//const retornaPersona = ({nombre, edad}) =>{
  //  console.log (nombre,edad)
//}

//retornaPersona(persona)

const useContext = ({nombre, edad, clave,}) =>{
    return{
        nombreClave:clave,
        anios:edad,

    }
}

const {nombreClave,anios} = useContext(persona);

console.log(nombreClave, anios)
