let minutes = 25;
let seconds = 0;

let click = new Audio('/sounds/click.wav')
let bell = new Audio('/sounds/bell2.wav')

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    click.play();
    minutes = 24; 
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Session completed! Take a break";

                document.getElementById("done").classList.add("show_message");

                bell.play();
            }
            seconds = 60;
        }
    }
}