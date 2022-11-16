
 /*import {getHeroesById} from "./bases/08-imp-exp"
 const promesa = new Promise( (resolve, reject)=>{
    setTimeout(()=>{

      const p1= getHeroesById(2)
     //reject("No se pudo encontrar el heroe ")
    },2000)
});

promesa.then((heroe)=>{
    console.log("heroe",heroe)
})

.catch(err => console.warn( err))*/

const getHeroesByIdAsync = ( id) =>{
    const promesa = new Promise( (resolve, reject)=>{
        setTimeout(()=>{
    
          const p1= getHeroesById(id)
         resolve(p1)
        },2000)
    });

    return promesa
}
getHeroesByIdAsync(4)
.then(heroe => console.log("Heroe, heroe"))