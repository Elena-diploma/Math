import Damage from './Damage';

export default class Magician extends Damage {
    constructor(name) {
        super(name);
        this.attack = 100;
    }
}