
const saludar =function(nombre){
    return `Hola, ${nombre}`
}

const saludar2 =(nombre)=>{
    return `Hola, ${nombre}`
}

const saludar3 =(nombre)=> `Hola, ${nombre}`
const saludar4 = () => `Hola`;

console.log(saludar("Goku"))
console.log(saludar2("Vegeta"))
console.log(saludar3("Vegeta"))
console.log(saludar4())


const getUser = () =>({
     uid:"ABC123",
     username: "El_papi1502"
});

const user = getUser();
console.log(user)

//Tarea
// 1. Transformas a una función flecha
// 2. Tiene que retornar un objeto implicito
// 3. Prueban 

const getUsuarioActivo= (nombre)=>
({
 uid:"ABC123",
username:nombre,
})


const usuarioActivo = getUsuarioActivo("Fernanod");
console.log(usuarioActivo);

