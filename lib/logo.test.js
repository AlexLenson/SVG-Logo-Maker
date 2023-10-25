const Logo = require("./logo.js");
const { Triangle } = require("./shapes.js");



describe('SVG logo', () => {
    test('Should render an SVG logo that has a width of 300 and height of 200', () => {
        const svg = new Logo();
        expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>');
    });
});

describe('SVG logo accepts text, color', () => {
    test('Should render an SVG logo with text', () => {
        const svg = new Logo();
        svg.setText("abc", "white")
        expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="10" y="10" font-size="36" text-anchor="middle" fill="white">abc</text></svg>');
    });
});

describe('SVG logo will not accept text with more than 3 characters', () => {
    test('SVG logo will not accept text with more than 3 characters', () => {
        const expectedError = new Error("words cannot be greater than 3 characters");
        const svg = new Logo();
        expect(() => svg.setText("abcd", "white")).toThrow(expectedError);
    });
});

describe('SVG logo will have a shape', () => {
    test('Should render an SVG logo with a shape', () => {
        const svg = new Logo();
        svg.setText("abc", "red");
        const triangle = new Triangle();
        triangle.setColor("blue");
        svg.setShape(triangle);
        expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="10" y="10" font-size="36" text-anchor="middle" fill="red">abc</text></svg>');
    });
});



