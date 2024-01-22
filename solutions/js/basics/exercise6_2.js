"use strict";

/* BankAccount class */
class Transaction{
    constructor(type, amount, oldBalance, newBalance, success){
        if (type != "deposit" && type != "withdraw") {
            throw new Error("Unknown transaction type " + type)
        }
        this.transaction = type;
        this.amount = amount;
        this.oldBalance = oldBalance;
        this.newBalance = newBalance;
        this.success = success;
        this.date = new Date();
    }
    print(){
        console.log(this.date
            + "\t" + this.transaction
            + "\t" + this.amount
            + "\t" + this.success
            + "\t" + this.oldBalance
            + "\t" + this.newBalance);
    }
}


class BankAccount{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
        this.log = [];
    }
    deposit(amount) {
        let oldBalance = this.balance;
        this.balance += amount;

        // log transaction
        this.log.push(
            new Transaction("deposit", amount, oldBalance, this.balance, 1)
        );
    }
    withdraw(amount) {
        let oldBalance = this.balance;
        let success = 0;
        if (this.balance >= amount) {
            this.balance -= amount;
            success = 1;
        }
        else {
            console.log("Error: insufficient funds!");
        }
    
        // log transaction
        this.log.push(
            new Transaction("withdraw", amount, oldBalance, this.balance, success)
        );
    }
    printLog() {
        for (let i = 0; i < this.log.length; i++) {
            this.log[i].print()
        }
    }
}