class Dummy {
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

  GiveExperience = () => {
    if (!this.isDead()) {
      throw new Error("Target is not dead.");
    }

    return this._experience;
  };

  getHealth = () => this._health;
  isDead = () => this._health <= 0;
}

export default Dummy;
