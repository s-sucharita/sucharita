   
     alert("Welcome to the Grade Calculator!  Press OK to Continue !!"); 
     let flag;
     do {
        
      alert("Enter your marks for the following subjects (out of 100): Press OK to Continue !!");
      let num1 = Number(prompt("Enter the marks scored in Physics : "));
      let num2 = Number(prompt("Enter the marks scored in Chemistry : "));
      let num3 = Number(prompt("Enter the marks scored in Maths : "));
      let num4 = Number(prompt("Enter the marks scored in Computer Science : "));
      let num5 = Number(prompt("Enter the marks scored in English : "));
     
        let sum = num1 + num2 + num3 + num4 + num5;
        alert("The Total score secured out of 500 is : " + sum + " Press OK to know for Average Score secured !!");
      let avg = sum/5;
      alert("The Average score secured is : " + avg + " Press OK to know the Grade secured !!");
      if(avg >= 90) {
        alert("You have secured Grade A+ (Excellent)");
      }
      else if(avg >= 80 && avg < 90) {
        alert("You have secured Grade A (Good)");
      }
      else if(avg >= 70 && avg < 80) {
        alert("You have secured Grade B (Above Average)");
      }
      else if(avg >= 60 && avg < 70) {
        alert("You have secured Grade C (Average)");
      }
      else if(avg >= 50 && avg < 60) {
        alert("You have secured Grade D (Below Average)");
      }
      else {
        alert("You have secured Grade F (Failed) Study Well Next Time!!");
      }
      flag = prompt("Do you want to Continue !! (Y/y or N/n)");
    }while(flag == "Y" || flag == "y");

    alert("Thank you for using the Grade Calculator! Press OK to Exit !!");