function passgen(length, uppercase, numbers, specialchars) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "1234567890";
    const spclchars = "!@#$%^&*-_+:,.";

    let allowed = lower;
    if (uppercase) allowed += upperChars;
    if (numbers) allowed += nums;
    if (specialchars) allowed += spclchars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowed.length);
        password += allowed[randomIndex];
    }

    return password;
}

function generatePass() {
    const length = Number(document.getElementById("length").value);
    const uppercase = document.getElementById("upper").checked;
    const numbers = document.getElementById("numbers").checked;
    const specialchars = document.getElementById("specialchars").checked;

    if (!length || isNaN(length)) {
        alert("Please enter a valid number for password length.");
        return;
    }

    if (length <= 0) {
        alert("Password length must be at least 1.");
        return;
    }

    if (length > 100) {
        alert("Password length is too long. Please keep it below 100.");
        return;
    }

    if (!uppercase && !numbers && !specialchars) {
        alert("Please select at least one character type (uppercase, numbers, or special characters).");
        return;
    }

    const password = passgen(length, uppercase, numbers, specialchars);
    document.getElementById("result").textContent = "Generated Password: " + password;
}
