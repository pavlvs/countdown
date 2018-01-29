let secondsRemaining, intervalHandle;
function resetPage() {
    document.getElementById('inputArea').style.display = 'block';
}
// as soon as the page is loaded
window.onload = function () {
    // create input text box and give it an id of "minutes"
    let inputMinutes = document.createElement('input');
    inputMinutes.setAttribute('id', 'minutes');
    inputMinutes.setAttribute('type', 'text');

    // createa button
    let startButton = document.createElement('input');
    startButton.setAttribute('type', 'button');
    startButton.setAttribute('value', 'Start Countdown');
    startButton.onclick = function () {
        startCountdown();
    };
    // add to the DOM, inside the div called "inputArea"
    document.getElementById('inputArea').appendChild(inputMinutes);
    document.getElementById('inputArea').appendChild(startButton);

}

function startCountdown() {
    // get contents of the minutes textbox
    let minutes = document.getElementById('minutes').value;
    // check if not a number
    if (isNaN(minutes)) {
        alert('Please enter a number');
        return;
    }
    //how many seconds?
    secondsRemaining = minutes * 60;
    // every second call the tick function
    intervalHandle = setInterval(tick, 1000);
    //hide the form
    document.getElementById('inputArea').style.display = 'none';
}

function tick() {
    // grab the h1
    timeField = document.getElementById('time');

    // turn seconds into mm:ss
    minutes = Math.floor(secondsRemaining / 60);
    seconds = secondsRemaining - (minutes * 60);

    // add a leading zero (as a string value) if seconds less than 10
    if (seconds < 10) {
        seconds = '0' + seconds;
    } 
    // concatenate with colon
    let time = minutes.toString() + ":" + seconds;

    // change the contents of the h1
    timeField.textContent = time;

    // stop if down to zero
    if (secondsRemaining === 0) {
        alert('Done');
        clearInterval(intervalHandle);
        resetPage();
    }
    //subtract from seconds remaining
    secondsRemaining--
    console.log(secondsRemaining, 'seconds remaining');
}