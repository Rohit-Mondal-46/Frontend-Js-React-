class RailwayForm {

    fill(name, age, id) {
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
let rohitForm = new RailwayForm;
rohitForm.fill("Rohit", "20", "32343253213");
rohitForm.submit();
rohitForm.cancel();