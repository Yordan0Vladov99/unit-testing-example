import Axe from "./Axe";
import Dummy from "./Dummy";
import Target from "./Target";
import Weapon from "./Weapon";

class Hero {
  private _name: string;
  private _experience: number;
  private _weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this._name = name;
    this._experience = 0;
    this._weapon = weapon;
  }

  getName = () => this._name;
  getExperience = () => this._experience;
  getWeapon = () => this._weapon;

  attack = (target: Target) => {
    this._weapon.attack(target);

    if (target.isDead()) {
      this._experience += target.GiveExperience();
    }
  };
}

export default Hero;
