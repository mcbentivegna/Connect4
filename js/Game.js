class Game{
	constructor(){
		this.players = this.createPlayers();
		this.board = new Board();
		this.ready = false;
	}
	/**
	 * Creates two player objects
	 * @returns {array} An array of two player objects
	 * Player1 is initialized to the active player.
	*/

	createPlayers(){
		const players = [
			new Player('Michelle', 1, '#e15258', true),
			new Player('Caroline', 2, '#e59a13')
			]
			return players;
	}

	/**
	 * Get current player (player where player.active == true)
	 * @return {object} any active players
	*/

	get activePlayer(){
		return this.players.find( player => player.active);
	}

	/**
	 * Gets game ready for play!
	 * Draw the HTML Board
	 * set game state to ready = true
	 * Draw the initial token for player 1 on the board.
	*/

	startGame(){

		game.board.drawHTMLBoard();
		game.ready = true;
		game.activePlayer.activeToken.drawHTMLToken()

	}

	handleKeyDown(event) {
		if(this.ready){
			if(event.key === 'ArrowDown'){
				this.activePlayer.activeToken.drop(this.board)
				this.reset()
			}
			if(event.key === 'ArrowRight'){
				this.activePlayer.activeToken.moveRight(this.board.columns)
			}
			if(event.key === 'ArrowLeft'){
				this.activePlayer.activeToken.moveLeft()
			}
		}
	}

	/**
	 * Switch players 
	 * draw token for second player
	 * check if game has been won.
	 */

	reset(){

		let win = this.checkForWin();

		if(win == true){
			this.showMessage(`Game over! ${this.activePlayer.name} wins!`)
		}

		if(this.activePlayer.unusedTokens.length == 0){
			this.showMessage(`Game over. ${this.activePlayer.name} has no tokens left.`)
		}
		

		else{
			this.players.forEach((player) =>{
			if (player.active){
				player.active = false
			}
			else{
				player.active = true;
			}
		})
			this.activePlayer.activeToken.drawHTMLToken();
		}

		
	}

	 /** 
     * Checks if there a winner on the board after each token drop.
     * @param   {Object}    target - Targeted space for dropped token.
     * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
     */
    checkForWin(){
    	//const owner = target.token.owner;
    	const owner = game.activePlayer;
    	let win = false;
    	// vertical
    	for (let x = 0; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
            		
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x][y+1].owner === owner && 
    				this.board.spaces[x][y+2].owner === owner && 
    				this.board.spaces[x][y+3].owner === owner) {
                    	win = true;
                }           
            }
        }
	
    	// horizontal
    	for (let x = 0; x < this.board.columns - 3; x++ ){
            for (let y = 0; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x+1][y].owner === owner && 
    				this.board.spaces[x+2][y].owner === owner && 
    				this.board.spaces[x+3][y].owner === owner) {
                    	win = true;
                }           
            }
        }
		
    	// diagonal
    	for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y+1].owner === owner && 
    				this.board.spaces[x-2][y+2].owner === owner && 
    				this.board.spaces[x-3][y+3].owner === owner) {
                    	win = true;
                }           
            }
        }
	
    	// diagonal
    	for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 3; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
    				this.board.spaces[x-1][y-1].owner === owner && 
    				this.board.spaces[x-2][y-2].owner === owner && 
    				this.board.spaces[x-3][y-3].owner === owner) {
                    	win = true;
                }           
            }
        }
		console.log(win)
    	return win;
    }

    /**
     * Shows message at top of game
     * @param {String} Message you want shown
     */

     showMessage(message){
     	$('#game-over').css({
				display: 'block'
			})
			document.getElementById('game-over').innerText = message
     }
}