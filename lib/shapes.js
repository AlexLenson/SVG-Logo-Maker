class Shapes {
    constructor() {
        this.color = "";

    }
    setColor(color) {
        this.color = color;
    }
}

// do this for circle and square classes
class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// circle class
class Circle extends Shapes {
    render() {
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`
    }
}

// square class
class Square extends Shapes {
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>`
    }
}

module.exports = { Triangle, Circle, Square };