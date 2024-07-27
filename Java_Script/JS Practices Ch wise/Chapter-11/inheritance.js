class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log(`${this.name}  is running`);
    }
    bark() {
        console.log(`${this.name} is barking `);
    }
}
class Sher extends Animal {
    king() {
        console.log("I am the king of the jungle")
    }
}
let ani = new Animal("popet", "red");
let k = new Sher("badshah", "brown");
ani.run();
k.king();
k.bark();