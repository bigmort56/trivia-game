countdown(40, ".timer");

var correct = 0;


var wrong = 0;


var correctChecked1 = $("#correct1").checked;

var correctChecked2 = $("#correct2").checked;

var correctChecked3 = $("#correct3").checked;

var correctChecked4 = $("#correct4").checked;

var wrongChecked1 = $("#wrong1").checked;

var wrongChecked2 = $("#wrong2").checked;

var wrongChecked3 = $("#wrong3").checked;

var wrongChecked4 = $("#wrong4").checked;

function countdown (secs, elem) {
	var timeClock = $(elem);
	timeClock.html("Your time" + secs);
	if(secs < 1) {
		clearTimeout(timer);
		results();
	}

	secs --;

	var timer = setTimeout('countDown('+secs+', "'+elem+'")', 4000);


}

document.on("click", $("#submitBtn")) {

	

	results();
}


function results () {


	if (correctChecked1 == true){
		correct ++;
	}

	else {
		wrong ++;
	}

	if(correctChecked2 == true) {
		correct ++;
	}

	else {
		wrong ++;
	}

	if(correctChecked3 == true) {
		correct ++;
	}

	else{
		wrong ++;
	}

	if(correctChecked4 == true) {
		correct ++;
	}

	else {
		wrong ++;
	}

	document.empty();

	$(".container").html("You got " + correct + "correct.");
	$(".container").append("You got " +wrong+ "wrong.");
}
