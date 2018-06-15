

var myQuiz = {
  currentQuestion:0,
  current_progress:0,
  correctTally: 0,
  result: ['You’re correct!', 'You’re wrong!'],
  justForFun: [
    "http://pic2.cits.net/Images/2016/7/13/133296077397a1df-b_Cut736429.jpg",
    "http://english.geopolitics.ro/wp-content/uploads/WW2.jpg",
    "http://www.chinatoday.com/fin/mon/rmb100new.jpg",
    "http://www.exploregeorgia.org/master/img/blog/2016/07/1996-Atlanta%E2%80%93Summer-Olympics-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alexander_Graham_Bell.jpg/220px-Alexander_Graham_Bell.jpg",
    ],
  correctFacts: [
    "The socialist market economy of the People's Republic of China is the world's second largest economy by nominal GDP and the world's largest economy by purchasing power parity according to the International Monetary Fund (IMF), although China's National Bureau of Statistics denies the latter assessment.",
    "September 2, 1945 - Day the Japanese delegation formally signs the instrument of surrender on board the USS Missouri, marking the official ending of World War II. 2,194 -- Days between the German invasion of Poland on September 1, 1939, through September 2, 1945, when Japan signs the unconditional surrender.",
    "The first use of paper currency can be traced back to the year 806 AD in China where they were used as “flying currency” because of the usage of letters of credit transferred over large distances.",
    "The 1996 Summer Olympics, officially known as the Games of the XXVI Olympiad and unofficially referred to as the Centennial Olympic Games, was an international multi-sport event that was celebrated from July 19 to August 4, 1996, in Atlanta, Georgia, United States.",
    "In 1906 the citizens of the City of Brantford, Ontario, Canada and its surrounding area formed the Bell Memorial Association to commemorate the invention of the telephone by Alexander Graham Bell in July 1874 at his parent's home, Melville House, near Brantford."
    ],
  questionList: [
    {
    question: "Question: Which is the largest country in the world by population?",
    options: {
				a: "India",
				b: "USA",
				c: "China",
				d: "Russia"
			},
    correct: "c"
  },
   {
    question: "Question: When did the second world war end?",
    options: {
				a: "1945",
				b: "1939",
				c: "1944",
				d: "1942"
			},
    correct: "a"
  },
   {
    question: "Question: Which was the first country to issue paper currency?",
    options: {
				a: "USA",
				b: "France",
				c: "Italy",
				d: "China"
			},
    correct: "d"
  },
   {
    question: "Question: Which city hosted the 1996 Summer Olympics?",
    options: {
				a: "Atlanta",
				b: "Sydney",
				c: "Athens",
				d: "Beijing"
			},
    correct: "a"
  },
   {
    question: "Question: Who invented Telephone?",
    options: {
				a: "Albert Einstein",
				b: "Alexander Graham Bell",
				c: "Isaac Newton",
				d: "Marie Curie"
			},
    correct: "b"
  }
  
    ]
};


$('#begin').click(function(e){     
    //when 'lets begin button is clicked
  $('.intro').addClass('hidden');                
  $('.questionForms').removeClass('hidden');    
  let firstPage = myQuiz.questionList[0];       
  $('#question').text(firstPage.question);      
  $('.a1').text(firstPage.options.a);           
  $('.b2').text(firstPage.options.b);           
  $('.c3').text(firstPage.options.c);           
  $('.d4').text(firstPage.options.d);           
});
  
$('#submit').click(function(e){                 
  e.preventDefault();                           
  if (myQuiz.currentQuestion < myQuiz.questionList.length - 1){   
     var choice = $('input[name="myAnswer"]:checked').val();
     if(choice!=='a' && choice!='b' && choice!='c' && choice!='d')
     {
     	alert("Please select an option");
     }
     else
     {
	     	// console.log(choice);
	     	// console.log(myQuiz.questionList[myQuiz.currentQuestion].correct);
	     	if (choice === myQuiz.questionList[myQuiz.currentQuestion].correct){ 
		       $('.questionForms').addClass('hidden');               
		       $('.results').removeClass('hidden');                  
		       $("h3#result").text(myQuiz.result[0]);                
		       $("img").attr('src', myQuiz.justForFun[myQuiz.currentQuestion]);   
		       $("p#textTrivia").text(myQuiz.correctFacts[myQuiz.currentQuestion]);
		       myQuiz.currentQuestion++;
		       myQuiz.correctTally++;
	   		}
	   		else{                                                     
			       $('.questionForms').addClass('hidden');                
			       $('.results').removeClass('hidden');                   
			       $("h3#result").text(myQuiz.result[1]);                 
			       $("img").attr('src', myQuiz.justForFun[myQuiz.currentQuestion]);     
			       $("p#textTrivia").text(myQuiz.correctFacts[myQuiz.currentQuestion]); 
			       myQuiz.currentQuestion++;
			    }
     }
  }
  else{   
       var choice = $('input[name="myAnswer"]:checked').val();  
       if (choice === myQuiz.questionList[myQuiz.currentQuestion].correct){ 
       $('.questionForms').addClass('hidden');                
       $('.results').removeClass('hidden');                   
       $("h3#result").text(myQuiz.result[0]);                 
       $("img").attr('src', myQuiz.justForFun[myQuiz.currentQuestion]);   
       $("p#textTrivia").text(myQuiz.correctFacts[myQuiz.currentQuestion]);
       $('.next').addClass('hidden');                         
       $('.goToScore').removeClass('hidden');                 
       myQuiz.currentQuestion++;
       myQuiz.correctTally++;
     }
    else{                                                     
       $('.questionForms').addClass('hidden');                
       $('.results').removeClass('hidden');                    
       $("h3#result").text(myQuiz.result[1]);                   
       $("img").attr('src', myQuiz.justForFun[myQuiz.currentQuestion]);     
       $("p#textTrivia").text(myQuiz.correctFacts[myQuiz.currentQuestion]);    
       $('.next').addClass('hidden');                         
       $('.goToScore').removeClass('hidden');                 
       myQuiz.currentQuestion++;
    }
  }
});
  
$('.results').on('click', '.next', function (e){        // if we receive a click on the next question button
  $('.results').addClass('hidden');
  $('input:checked').removeAttr('checked');
  $('.questionForms').removeClass('hidden');
  let nextQuestion = myQuiz.questionList[myQuiz.currentQuestion];      
  $('#question').text(nextQuestion.question);      
  $('.a1').text(nextQuestion.options.a);           
  $('.b2').text(nextQuestion.options.b);           
  $('.c3').text(nextQuestion.options.c);           
  $('.d4').text(nextQuestion.options.d);			
  myQuiz.current_progress+=20;
  $('#dynamic')
  .css("width",myQuiz.current_progress + "%")
  .attr("aria-valuenow",myQuiz.current_progress)
  .text(myQuiz.current_progress + "% Complete");
});

$('.results').on('click', '.goToScore', function (e){        // if we receive a click on the check score button
  $('.results').addClass('hidden');
  $('.end').removeClass('hidden');
  $('#score').text(`You scored ${myQuiz.correctTally} out of ${myQuiz.questionList.length} questions.`);
  if(myQuiz.correctTally === myQuiz.questionList.length){
     $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/ef/9e/3c/ef9e3c2faf229f595b6a59fb8731e30a--disney-cats-disney-cruiseplan.jpg');
  }
  else if (myQuiz.correctTally/myQuiz.questionList.length > .50 ){
     $('#scorepic').attr('src', 'https://i.imgflip.com/1jm073.jpg');
  }
  else {
    $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/62/37/0b/62370b0061eb6c4f2b62389c1116982c--grumpy-kitty-grumpy-cat-meme.jpg');
  }
});

$('.end').on('click', '#restart', function (e) {
  myQuiz.correctTally = 0;
  myQuiz.currentQuestion = 0;
  myQuiz.current_progress = 0;
  $('.end').addClass('hidden');
  $('.intro').removeClass('hidden');
  $('.goToScore').addClass('hidden');
  $('.next').removeClass('hidden');
  var width = document.getElementById("dynamic");
  width.style.width = "0" + "%";
  console.log(myQuiz.correctTally);
  console.log(myQuiz.current_progress)
  console.log(myQuiz.currentQuestion);
});

