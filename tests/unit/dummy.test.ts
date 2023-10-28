import Axe from "../../Axe";
import Dummy from "../../Dummy";

describe("dummy tests", () => {
  let axe: Axe;
  let dummy: Dummy;

  const axeAttackPoints: number = 10;
  const axeDurability = 2;

  const dummyHP: number = 10;
  const dummyXP: number = 10;

  beforeEach(() => {
    axe = new Axe(axeAttackPoints, axeDurability);
    dummy = new Dummy(dummyHP, dummyXP);
  });

  test("dummy loses health after being attacked", () => {
    axe.attack(dummy);
    expect(dummy.getHealth()).toBe(dummyHP - axeAttackPoints);
  });

  test("dead dummy throws error if it is attacked", () => {
    axe.attack(dummy);
    expect(() => axe.attack(dummy)).toThrowError("Dummy is dead.");
  });
});
