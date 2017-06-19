class Food {
    constructor (name, proteins, carbs, fat) {
        this.name = name;
        this.proteins = proteins;
        this.carbs = carbs;
        this.fat = fat;
    }

    pinuccio() {
        return `${this.name} | ${this.proteins}g P :: ${this.carbs}g :: ${this.fat}g`
    }

    print() {
        console.log(this.pinuccio())
    }
}

const pettoDiPollo = new Food('Petto di pollo', 56, 0, 46);

pettoDiPollo.print();

//:::::::: SUBCLASSES

class FatFreeFood extends Food {
    constructor (name, protein, carbs) {
        super(name, protein, carbs, 0);
    }

    print() {
        super.print(); // here I am using the print of the parent class
        console.log(`try this no fat food -- ${this.name}, has no fat`);
    }

}

const fatFreeYogurt = new FatFreeFood('GreeK Yogurt', 16, 12)

Food.prototype.cook = function cook () {
    console.log(`${this.name} is cooking!`);
};

const dinner = new Food('Lamb Chops', 52, 8, 32);
dinner.cook();
// const Studio = class {
//     //here I can' refer to class name in body
// }

// const Studia = class Javascript {
//     // here I can refer to class name
//     constructor(string, numbers, booleans) {
//         this.string = string;
//     }
//     aMethod() {
//         return `${this.string}`
//     }
//         print() {
//             console.log(this.aMethod());
//         }
// }
// const testare = new Studia('Dimostrare', ' una stringa')
