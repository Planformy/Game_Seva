let rowObject = document.getElementById('input_row')
let columObject = document.getElementById('input_colum')
let table = document.querySelector('#table');
const arrayWords = ["Красный", "Синий", "Жёлтый", "Черный", "Белый", "Розовый", "Коричневый", "Голубой", "Зелёный", "Фиолетовый", "Оранжевый"];
const colors = ["red", "blue", "yellow", "white", "pink", "brown", "green", "purple", "orange"];

document.getElementById('button_generate').addEventListener('click', function(){
	let rows = rowObject.value;
	let colums = columObject.value;
	checkInput(rows, colums);
})

document.getElementById('button_clear').addEventListener('click', function(){
	clearTable();
})

function checkInput(rows, colums){
	if (table.innerHTML != ''){
		alert("Таблица была очищена. Введите новые данные");
		clearTable();
		return;
	}
	else if(rows && colums != 0){
		generateTable(rows, colums);
	}
	else if(rows > 0 && colums > 8){
		alert("Введите количество столбцов меньше или равное 8");
		clearTable();
	}
	else{
		alert("Введите количество столбцов или строк");
	}
}

function generateTable(rows, colums){
	
	for(let i = 0; i < rows; i++){				
		let tr = document.createElement('tr');
		for(let j = 0; j < colums; j++){
			let td = document.createElement('td');
			td.textContent = arrayWords[IndexArray()];
			td.style.color = colors[colorArray()];
			tr.appendChild(td);	
		}
		table.appendChild(tr);
	}
} 

function colorArray(){
	let num = Math.floor(Math.random() * colors.length);
	if(num < 0 || num > colors.length){
		colorArray();
	}
	else{
		return num;
	}
	return -1;
}

function IndexArray(){
	let num = Math.floor(Math.random() * arrayWords.length);
	if(num < 0 || num > arrayWords.length){
		IndexArray();
	}
	else{
		return num;
	}
	return -1;
}

function clearTable(){
	table.innerHTML = '';
	rowObject.value = '';
    columObject.value = '';
	return;
}