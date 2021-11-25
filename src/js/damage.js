import Character from './Character';

export default class Damage extends Character {
    constructor(name) {
        super(name);
        this.stonedValue = false; // есть дурман или нет, изначально нет
        this.attackRange = undefined; // дальность атаки, изначально не указана
    }

    set attackChange(range) {
        this.attackRange = range; // предаем дальность атаки
    }

    get attackChange() {
        const damage = 100 - (this.attackRange - 1) * 10; // рассчитываем урон: 1 клетка - 10%
        let changeAttack = (this.attack * damage) / 100;
        if (this.stonedValue) {
            changeAttack -= Math.log2(this.attackRange) * 5;
        }
        return Math.round(changeAttack);
        // рассчитываем силу атаки при указанной дальности и наличию дурмана
    }

    set stoned(value) {
        this.stonedValue = value; // передаем значение дурмана
    }

    get stoned() {
        return this.stonedValue; // возвращаем значение дурмана
    }
}