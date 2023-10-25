class Shapes {
    constructor() {
        this.color = "";

    }
    setColor(color) {
        this.color = color;
    }
}

// triange class
class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// circle class
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="90" stroke="red" fill="${this.color}" stroke-width="5"/>`
    }
}

// square class
class Square extends Shapes {
    render() {
        return `<rect x="0" y="0" width="300" height="200" stroke="black" fill="${this.color}" stroke-width="5"/>`
    }
}

module.exports = { Triangle, Circle, Square };