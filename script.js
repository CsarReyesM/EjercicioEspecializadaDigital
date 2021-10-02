// Listado de imagenes a mostrar
 const imagenes=[
    ['./image/0.png','imagen'],
    ['./image/1.jpg','imagen'],
    ['./image/2.jpg','imagen'],
    ['./image/3.jpg','imagen']
];
// Contador para recorrer el arreglo de imagenes
let contador=0;

function recorridoImagenes(){
    // aumentamos contador y agregamos los valores del arreglo y valor
    contador++
    document.getElementById("Imagen").src=imagenes[contador%imagenes.length][0];
}
// Conectar el json de datos Precio y Producto
const lista = {
	    "limpieza":
        [
		{"hoja":[
			{"precio":"148","producto":"Cloro"},
			{"precio":"79","producto":"Salvo"},
			{"precio":"79","producto":"Maestro Limpio"},
			{"precio":"79","producto":"Blanqueador"},
			{"precio":"","producto":""}
		]},
		{"hoja":[
			{"precio":"148","producto":"Desinfectante"},
			{"precio":"178","producto":"Jabon"},
			{"precio":"225","producto":"Pino"},
			{"precio":"79","producto":"Cepillo"},
			{"precio":"208","producto":"Escoba"}
		]},
		{"hoja":[
			{"precio":"2","producto":"Recogedor"},
			{"precio":"148","producto":"Bolsas para la basura"},
			{"precio":"79","producto":"Cesto de basura"},
			{"precio":"79","producto":"Jergas"},
			{"precio":"","producto":""}
		]}
	    ]
}
//  Contador para reccorer JSON  de precio y productos
let contador1=0;

function mostrarLista(){
    // aumentamos contador y agregamos los valores del arreglo y valor
    // convertimos el JSON para poder manipularlo
    const listaJSON = JSON.parse(JSON.stringify(lista.limpieza));
    // Debugeando vemos como acceder a los datos del JSON
    const elemento = listaJSON[contador1%listaJSON.length].hoja;
    contador1++;
    //console.log(elemento);
    // Recorremos uno a uno los datos por precio y producto
    for(let i=0; i<elemento.length; i++){
        // Seleccionamos donde ira la informacion
        const Tabla = document.getElementById('Tabla');
        const Producto = document.createElement('p');
        const Precio = document.createElement('p');
        //console.log(elemento[i].precio)
        // Agregamos los datos que iran iterando
        Producto.textContent = elemento[i].producto;
        Precio.textContent = "$ " +elemento[i].precio;
        //console.log(Precio)
        // Agregamos los datos al HTML
        Tabla.appendChild(Precio);
        Tabla.appendChild(Producto);
    }
}

// llamamos a una funcion para que se ejecute y definimos el setInterval a 5 segundos
// onload es un evento para ejecutar 
onload=function(){
    // llamamos la funcion que recorre las imagenes e informacion
    // y que no este el html vacio
    recorridoImagenes();
    mostrarLista ();
        
    // cada 5 segundos cambia la imagen y limpiar tabla para cambiar los datos
    setInterval(() => {
        const Tabla = document.getElementById('Tabla');
        // Limpiamos la tabla de datos
        Tabla.innerHTML = '';
        // Volvemos a llamar las funciones para recargar con el setinterval
        recorridoImagenes();
        mostrarLista ();
    },5000)
}