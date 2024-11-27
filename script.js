class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	// Getter for area
	get getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		// A square is a rectangle with equal width and height
		super(side, side);
	}

	// Method to calculate the perimeter
	getPerimeter() {
		return 4 * this.width;
	}
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
