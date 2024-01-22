"use strict";

class BankAccount{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Error: insufficient funds!");
        }
    }
}