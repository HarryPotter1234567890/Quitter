function adduser(){
    username = document.getElementById("input1").value;
    localStorage.setItem("input1", username);
    window.location = "quitter.html";
}