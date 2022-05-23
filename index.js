class Usuario {
    constructor() {
        this.nombre = 
        this.apellido = 
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        console.log(`Mascotas: ${this.mascotas.length}`)
    }

    addBook(libro) {
        this.libros.push(libro)
    }

    getBookNames(){
        let bookNames = this.libros.map(libro => libro.nombre);
        console.log(bookNames);
    } 
}


const usuario = new Usuario()
usuario.nombre = "Mauro"
usuario.apellido = "Bello"
usuario.getFullName()
usuario.addMascota("Mora")
usuario.addMascota("Merida")
usuario.countMascotas()
usuario.addBook({nombre: "Moby Dick", autor: "Herman Melville"})
usuario.addBook({nombre: "Don Quijote de la Mancha", autor: "Miguel de Cervantes"})
usuario.getBookNames()