import Axe from "../../Axe";
import Dummy from "../../Dummy";
import Hero from "../../Hero";
import Target from "../../Target";
import Weapon from "../../Weapon";

describe("hero tests", () => {
  let hero: Hero;
  let target: Target;

  beforeEach(() => {
    hero = new Hero("Thor", new Axe(10, 10));
    target = new Dummy(10, 10);
  });

  test("Test if the hero receives XP when he kills a target", () => {
    hero.attack(target);
    expect(hero.getExperience()).toBe(10);
  });
});

describe("hero tests with mock", () => {
  let hero: Hero;
  let target = jest.createMockFromModule<Target>("../../Target");
  target.GiveExperience = jest.fn(() => 10);
  target.isDead = jest.fn(() => true);

  let weapon = jest.createMockFromModule<Weapon>("../../Weapon");
  weapon.attack = jest.fn((_: Target) => {});

  beforeEach(() => {
    hero = new Hero("Thor", weapon);
  });

  test("Test if the hero receives XP when he kills a target", () => {
    hero.attack(target);
    expect(hero.getExperience()).toBe(10);
  });
});
