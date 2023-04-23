alert("Calculator");
        val1 = + prompt("Write the First Number:");
        val2 = + prompt("Enter the Second Number:");
        action = prompt("What operation do you want to perform ?\nwrite the first letter capital");
        if (action == "Addition") {
            alert(val1 + val2)
        }
        else if (action == "Subtraction") {
            alert(val1 - val2)
        }
        else if (action == "Multiplication") {
            alert(val1 * val2)
        }
        else if (action == "Division") {
            alert(val1 / val2)
        }
        else if (action == "Modulus") {
            alert(val1 % val2)
        }
        else {
            alert("You may be entering wrong operator")
        }