import Target from "./Target";

class Dummy implements Target {
  private _health: number;
  private _experience: number;

  constructor(hp: number, exp: number) {
    this._health = hp;
    this._experience = exp;
  }
  takeAttack = (attackPoints: number) => {
    if (this.isDead()) {
      throw new Error("Dummy is dead.");
    }

    this._health -= attackPoints;
  };

  giveExperience = () => {
    if (!this.isDead()) {
      throw new Error("Target is not dead.");
    }

    return this._experience;
  };

  getHealth = () => this._health;
  isDead = () => this._health <= 0;
}

export default Dummy;
