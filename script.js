function checkYear(year) {
    if (year < 1989 || year > 2031) {
        return false;
    } else if (year >= 1990 && year <= 2030) {
        return true;
    } else {
        return false;
    }
}

function validateSyntax() {
    let input = document.getElementById('petInput').value;

  
    let petName = /^pet_[A-Za-z0-9]+$/;
    let pet = petName.test(input);

    let year = input.substr(4,4);
    let isYear = checkYear(year);
    let action = '';

    
    let Name = input.substr(8);
    let isUpperCase = Name.substr(0,1) === Name.substr(0,1).toUpperCase() && Name !== '';

    // if statement that for v
    if (pet && isYear && isUpperCase ){
        result = "Valid Syntax \uD83D\uDFE2";
        action = "valid";

    } else {
        result = "Invalid Syntax \uD83D\uDD34";
        action = "invalid";
    }
      function myFunction() {
        const list = document.getElementById("myDIV").classList;
        list.add("invalid");
      }


    

    document.getElementById('result').innerText = result;
    if(action === "valid"){
        document.getElementById('result').classList.remove("invalid");
    }
    else {
        document.getElementById('result').classList.add("valid");
    }
    document.getElementById('result').classList.add(action);
}
