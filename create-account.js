function createAccount(pin, amount) {
    return {
        checkBalance(inputPin) {
            if (inputPin === pin) {
                console.log(amount);
            } else {
                console.log("Invalid PIN.")
            }
        },
        deposit(inputPin, newMoney) {
            if (inputPin === pin) {
                amount += newMoney;
                console.log(`Successfully desposited $${newMoney}. Current balance: $${amount}.`)
            } else {
                console.log("Invalid PIN.")
            }
        },
        withdraw(inputPin, newMoney) {
            if (inputPin === pin) {
                amount -= newMoney;
                console.log(`Successfully withdrew $${newMoney}. Current balance: $${amount}.`)
            } else {
                console.log("Invalid PIN.")
            }
        },
        changePin(inputPin, newPin) {
            if (inputPin === pin) {
                pin = newPin;
                console.log("PIN successfully changed!")
            } else {
                console.log("Invalid PIN.")
            }
        }
    };
}

module.exports = { createAccount };
