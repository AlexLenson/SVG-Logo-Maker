class Logo {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
    setText(words, color) {
        if (words.length > 3) {
            throw new Error("Text cannot be greater than 3 characters");
        }
        this.textEl = `<text x="150" y="100" font-size="36" text-anchor="middle" fill="${color}">${words}</text>`;
    }
    setShape(shape) {
        this.shapeEl = shape.render();
    }
}

module.exports = Logo;