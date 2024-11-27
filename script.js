class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	// Getter for width
	get width() {
		return this._width;
	}

	// Getter for height
	get height() {
		return this._height;
	}

	// Method to calculate the area
	getArea() {
		return this._width * this._height;
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
