var SpeechRecognition = window.webkitSpeechRecognition;

var recongnition = new SpeechRecognition();

function start() 
{ 
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}

recongnition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}
