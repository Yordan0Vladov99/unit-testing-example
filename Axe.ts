import Dummy from "./Dummy";

class Axe {
  private _attackPoints: number;
  private durabilityPoints: number;

  constructor(ap: number, dp: number) {
    this._attackPoints = ap;
    this.durabilityPoints = dp;
  }

  getAttackPoints = () => this._attackPoints;
  setAttackPoints = (ap: number) => (this._attackPoints = ap);

  getDurabilityPoints = () => this.durabilityPoints;
  setDurabilityPoints = (dp: number) => (this.durabilityPoints = dp);

  attack = (target: Dummy) => {
    if (this.durabilityPoints <= 0) {
      throw new Error("Invalid Operation");
    }

    target.takeAttack(this._attackPoints);
    this.durabilityPoints -= 1;
  };
}

export default Axe;
