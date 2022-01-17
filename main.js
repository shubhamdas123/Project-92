function nextScreen() {
    player1 = document.getElementById("username1Input").value;
    player2 = document.getElementById("username2Input").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location = "index2.html";
}