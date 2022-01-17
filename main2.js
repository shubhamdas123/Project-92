p1Score = 0;
p2Score = 0;

function getValue() {
    player1 = localStorage.getItem("player1");
    player2 = localStorage.getItem("player2");
    document.getElementById("player1Lbl").innerHTML = player1 + " : ";
    document.getElementById("player2Lbl").innerHTML = player2 + " : ";
    document.getElementById("questionPlayer").innerHTML = player1;
    document.getElementById("answerPlayer").innerHTML = player2;
}

function sendQues() {
    num1 = document.getElementById("num1Input").value;
    num2 = document.getElementById("num2Input").value;
    var division = document.getElementById("output");
    var label = document.createElement("label");
    label.id = "numberLbl";
    label.innerHTML = num1 + " x " + num2;
    division.appendChild(label);
    var br = document.createElement("br");
    division.appendChild(br);
    var label2 = document.createElement("label");
    label2.id = "answerLbl";
    label2.innerHTML = "Answer : ";
    division.appendChild(label2);
    var input = document.createElement("input");
    input.type = "number";
    input.id = "answerInput";
    input.style.marginLeft = 10;
    input.placeholder = "Answer";
    division.appendChild(input);
    var br2 = document.createElement("br");
    division.appendChild(br2);
    var button = document.createElement("button");
    button.id = "checkBtn";
    button.innerHTML = "Check"
    button.className = "btn btn-info";
    button.onclick = checkAns;
    division.appendChild(button);
    document.getElementById("num1Input").value = "";
    document.getElementById("num2Input").value = "";
    answer = num1 * num2;
}

answerPlayer = player1;
questionPlayer = player2;

function checkAns() {
    console.log(answer);
    answerWord = document.getElementById("answerInput").value;
    console.log(answerWord);
    if (answerWord == answer) {
        if (answerPlayer == player1) {
            p1Score = p1Score + 1;
        } else {
            p2Score = p2Score + 1;
        }
    }
    swithPlayer();
    console.log(p1Score);
    console.log(p2Score);
    document.getElementById("player1Score").innerHTML = p1Score;
    document.getElementById("player2Score").innerHTML = p2Score;
    document.getElementById("output").innerHTML = "";
}

function swithPlayer() {
    if (answerPlayer == player1) {
        answerPlayer = player2;
        questionPlayer = player1;

    } else {
        answerPlayer = player1;
        questionPlayer = player2;
    }
    console.log(questionPlayer);
    console.log(answerPlayer);
    document.getElementById("questionPlayer").innerHTML = questionPlayer;
    document.getElementById("answerPlayer").innerHTML = answerPlayer;
}