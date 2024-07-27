class RailwayForm {

    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    submit() {
        console.log(`${this.name} your form is submitted Successfully!!!`);
    }
    cancel() {
        console.log(`${this.name} your form is canceled `);
    }
}

let rohitForm = new RailwayForm("Rohit", "20", "32343253213");
rohitForm.submit();
rohitForm.cancel();