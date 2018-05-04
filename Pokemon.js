/***********************
Pokemon JS
Author: Andrew DeLeon
SI18 Technical Projects
***********************/
class Pokemon {
    constructor(name, type, hp, def, atk, legend) {
        
        //Class property that returns an array of all previously constructed Pokemon instances
        if (!Pokemon.all) {
            Pokemon.all = [];
        }
        
        //If the type does not match the datatype...
        if (typeof name != "string" || typeof type != "string" || typeof hp != "number" || typeof def != "number" || typeof atk != "number" || typeof legend != "boolean") {
            //Then throw an error to the user!
            window.alert("Error: Type not correct");
            console.log("Error: Type not correct")
            return;
        }
        //Constructor
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.def = def;
        this.atk = atk;
        this.legend = legend;
        Pokemon.all.push(this);
    }

    //Function to check if the Pokemon is Alive
    aliveCheck() {
        //Output a true, the pokemon is ready for battle!!
        if (this.hp > 0) {
            console.log(true);
            return true;
        } else {
            //Output a false, the pokemon fainted
            console.log(false)
            return false;
        }
    }

    /*
    Function to attack the Pokemon
    
    Personal pseudocode for return statement:
    -Subtract THEIR(p) Defense from THIS Attack, BEFORE subtracting from THEIR(p) HP
    */
    attack(p) {
        return p.hp - (this.atk - p.def);
    }

}
