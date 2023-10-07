## unit-testing-example

Skeleton for a fantasy RPG game, which we will test the various components of.

## How to download

```bash
git clone https://github.com/Yordan0Vladov99/unit-testing-example.git
npm install
```

## Test we need to perform

1. Axe tests
    - the axe loses durability after every attack
    - broken axe can't attack
2. Dummy tests
    - dummy loses health after being attacked
    - dead dummy throws error if it is attacked
    - dead dummy gives experience
    - alive dummy doesn't give experience


## Refactoring our tests

Refactor the axe and dummy tests. Make sure that:

- the test cases are descriptive
- there is no code duplication
- there are no magic numbers

## Testing the Hero

- We want to extend our game to include multiple weapons and targets
To achieve this create the following interfaces:
  - **Weapon**, implemented by **Axe**
  - **Target**, implemented by **Dummy**
- Make the **Hero** class testable, using **Dependency Injection**
- Test if the hero receives XP when he kills a target


## Using mock objects

- Refactor the hero tests to use **mock objects**