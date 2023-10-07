import Axe from "./Axe";
import Dummy from "./Dummy";

class Hero {
  private _name: string;
  private _experience: number;
  private _weapon: Axe;

  constructor(name: string) {
    this._name = name;
    this._experience = 0;
    this._weapon = new Axe(10, 10);
  }

  getName = () => this._name;
  getExperience = () => this._experience;
  getWeapon = () => this._weapon;

  attack = (target: Dummy) => {
    this._weapon.attack(target);

    if (target.isDead()) {
      this._experience += target.GiveExperience();
    }
  };
}

export default Hero;
