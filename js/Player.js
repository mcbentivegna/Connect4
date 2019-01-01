class Player{
	
	constructor(name, id, color, active = false){
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21);
	}

	/**
	 * Creates token object for player
	 * @param {integer} num - Number of token objects to be created		
	*/

	createTokens(num){
		let tokens =[];

		for (let i = 0; i < num; i++) {
	        let token = new Token(i, this);
	        tokens.push(token);
    	}
		return tokens;
	}

	/**
	 * Get all unused tokens (where dropped is false)
	 * @return {array} array of unused tokens
	*/

	get unusedTokens(){
		return this.tokens.filter( token => !token.dropped);
	}

	/**
	 * Get active token, which is the first unused token in the array.
	 * @return {object} unused token
	*/

	get activeToken(){
		return this.unusedTokens[0];
	
	}

		

}

