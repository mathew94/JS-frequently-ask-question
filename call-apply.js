const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }

}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(850);
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000,
}

const friendlyPerson = {
    firstName: "Hero",
    lastName: "Golam",
    salary: 25000,
}

////////////bind///////////////
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(3000);
// friendlyChargeBill(5000);
// console.log(friendlyPerson.salary);

////////call///////////
// normalPerson.chargeBill.call(heroPerson, 900, 100, 25);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// normalPerson.chargeBill.call(friendlyPerson, 6000, 500, 100);
// console.log(friendlyPerson.salary);
// console.log(heroPerson.salary);

/////////////apply///////////
normalPerson.chargeBill.apply(heroPerson, [3000, 400, 100]);
console.log(heroPerson.salary);