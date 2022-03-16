/*Acceso a una lista de contactos mendiante una funcion*/
var contactos = 
[
    {
        "nombre": "Nora",
        "aperllido": "Nav",
        "numero": "05432345",
        "gustos": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "5538256483",
        "gustos": ["Hogwarts","Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "56748930",
        "gustos": ["Casos interesantes", "Violin"]
    }
];

function buscarPerfil(nombre,propiedad) {
    for (var i= 0; i< contactos.length; i++)
    if (contactos[i].nombre===nombre) {
        return contactos[i][propiedad] || "La propiedad no existe.";
    }
    return "El contacto no esta en la lista.";
}

console.log(buscarPerfil("Nora","numero")); // Ejemplo
