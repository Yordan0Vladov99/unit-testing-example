import Target from "./Target";
import Weapon from "./Weapon";

class Axe implements Weapon {
  private _attackPoints: number;
  private _durabilityPoints: number;

  constructor(ap: number, dp: number) {
    this._attackPoints = ap;
    this._durabilityPoints = dp;
  }

  getAttackPoints = () => this._attackPoints;
  setAttackPoints = (ap: number) => (this._attackPoints = ap);

  getdurabilityPoints = () => this._durabilityPoints;
  setdurabilityPoints = (dp: number) => (this._durabilityPoints = dp);

  attack = (target: Target) => {
    if (this._durabilityPoints <= 0) {
      throw new Error("Invalid Operation");
    }

    target.takeAttack(this._attackPoints);
    this._durabilityPoints -= 1;
  };
}

export default Axe;
