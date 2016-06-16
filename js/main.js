function clearTablero() {
	for (var i = 1; i <= 9; i = i +1){
		limpiarCaja(i);
	}

}

function starGame() {

	clearTablero();

	document.turn = "X";
	if (Math.random() < 0.5) {
		document.turn = "O";
	}
	document.winner = null;
	setMessage("Jugador 1 empieza jugando con " + document.turn);
}

function setMessage(msg){
	document.getElementById("mensaje").innerText = msg;
}

function nextMove(square) {
	if (document.winner != null) {
		setMessage("Aprieta el botón NARANJA para una nueva partida");
	} else if (square.innerText == "") {
		square.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("¡GATO!");
	}

}

function switchTurn() {
	if (checkForWinner(document.turn)) {
		setMessage("¡FELICIDADES! Jugador con " + document.turn + " has ganado");
		document.winner = document.turn;
	} else if (document.turn == "X") {
		document.turn = "O";
		setMessage("Jugador 1 tira con " + document.turn);
	} else {
		document.turn = "X";
		setMessage("Jugador 2 tira con " + document.turn);
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

	console.log('Check for winner ' + move + ' ' + result);
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
	var temp = document.getElementById("caja" + number).innerText;
	return temp.trim();
}

function limpiarCaja(number) {
	document.getElementById("boton" + number).innerText = '';
}
