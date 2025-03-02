function validateForm() {
    let valid = true;


    document.getElementById("errorMessages").innerHTML = "";
    document.querySelectorAll(".error").forEach(el => el.innerHTML = "");

    // First Name
    const firstname = document.getElementById("firstname").value;
    if (!/^[A-Za-z]+$/.test(firstname) || firstname.length > 20 || firstname === "") {
        document.getElementById("firstnameError").innerHTML = "First name is required and should contain only letters, max 20 characters.";
        valid = false;
    }

    // Last Name
    const lastname = document.getElementById("lastname").value;
    if (!/^[A-Za-z]+$/.test(lastname) || lastname.length > 20 || lastname === "") {
        document.getElementById("lastnameError").innerHTML = "Last name is required and should contain only letters, max 20 characters.";
        valid = false;
    }

    // Email
    const email = document.getElementById("email").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email === "") {
        document.getElementById("emailError").innerHTML = "Valid email is required.";
        valid = false;
    }

    // Phone
    const phone = document.getElementById("phone").value.replace(/-/g, "");
    if (!/^\d{1,15}$/.test(phone) || phone === "") {
        document.getElementById("phoneError").innerHTML = "Valid phone number is required (max 15 digits).";
        valid = false;
    }

    // Username
    const username = document.getElementById("username").value;
    if (username.length > 12 || username === "") {
        document.getElementById("usernameError").innerHTML = "Username is required and should be max 12 characters.";
        valid = false;
    }

    // Password
    const password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        valid = false;
    } else if (password.length > 7) {
        document.getElementById("passwordError").innerHTML = "Password should be max 7 characters.";
        valid = false;
    } else if (!/[a-z]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password should contain at least 1 lowercase letter.";
        valid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password should contain at least 1 uppercase letter.";
        valid = false;
    } else if (!/\d/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password should contain at least 1 number.";
        valid = false;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password should contain at least 1 special character.";
        valid = false;
    }

    // Address
    const address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required.";
        valid = false;
    }

    // City
    const city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("cityError").innerHTML = "City is required.";
        valid = false;
    }

    // State
    const state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("stateError").innerHTML = "State is required.";
        valid = false;
    }

    // Country
    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").innerHTML = "Country is required.";
        valid = false;
    }

    // Zipcode
    const zipcode = document.getElementById("zipcode").value;
    if (country === "USA") {
        if (!/^\d{5}$/.test(zipcode) || zipcode === "") {
            document.getElementById("zipcodeError").innerHTML = "Zip code is required and should be 5 digits.";
            valid = false;
        }
    }

    if (!valid) {
    
        event.preventDefault();
        return false;
    }

    return true;
}
