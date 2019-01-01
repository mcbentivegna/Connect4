
//let player1 = new Player('Michelle', 1, 'red', false)
//let player2 = new Player('Caroline', 2, 'yellow', false)

let game = new Game();


document.querySelector('#begin-game').addEventListener('click', function (){
	this.style.display = 'none';
	document.querySelector('#play-area').style.opacity = '1';
	game.startGame();
})

document.addEventListener('keydown', function(event){
	game.handleKeyDown(event);
});
