/*global questions*/

let ap;
let rp;
let r;
let sk;
let x = document.getElementsByClassName('answer')[0].id;
document.getElementById('screen').style.visibility = 'hidden'
let ques = questions;
let used = [];
let maxp = 1000000;
let arlngth = 75;




function newGame(){
    sk=0;
    ap=0;
    rp=100;
    used = [];
     r = Math.floor(Math.random()*arlngth);
     document.getElementById('screen').style.visibility = 'visible'
     document.getElementById('loser').style.visibility = 'hidden'
    document.getElementById('question').innerHTML =ques[r].question;
    document.getElementById('ans1').innerHTML =ques[r].content[0];
    document.getElementById('ans2').innerHTML =ques[r].content[1];
    document.getElementById('ans3').innerHTML =ques[r].content[2];
    document.getElementById('ans4').innerHTML =ques[r].content[3];
    document.getElementById('allprize').innerHTML =ap;
    document.getElementById('roundprize').innerHTML= rp;
    used.push(ques[r].question);
}

function answer(p){
    
        if (ques[r].correct===p){
        ap=ap+rp;
        rp=rp*2;
        if (ap<maxp){
            while (used.includes(ques[r].question)){
                r = Math.floor(Math.random()*arlngth);
            }
        document.getElementById('question').innerHTML =ques[r].question;
        document.getElementById('ans1').innerHTML =ques[r].content[0];
        document.getElementById('ans2').innerHTML =ques[r].content[1];
        document.getElementById('ans3').innerHTML =ques[r].content[2];
        document.getElementById('ans4').innerHTML =ques[r].content[3];
        document.getElementById('allprize').innerHTML =ap;
        document.getElementById('roundprize').innerHTML= rp;
        used.push(ques[r].question);
        } else {
            document.getElementById('screen').style.visibility = 'hidden';
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('question').innerHTML = 'Congratulations! You won 1000000!';

        }
    } else {
        document.getElementById('screen').style.visibility = 'hidden';
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('question').innerHTML = 'Game over! Your prize is: ' + ap + '!';







    }
}

function skip(){
    if (sk ===0){
    r = Math.floor(Math.random()*arlngth)
        document.getElementById('question').innerHTML =ques[r].question;
        document.getElementById('ans1').innerHTML =ques[r].content[0];
        document.getElementById('ans2').innerHTML =ques[r].content[1];
        document.getElementById('ans3').innerHTML =ques[r].content[2];
        document.getElementById('ans4').innerHTML =ques[r].content[3];
        sk=sk+1;
    } else{
        alert('You cannot skip more questions!')
    }
}



