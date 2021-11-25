import Magician from '../Magician';

test('проверка Magician силы атаки на 2 клетку без дурмана', () => {
    const mag = new Magician('Ann');
    mag.attackChange = 2;
    const result = mag.attackChange;
    expect(result).toEqual(90);
});

test('проверка Magician силы атаки на 2 клетку c дурманом', () => {
    const mag = new Magician('Ann');
    mag.attackChange = 2;
    mag.stoned = true;
    const result = mag.attackChange;
    expect(result).toEqual(85);
});