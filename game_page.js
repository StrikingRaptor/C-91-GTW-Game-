player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player_1_name + " : ";
document.getElementById("player2_name").innerHTML=player_2_name + " : ";

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

function send(){
 getWord=document.getElementById("word").value;
 word=getWord.toLowerCase();
console.log("word in lowercase is " + word);

charAt1=word.charAt(1);
console.log(charAt1);

mid_pos=Math.floor(word.length/2);
console.log(mid_pos);

charAt2=word.charAt(mid_pos);
console.log(charAt2);

length_minus_1=word.length-1;
charAt3=word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

q_word="<h4 id='word_display'>Q." + remove_charAt3 + "</h4>";
input_box="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check </button>";

row=q_word + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

Q_turn="player_1";
Ans_turn="player_2";

function check(){
    get_ans=document.getElementById("input_check_box").value;
    answer=get_ans.toLowerCase();
    console.log("answer in lowercase is" + answer);

    if(word==answer){
        if(Ans_turn=="player_1"){
            player_1_score=player_1_score + 1;
            document.getElementById("player1_score").innerHTML=player_1_score;
        }
        else{
           player_2_score=player_2_score + 1;
           document.getElementById("player2_score").innerHTML=player_2_score;
        }
    }
    if(Q_turn=="player_1"){
        Q_turn="player_2";
        document.getElementById("player_question").innerHTML="Question turn " + player_2_name;

    }
    else{
        Q_turn="player_1";
        document.getElementById("player_question").innerHTML="Question turn " + player_1_name;
    }
    if(Ans_turn=="player_1"){
        Ans_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer turn " + player_2_name;
    }
    else{
        Ans_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn " + player_1_name;
    }
    document.getElementById("output").innerHTML="";

}
