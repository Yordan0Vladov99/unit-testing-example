import * as readline from 'readline';
import Hero from './Hero';
import Axe from './Axe';
import Dummy from './Dummy';


const main = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your hero name: ", (heroName: string) => {
        const hero = new Hero(heroName, new Axe(10, 10));
        const dummy = new Dummy(10, 10);

        rl.question("You find yourself in front of a practise dummy. Do you attack it or run away? ", (action: string) => {
            switch (action.toLowerCase()) {
                case "attack": {
                    hero.attack(dummy);
                    if (dummy.isDead()) {
                        console.log(`The dummy is dead. You have received ${dummy.giveExperience()} XP!`)
                    }
                    break;
                }
                default: {
                    console.log("You are such a coward! Game Over!")
                }
            }

            rl.close();
        })
    });
}

main();