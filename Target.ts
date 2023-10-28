export default interface Target {
  takeAttack: (_: number) => void;
  GiveExperience: () => number;
  isDead: () => boolean;
}
