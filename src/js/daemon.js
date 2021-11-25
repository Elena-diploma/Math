import Damage from './Damage';

export default class Daemon extends Damage {
    constructor(name) {
        super(name);
        this.attack = 80;
    }
}