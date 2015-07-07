var html = new Array();
var score = 0;
var total = 0;

function gup( name ) {
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var tmpURL = window.location.href;
	var results = regex.exec( tmpURL );
		if( results == null )
			return "";
		else
			return results[1];
}

function formCheck(formobj){
	var alertMsg = "Please complete the following questions:\n";
	var count = formobj.elements["numQ"].value;
	var l_Msg = alertMsg.length;
	alert(alertMsg);
	
	for (var i = 1; i <= count; i++){
		var obj = formobj.elements["q" + i];
		if (obj){
			switch(obj.type){
			case "select-one":
				if (obj.selectedIndex == -1 || obj.options[obj.selectedIndex].text == ""){
					alertMsg += " - Question" + i + "\n";
				}
				break;
			case "select-multiple":
				if (obj.selectedIndex == -1){
					alertMsg += " - Question" + i + "\n";
				}
				break;
			default:
			}
			if (obj.type == undefined){
				var blnchecked = false;
				for (var j = 0; j < obj.length; j++){
					if (obj[j].checked){
						blnchecked = true;
					}
				}
				if (!blnchecked){
					alertMsg += " - Question" + i + "\n";
				}
			}
		}
	}

	if (alertMsg.length == l_Msg){
		return true;
	}else{
		alert(alertMsg);
		return false;
	}
}

function askQuestion(id) {
	html.push ('<div class="quizQuestionContainer"><b class="quizQuestionTop"><b class="qq1"></b><b class="qq2"></b><b class="qq3"></b><b class="qq4"></b></b><h3>QUESTION '+ (id+1) +'</h3><div class="quizQuestionContent">');
	if (quiz.questions[id].img != "") html.push ('<img src="'+ quiz.questions[id].img +'" />');
	html.push ('<strong>'+ quiz.questions[id].text +'</strong><ul>');
	for (var i = 0; i < quiz.questions[id].responses.length; i++) {
		html.push('<li><input type="radio" name="q'+ id +'" value="'+ i +'" />'+ quiz.questions[id].responses[i] +'</li>');
	}
	html.push ('</ul><br /></div><b class="quizQuestionBottom"><b class="qq8"></b><b class="qq7"></b><b class="qq6"></b><b class="qq5"></b></b></div>');
}

function scoreQuestion(id) {
	var correct = ((gup("q"+(id)) === (''+ quiz.questions[(id)].answer))?true:false);
	var yourAnswer = quiz.questions[id].responses[gup("q"+id)];
	var correctAnswer = ((correct)?"":quiz.questions[id].responses[quiz.questions[id].answer] + "&nbsp;")
	var expandedAnswer = quiz.questions[id].expandedAnswer;
	var questionStyle = ((correct)?"questionRight":"questionWrong")
	var answerStyle = ((correct)?"answerRight":"answerWrong")
	if (correct) score = score + quiz.questions[id].score
	total = total + quiz.questions[id].score;

	html.push ('<div class="quizQuestionContainer"><b class="quizQuestionTop"><b class="qq1"></b><b class="qq2"></b><b class="qq3"></b><b class="qq4"></b></b><h3 class="'+ questionStyle +'">QUESTION '+ (id+1) +'</h3><div class="quizQuestionContent">');
	if (quiz.questions[id].img != "") html.push ('<img src="'+ quiz.questions[id].img +'" />');
	html.push ('<strong>'+ quiz.questions[id].text +'</strong><ul>');
	for (var i = 0; i < quiz.questions[id].responses.length; i++) {
		html.push('<li>'+ quiz.questions[id].responses[i] +'</li>');
	}
	html.push ('</ul><br class="clear" />');
	html.push ('<span class="'+ answerStyle +'"><small>YOUR ANSWER</small>&nbsp;&#45;&nbsp;'+ yourAnswer +'</span></div>');
	html.push ('<div class="quizQuestionAnswer">');
	if (correct && expandedAnswer == "") {
		html.push('')
	} else {
		html.push ('<small>CORRECT ANSWER</small>&nbsp;&#45;&nbsp;'+ correctAnswer + expandedAnswer)
	}
	if (quiz.questions[id].moreInfo != "") html.push ('<p class="moreInformation"><small>MORE INFORMATION:</small><br />'+ quiz.questions[id].moreInfo +'</p><br class="clear" />');
	html.push ('</div><b class="quizQuestionBottom"><b class="qq4"></b><b class="qq3"></b><b class="qq2"></b><b class="qq1"></b></b></div>');
}

function grade() {
	 return '<span class="quizScore">YOUR SCORE: '+ score +' out of '+ total +'&nbsp;&#45;&nbsp;Read the answers to the quiz below.</span>'
}

function publishQuiz() {
	var askQuiz = ((gup("q0") == "")?true:false)
	for (var i = 0; i < quiz.questions.length; i++) {
		if (askQuiz) {
			askQuestion(i)
		} else {
			scoreQuestion(i)
		}
	}
	document.write ('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/quiz/quizStyles.css">');
	if (askQuiz) {
		document.write ('<form name="formCheck" onSubmit="return formCheck(this)">' + html.join("") + '<input type="image" src="http://media.techtarget.com/quiz/images/button_shyd.gif" alt="See How You Did" value="Submit" /></form>');
	} else { 
		document.write (grade() + html.join(""));
	}
}

publishQuiz();