var winner = false;

$("td").click(function(){
	if (winner){
		alert("Game is over, click 'Play Again' to play another round");
	}
	else{
		if ($(this).text() === "X" || $(this).text() === "O"){
			alert("This place is already selected, please choose another!");
		}
		else{
			gameLogic($(this));
		}
	}

});

$("button").click(function(){
	reset();
});

function winnerCheck(){
	var one = $("td.one").text();
	var two = $("td.two").text();
	var three = $("td.three").text();
	var four = $("td.four").text();
	var five = $("td.five").text();
	var six = $("td.six").text();
	var seven = $("td.seven").text();
	var eight = $("td.eight").text();
	var nine = $("td.nine").text();

	if ((one===two && two===three) || (four===five && five===six) || (seven===eight && eight===nine) ||
		(one===four && four===seven) || (two===five && five===eight) || (three===six && six===nine) ||
		(one===five && five===nine) || (three===five && five===seven)){
		$("span").toggleClass("invisible");
		return true;
	}
}

function gameLogic(event){
	$("span").toggleClass("invisible");
	if($("#playerOne").hasClass("invisible")){
		event.text("X");
		event.addClass("taken");
		if (winnerCheck()){
			$("span").text("Player 1 Won");
			$("#playAgain").text("Play Again?");
			winner = true;
		}
	}
	else{
		event.text("O");
		event.addClass("taken");
		if (winnerCheck()){
			$("span").text("Player 2 Won");
			$("#playAgain").text("Play Again?");
			winner = true;
		}
	}		
}

function reset(){
	var one = $("td.one").text("1");
	var two = $("td.two").text("2");
	var three = $("td.three").text("3");
	var four = $("td.four").text("4");
	var five = $("td.five").text("5");
	var six = $("td.six").text("6");
	var seven = $("td.seven").text("7");
	var eight = $("td.eight").text("8");
	var nine = $("td.nine").text("9");
	$("td").removeClass("taken");
	winner = false;
	$("#playAgain").text("New Game");
	$("#playerOne").text("Player 1");
	$("#playerOne").removeClass("invisible");
	$("#playerTwo").text("Player 2");
	$("#playerTwo").addClass("invisible");
}
