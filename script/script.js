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

let lowerCase = /[a-z]/g;
let upperCase = /[A-Z]/g;
let number = /[0-9]/g;

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