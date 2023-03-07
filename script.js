function validateForm() {
    var name = document.forms["registrationForm"]["name"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var phone = document.forms["registrationForm"]["phone"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else {
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    }

    if (phone == "") {
        alert("Phone number must be filled out");
        return false;
    } else {
        var phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number");
            return false;
        }
    }
}