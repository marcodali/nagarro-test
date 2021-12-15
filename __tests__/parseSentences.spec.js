import parse from '../main.js';

describe("Parse function", () => {
    test("it should parse a basic hello world sentence", () => {
        const input = 'Hola Mundo';
        const output = ['H2a', 'M3o'];
        expect(parse(input)).toEqual(output);
    });
});

describe("Parse function", () => {
    test("it should parse a sentence with non alphabetical chars", () => {
        const input = 'Smáoth Crimßinal is c*_olmλçantis';
        const output = ['Sm',  'o1h', 'C2m', 'i2l', 'is',  'c', 'o1m', 'a3s'];
        expect(parse(input)).toEqual(output);
    });
});

describe("Parse function", () => {
    test("it should parse a complex sentence", () => {
        const input = 'Smooth Criminal is cool';
        const output = [ 'S3h', 'C5l', 'is', 'c1l' ];
        expect(parse(input)).toEqual(output);
    });
});
