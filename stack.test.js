const Stack = require('./stack');

describe('Mi Stack Impl', () => {
 
    test('Probando Indice', () => {
        const stack = new Stack();
        expect(stack.top).toBe(0);
    });

    test('Probando Meter Elemento', () => {
        const valor = 2;
        expect(new Stack().meter(valor)).toBe(valor);
    });
    test('Probando Sacar Elemento', () => {
        const op = new Stack();
        expect(op.sacarUltimoElemento()).toBe(5);
    });
    test('Probando Sacar n ultimos Elementos', () => {
        const op = new Stack();
        expect(op.sacarNultimosElemento(3)).toStrictEqual([5,4,3]);
    });
})