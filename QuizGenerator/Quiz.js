$(function() {
	var questions = getAllQuestions();
	var container = $("#questionContainer");
	console.log("Inside jQuery document.ready(). Total Questions: " + questions.length);
	  

	printingQuestions = function(questions)
	{
		//Initializing
		var questionsList = $(document.createElement('ol'));
		questionsList.addClass('questionslist');
		
		for (var i = 0; i < questions.length; i++)
		{
			//Initializing
			division = $(document.createElement('div'))
			listItem = $(document.createElement('li')) 
			questionParagraph = $(document.createElement('p'))

			questionParagraph.html(questions[i].question)
			division.append(listItem.append(questionParagraph))
			addOptionsToQuestions(listItem, shuffling(questions[i].options.slice())) //Shuffling options

			questionsList.append(division)
		}

		container.append(questionsList) // Appending the questions to container
	}


	addOptionsToQuestions = function(questions, options)
	{
		//Initializing
		optionsList = $(document.createElement('ol'));
		optionsList.addClass('optionslist');

		for(var i = 0 ; i < options.length; i++)
		{
			optionsList.append('<li>'+ options[i].option +'</li>')
		}

		questions.append(optionsList) // Appending the options to questions
	}

	printingAnswers = function(questions)
	{
		//Initializing
		var questionsList = $(document.createElement('ol'));
		questionsList.addClass('questionslist');

 
		for (var i = 0; i < questions.length; i++)
		{
			//Initializing
			division = $(document.createElement('div'))
			listItem = $(document.createElement('li')) 
			questionParagraph = $(document.createElement('p'))

			questionParagraph.html(questions[i].question)
			division.append(listItem.append(questionParagraph))
			addOptionsToQuestions(listItem,[questions[i].options[0]])

			questionsList.append(division)
		}

		container.append(questionsList)// questions append
	}

	
	gettingQuestions = function(questions)
	{
		var questionList = []
		//filters Questions 
		var filteringJava = questions.filter
		(
			function(item)
			{if (item.category =='JavaScript') 

				return true}
		) 

		var filteringJQuery = questions.filter
		(
			function(item)
			{if (item.category =='jQuery') 

				return true}

		)

		//shuffling both lists 
		filteringJava  = shuffling(filteringJava)
		filteringJQuery = shuffling(filteringJQuery)

		//getting random numbers - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
		var jsNum = Math.floor((Math.random() * filteringJava.length ) + 1);
		var jqNum = Math.floor((Math.random() * filteringJQuery.length ) + 1);
		
		//Stringing Together but slicing the questions and then shuffling them - https://www.w3schools.com/jsref/jsref_slice_array.asp
		questionList = shuffling(questionList.concat
								  	(filteringJava.slice(0,jsNum))
										.concat(filteringJQuery).slice(0,jqNum))
		
		return questionList
	}
	
	//Shuffling code 
	function shuffling(array) 
	{
		var Index = array.length, temp, randomIndex;

		while (0 !== Index) 
		{
		  randomIndex = Math.floor(Math.random() * Index);
		  Index -= 1;
		  temp = array[Index];
		  array[Index] = array[randomIndex];
		  array[randomIndex] = temp;
		}
	  
		return array;
	}


	//getQuestionsElement()
	$("#quizBuilder").click(function() {
		console.log("Inside #quizBuilder.click ...")
		// Empty container element so that previous questions are cleared
		container.empty();
		//Call the question function to render them
		Questions = gettingQuestions(questions)
		printingQuestions(Questions)
		//Printing
		window.print();
	});

	$("#answerBuilder").click(function() {
		console.log("Inside #answerBuilder.click ...")
		// Empty container element so that previous questions are cleared
		container.empty();
		//Call the answer function to render them
		printingAnswers(Questions)
		//Printing
		window.print();
	});
	
});