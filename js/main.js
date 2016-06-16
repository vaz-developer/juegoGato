function starGame() {
	for (var i = 1; i <= 9; i = i +1){
		clearBox(i); //Tambien aqui radica un problema porque no limpia mi caja
		 $(".tablero").val(""); //Para que input se muestre limpio
	}


	document.turn = "X";
	if (Math.random() < 0.5) {
		document.turn = "O";
	}
	document.winner = null;
	setMessage ("Jugador con " + document.turn + " empieza");
}

function setMessage(msg){
	document.getElementById("mensaje").innerText = msg;
}
//Aqui radica un problema pero no logro deterctarlo en !=null que hace que no me marque ganaste el juego
function nextMove(square) {
	if (document.winner != null) {
		setMessage(document.winner +"¡GANASTE EL JUEGO!");
	} else if (square.innerText == "") {
		square.innerText = document.turn;
		switchTurn();
} else {
	setMessage("Esta listo para usarse");
	 }

}

function switchTurn() {
	if (checkForWinner(document.turn)) {
		setMessage("¡FELICIDADES! " + document.turn + " Has ganado");
		document.winner = document.turn;
	} else if (document.turn == "X") {
		document.turn = "O";
		setMessage("Es turno del que tiene " + document.turn + " para tirar");
	} else {
		document.turn = "X";
		setMessage("Es turno del que tiene " + document.turn + " para tirar");
	}
}

function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) || 
		checkRow(4, 5, 6, move) || 
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {

			result = true;
		}
		return result;
	}

function checkRow(a, b, c, move) {
	var result = false;
	 if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
	 	result = true;
	 }
	 return result;
}

function getBox(number) {
	console.log(number);
	return document.getElementById("caja" + number).innerText;
}

function clearBox(number) {
	document.getElementById("caja" + number),innerText = "";
}




