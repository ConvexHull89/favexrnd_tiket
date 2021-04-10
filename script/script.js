// login
function displayPass() {
    var x = document.getElementById("passwordLogin");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function displayConfirmPass() {
    var x = document.getElementById("confirm-password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//   register
function switchDisplay() {
    var profilePic = document.getElementById("submitProfilePicture");
    var pInfo = document.getElementById("personalInfo");

    if (profilePic.style.display === "none" || pInfo.style.display === "block") {
        profilePic.style.display = "block";
        pInfo.style.display = "none";

    }
    else if (profilePic.style.display === "block" || pInfo.style.display === "none") {
        profilePic.style.display = "none";
        pInfo.style.display = "block";
    }
}

function confirmPass() {
    let newPass = document.getElementById("password");
    let confirmNewPass = document.getElementById("confirmPassword");
    let errMsg = document.getElementById("errorMessagePassword");
    if (newPass.value != confirmNewPass.value) {
        errMsg.classList.remove = "hidden";
    }
    else if (newPass.value === confirmNewPass.value) {
        errMsg.classList.add = "hidden";
    }
}

// changePassword


function confirmChangePass() {
    let newPass = document.getElementById("newPassword");
    let confirmNewPass = document.getElementById("confirmNewPassword");
    let btnConfirmPass = document.getElementById("submitConfirmPass");
    if (newPass.value != confirmNewPass.value) {
        btnConfirmPass.type = "button";
        alert("Confirmation Password and Password doen't Match!");
    }
    else if (newPass.value === confirmNewPass.value) {
        btnConfirmPass.type = "submit";
    }
}


var password = document.getElementById("password");
password.onfocus = function () {
    document.getElementById("message").style.display = "block";
}
password.onblur = function () {
    document.getElementById("message").style.display = "none";
}
password.onkeyup = function () {
    var lowerCase = /[a-z]/g;
    if (password.value.match(lowerCase)) {
        document.getElementById("lowercase").style.display = "none";
    } else {
        document.getElementById("lowercase").style.display = "block";
    }
    var upperCase = /[A-Z]/g;
    if (password.value.match(upperCase)) {
        document.getElementById("uppercase").style.display = "none";
    } else {
        document.getElementById("uppercase").style.display = "block";
    }
    var number = /[0-9]/g;
    if (password.value.match(number)) {
        document.getElementById("number").style.display = "none";
    } else {
        document.getElementById("number").style.display = "block";
    }
    if (password.value.length >= 8) {
        document.getElementById("length").style.display = "none";
    } else {
        document.getElementById("length").style.display = "block";
    }
}

var confirmPass = document.getElementById("confirm");
confirmPass.onfocus = function () {
    if (confirmPass.value != password.value) {
        document.getElementById("confirm-message").style.display = "block";
    }
    else {
        document.getElementById("confirm-message").style.display = "none";
    }
}

function validateForm() {
    var x = document.forms["form-register"]["team_name"].value;
    if (x.length < 8) {
        team_name.classList.remove("invalid");
        team_name.classList.add("valid");
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
    }
    var y = document.forms["form-register"]["password"].value;
    var lowerCase = /[a-z]/g;
    if (y.value.match(lowerCase)) {
        password.classList.remove("invalid");
        password.classList.add("valid");
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
    }
    var upperCase = /[A-Z]/g;
    if (y.value.match(upperCase)) {
        password.classList.remove("invalid");
        password.classList.add("valid");
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
    }
    var numbers = /[0-9]/g;
    if (y.value.match(numbers)) {
        password.classList.remove("invalid");
        password.classList.add("valid");
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
    }

    var z = document.forms["form-register"]["confirm-password"].value;
    if (z === y) {
        confirm - password.classList.remove("invalid");
        confirm - password.classList.add("valid");
    } else {
        password.classList.remove("valid");
        password.classList.add("invalid");
    }
}