  function calc(operation) {
        let num1 = parseFloat(document.getElementById("number1").value);
        let num2 = parseFloat(document.getElementById("number2").value);
        let result = "";

        if (operation == "add") {
          result = num1 + num2;
        } else if (operation == "subtract") {
          result = num1 - num2;
        } else if (operation == "multiply") {
          result = num1 * num2;
        } else if (operation == "divide") {
          if (num2 == 0) {
            result = "Error! Division by zero.";
          } else {
            result = num1 / num2;
          }
        } else if (operation == "square") {
          result = num1 * num1;
        } else if (operation == "cube") {
          result = num1 * num1 * num1;
        } else {
          result = "Clicked an Invalid Operation";
        }

        document.getElementById("result").innerText = "Result : " + result;
      }

      function clearValues() {
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
        document.getElementById("result").innerText = "Result :";
      }

      function resetCalculator() {
        clearValues();
      }
   