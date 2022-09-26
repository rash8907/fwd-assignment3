//script tag deleted - 2
function quiz(){
	let score = 0;
    //deleted num - 9
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
    ]//closing square bracket - 3
	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length;
    //length - 4
    console.log("length: ", totalQuestion);
	
	//generate random number for question
	let num = Math.floor(Math.random() * 3);
    //added num - 10
		
	console.log("random num: ", num);
    console.log("question: ", quiz_questions[num]);
    console.log("answer: ", quiz_answers[num]);

	for(count = 0; count < totalQuestion; count++) {
        // added in semi colon in for loop - 5
        //added opening curly bracket - 6

        console.log("num: ", num)
        console.log("count: ", count)
        console.log("answer: ", quiz_answers[num])

		question = quiz_questions[num];
        answer = prompt(question);


        if (answer == quiz_answers[num]) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}

		num++;

		if (num == totalQuestion) {
			num = 0;
        } // closing curly bracket - 7
    }

    let scoreSection = document.getElementById("questionArea");
    scoreSection.innerHTML = `<h1>You got ${score} out of ${totalQuestion} questions correct.</h1>`;
}

quiz(); 