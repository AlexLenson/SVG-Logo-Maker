const { Triangle, Circle, Square } = require("./shapes");



// Testing triangle class
describe('Triangle', () => {
    test('should render an SVG logo that is blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

// Testing circle class
describe('Circle', () => {
    test('should render an SVG logo that is blue', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" stroke="red" fill="blue" stroke-width="5"/>');
    });
});

// Testing square class
describe('Square', () => {
    test('should render an SVG logo that is blue', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" stroke="black" fill="blue" stroke-width="5"/>');
    });
});








