import Axe from "../../Axe";
import Dummy from "../../Dummy";

describe("axe tests", () => {
  let axe: Axe;
  let dummy: Dummy;

  const axeAttackPoints: number = 2;
  const axeDurability = 2;

  const dummyHP: number = 10;
  const dummyXP: number = 10;

  beforeEach(() => {
    axe = new Axe(axeAttackPoints, axeDurability);
    dummy = new Dummy(dummyHP, dummyXP);
  });
  test("the axe loses durability after every attack", () => {
    axe.attack(dummy);
    expect(axe.getDurabilityPoints()).toBe(axeDurability - 1);
  });

  test("broken axe can't attack", () => {
    axe.attack(dummy);
    axe.attack(dummy);

    expect(() => axe.attack(dummy)).toThrowError("Invalid Operation");
  });
});
