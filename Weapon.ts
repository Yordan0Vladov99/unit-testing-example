import Target from "./Target";

export default interface Weapon {
  attack: (_: Target) => void;
}
