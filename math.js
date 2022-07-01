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
    actual_answer= parseInt(No1) * parseInt(No2);
    question_number = "<h4 id='word_display'>"+No1+ "X" +No2+" </h4>";
    input_box = "<br>Answer : <input type = 'text' id='check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;

    document.getElementById("No_1").value = "";
    document.getElementById("No_2").value = "";
};

question_turn= "player1";
answer_turn= "player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(answer==word){
        if(get_answer=="player1"){
            update_player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            update_player2_score= player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
 
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTM= "question_turn-"+ player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTM= "question_turn-"+ player1_name;
    }


    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTM= "answer_turn-"+ player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTM= "answer_turn-"+ player1_name;
    }
};