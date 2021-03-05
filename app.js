// var promptStr = prompt("好きな言葉をどうぞ");

// alert(promptStr);

var user_hand = prompt("じゃんけんの手を選べ");

while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
    alert('グー・チョキ・パーのいずれかを入力して下さい');
    user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
    }
var my_hand = getJShand();

var judge = winlose(user_hand , my_hand);

if(user_hand != null){
alert("君の手は" + user_hand +"." +"僕の手は" + my_hand + "だよ。\nつまり" + judge + "だね。おつかれぃ");
} else {
    alert("gg");
}
function getJShand(){
    var hand_num = Math.floor(Math.random()*3);
    var hand_name;

    if(hand_num == 0){
        hand_name = "グー";
    } else if(hand_num == 1) {
        hand_name = "チョキ";
    } else if(hand_num == 2){
        hand_name = "パー";
    }

    return hand_name;
}

function winlose(user, my){
    var winloseStr;

    if(user == "グー"){
        if(my == "グー"){
            winloseStr = "あいこ";
        }else if(my == "チョキ"){
            winloseStr = "勝ち";
        }else if(my == "パー"){
            winloseStr = "負け";
        }
    } else if(user == "チョキ"){
        if(my == "グー"){
            winloseStr = "負け";
        }else if(my == "チョキ"){
            winloseStr = "あいこ";
        }else if(my == "パー"){
            winloseStr = "勝ち";
        }
    } else if(user == "パー"){
        if(my == "グー"){
            winloseStr = "勝ち";
        }else if(my == "チョキ"){
            winloseStr = "負け";
            }else if(my == "パー"){
            winloseStr = "あいこ";
            }
    }
        return winloseStr;
    }