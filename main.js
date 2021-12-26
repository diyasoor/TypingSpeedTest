const setOfSentences = ["This world is filled with beautiful things.", 
                    "I wasn't as prepared as I will be this year.", 
                    "Thanks so much for the message.", 
                    "I have forwarded to Kelly.", 
                    "Sorry to keep you in suspense!",
                    "Have a good evening.",
                    "Has your 4th quarter changed?", 
                    "I appreciate you moving so quickly on this.",
                    "Did you ever hear anything?",
                    "Should systems manage the migration?",
                    "We are about to leave Heaven!",
                    "Wish me luck with Linda.", 
                    "I will be back Friday.",
                    "I am staying at a Hotel.",
                    "Email the consent to me."];

const msg = document.getElementById('message');
const type = document.getElementById('writingspace');
const btn = document.getElementById('btn');
let startTime, endTime;

const start = () => {
    let randomNumber = Math.floor(Math.random() * setOfSentences.length);
    msg.innerText = setOfSentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const end = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    //console.log(totalTime);

    let totalStr = type.value; 
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "Your typing speed is " + speed + " wpm ";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerHTML = finalMsg;
}

const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");  //array
    let word2 = str2.split(" ");  //array
    let count = 0;

    //array name then foreach - this will take whole function with value and index no. of that array
    word1.forEach(function (wrd, idx) {
        if(wrd == word2[idx]) {
            count++;
        }
    })

    //let errorWrds = (word1.length - count);
    let accu = Math.round((count / word1.length) * 100);
    return (` ; accuracy: ${accu}%`);
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    //console.log(response);
    return response;
}

function clearContents(text) {
    text.value = '';
}

function onTestChange(){
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        type.disabled = true;
        btn.innerText = "Start";
        end();
    }
}
btn.addEventListener('click', function(){
    //console.log(this);
    if(this.innerHTML == 'Start') {
        type.disabled = false;
        start();
    }else if(this.innerText == "Done") {
        type.disabled = true;
        btn.innerText = "Start";
        end();
    }
})
