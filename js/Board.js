class Board{
	constructor(){
		this.rows = 6;
		this.columns = 7;
		this.spaces = this.createSpaces();
	}
	/**
	 * Generage 2D array of spaces
	 * @return {array} an array of spaces
	*/

	createSpaces(){
		let spaces = [];

		for(var c = 0; c < this.columns; c++){
			const column = [];

			for (var r = 0; r < this.rows; r++){
				let space = new Space(c, r)
				column.push(space)
			}
			spaces.push(column)
		}
		return spaces;
	}

	drawHTMLBoard(){
		this.spaces.forEach((col) => {
			col.forEach((space)=>{
				space.drawSVGSpace()
			})
		})
	}
}