const {validateTarget} = require('./validacion');

test('Coordenadas correctas', () => {
    const target = {x: 18, y: 100};
    const valido = validateTarget(target);
    expect(valido).toBe(true);
});

test('Coordenadas fuera de rango', () => {
    const target = {x: 10, y: 20};
    const valido = validateTarget(target);
    expect(valido).toBe(false);
});