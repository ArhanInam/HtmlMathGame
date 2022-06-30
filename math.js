player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_Answer").innerHTML = "Answer Turn - " + player2_name;

function send() 
{
    No1 =document.getElementById("No_1").value;
    No2 =document.getElementById("No_2").value;
    Question= No1 + No2;
    question_word = "<h4 id='word_display'>Q. "Question" <h4>";
    input_box = "<br>Answer : <input type = 'text' id='check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
};
