
const gato ={
    nombre: "michi",
    duerme: true,
    edad: 12,
    enemigos: ["agua","Perros"],
    otros: {
        amigos: ["tom","thor"],
        favoritos:{
            comida:{
                frio: "salmon",
                caliente: "pollo"
            },
        },
    },
    listarEnemigos(){
        this.enemigos.forEach((item)=>console.log(item));
    },
};

console.log(gato.listarEnemigos());
const nombreGato = gato.nombre;
console.log(nombreGato);
const {nombre,edad}= gato;
console.log(edad);
