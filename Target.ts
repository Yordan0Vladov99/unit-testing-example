export default interface Target {
  takeAttack: (_: number) => void;
  giveExperience: () => number;
  isDead: () => boolean;
}
