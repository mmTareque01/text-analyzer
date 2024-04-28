function checkPasswordStrength(password:string) {
    const minLength = 8;
    const regex = {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        digit: /\d/,
        specialChar: /[$&+,:;=?@#|'<>.^*()%!-]/
    };

    // Check length
    if (password.length < minLength) {
        return "Password should be at least " + minLength + " characters long";
    }

    // Check character types
    let strength = 0;
    const charTypes = Object.values(regex);
    charTypes.forEach(type => {
        if (type.test(password)) {
            strength++;
        }
    });

    // Assign labels based on strength
    let label = "";
    if (strength < 3) {
        label = "Weak";
    } else if (strength < 4) {
        label = "Moderate";
    } else {
        label = "Strong";
    }

    return label;
}

