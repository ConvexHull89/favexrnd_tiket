// login
function displayPass() {
    var x = document.getElementById("passwordLogin");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }