//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos =document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//listener
cargarEventListeners();

function cargarEventListeners(){
	//Dispara cuando se presiona "agregar Carrito"
	cursos.addEventListener('click', compraCursos);

	//cuando se elimina un curso del carrito
	carrito.addEventListener('click', eliminarCurso);

	//
	vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

//Funciones

//funcion que añade el curso al carrito

function compraCursos(e){
	e.preventDefault();
	//elegation para agregar carrito
	if(e.target.classList.contains('agregar-carrito')){
		const curso = e.target.parentElement.parentElement;
		//enviamos el curso seleccionado para tomar sus datos
		leerDatosCurso(curso);
	}
}
//lee los datos del curso
function leerDatosCurso(curso){
	const infoCurso ={
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id')
	}
	insertarCarrito(infoCurso);
}

function insertarCarrito(curso){
	const row = document.createElement('tr');
	row.innerHTML = `
	<td>
	<img src="${curso.imagen} " width=100>
	</td>
	<td>${curso.titulo}</td>
	<td>${curso.precio}</td>
	<td>
	<a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
	</td>
	`;
	listaCursos.appendChild(row);
}

//elimina el curso del carrito en el DOM
function eliminarCurso(e){
	e.preventDefault();

	let curso;
	if(e.target.classList.contains('borrar-curso')){
		e.target.parentElement.parentElement.remove();
	}
}

//elimina los cursos del carrito en el dom
function vaciarCarrito(){
	//forma lenta
	//listaCursos.innerHTML = '';
	//forma rapida(recomendada)
	while(listaCursos.firstChild){
		listaCursos.removeChild(listaCursos.firstChild);
	}
	return false;
}