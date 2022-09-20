
const Operaciones = require('./operaciones');
 
describe('Test Suite de Operaciones', () => {
    
    test('Suma: 1 + 2 igual a 3', () => {
        const op = new Operaciones();
        expect(op.suma(1, 2)).toBe(3);
    });

    test('Resta: 4 - 1 igual a 3', () => {
        const op = new Operaciones();
        expect(op.resta(4, 1)).toBe(3);
    });
});

