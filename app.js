const myQuestions = [
    {
        question: "What does HTML stands for?",
        answers: {
          a: "Hyperlinks and Text Markup Language",
          b: "Hyper Text Markup Language",
          c: "Home Tool Markup Language",
          d: "Hyper Text Majestic Language"
        },
        correctAnswer: "Hyper Text Markup Language"
      },
    {
        question: "What does CSS stand for?",
        answers: {
          a: "Cascade style sheets",
          b: "Computer Style Sheets",
          c: "Cascading style sheets",
          d: "Creative style sheets"
        },
        correctAnswer: "Cascading style sheets"
      },
      {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        answers: {
          a:"append()",
          b:"concat()",
          c:"attach()",
          d:"None of the above."
        },
        correctAnswer: "concat()"
      },
      {
        question: "Which built-in method sorts the elements of an array?",
        answers: {
          a: "changeOrder(order)",
          b: "order()",
          c: "sort()",
          d: "sortArray()"

        },
        correctAnswer: "sort()"
      },
      {
        question: "Which of the following is a server-side Java Script object?",
        answers: {
          a: "Function",
          b: "File",
          c: "FileUpload",
          d:"Date"
        },
        correctAnswer: "File"
      },
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d:"Mark Zuckerberg"
      },
      correctAnswer: "Brendan Eich"
    },
    {
        question: "What language defines the behavior of a web page??",
        answers: {
          a: "HTML",
          b: "CSS",
          c: "XML",
          d:"Java Script"
        },
        correctAnswer: "Java Script"
      },
    {
        question: "Which of the following is correct to write “Hello World” on the web page?",
        answers: {
          a: "System.out.println(“Hello World”)",
          b: "print(“Hello World”)",
          c: "document.write(“Hello World”)",
          d:"response.write(“Hello World”)"
        },
        correctAnswer: "document.write(“Hello World”)"
      },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "reactjs",
        d:"npm"
      },
      correctAnswer: "npm"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "ESLint"
    },
    // {
    //     question: "What does FTP stand for?",
    //     answers: {
    //       a: "Files To Put online",
    //       b: "File Transfer Protocol",
    //       c: "File Transfer Please",
    //       d: "Fund Transfer Price"
    //     },
    //     correctAnswer: "File Transfer Protocol"
    //   }

  ];
var select="none";
var score=0;
var count=1;
var selectedOpt;
var main=document.getElementById("main")
var main1=document.getElementById("main1")
var main2=document.getElementById("main2")
var nextBtn=document.getElementById("next")
var totScore;
var seconds;
var countdown;
function resetTimer(){
  clearInterval(countdown)
  document.getElementById("countdown").textContent=20;
}
function timer(){
  seconds=document.getElementById("countdown").textContent;
  countdown=setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if(seconds<10){
      document.getElementById("countdown").textContent= ("0" + seconds).substring(seconds.length);
    }
    if (seconds <= 0) clearInterval(countdown);
    if(seconds==0){
      nextQuestion()
    }
}, 1000);
}
// console.log(countdown)

function start(){
  main.classList.add("hidden")
  main1.classList.remove("hidden") 
  nextBtn.classList.remove("hidden")
  timer()
  // location.href="file:///D:/WebMobile/QuizApp/quiz.html"

}
function startQuiz(){
  
    location.reload()
}

function selectOpt(e){
    
    if (select=="none") {
        highlight(e);
        // console.log(e.id)   
    }
    else{
        unhighlight();
        highlight(e)
    }
    
}
function highlight(e){

    e.classList.remove("zinc")
    e.classList.add("black")
    select=e.id;
}
function unhighlight(){
    selectedOpt=document.getElementById(select);
    if(select!="none"){
    selectedOpt.classList.remove("black");
    selectedOpt.classList.add("zinc");
  }
  select="none"
}

function nextQuestion(){
    // console.log(nextBtn.innerHTML)
    if (select=="none") {
      setTimeout(changeQuestion, 1000);
    }
    else{
        checkAnswer();
        setTimeout(changeQuestion, 1000);
    }
    if(nextBtn.innerHTML=="Submit"){
        submit();
     }
    
}
function changeQuestion(){
    var qNum=document.getElementById("qNum");
    var ques=document.getElementById("ques");
    var opt1=document.getElementById("opt1");
    var opt2=document.getElementById("opt2");
    var opt3=document.getElementById("opt3");
    var opt4=document.getElementById("opt4");
    
    if (count<myQuestions.length) {
        qNum.innerHTML=count+1;
        ques.innerHTML=myQuestions[count].question;
        opt1.innerHTML=myQuestions[count].answers.a
        opt2.innerHTML=myQuestions[count].answers.b
        opt3.innerHTML=myQuestions[count].answers.c
        opt4.innerHTML=myQuestions[count].answers.d    
        
        unhighlight();
        resetTimer();
        timer();
        count++;
        if(count==myQuestions.length)
    {
            nextBtn.innerHTML="Submit"   
    }
    }
    
    
}

function submit(){
  clearInterval(countdown)
  main1.classList.add("hidden")
  main2.classList.remove("hidden")  
  nextBtn.classList.add("hidden")
  totScore=score;
  var p=document.getElementById("score")
  var scoretxt=document.createTextNode(totScore+'/10')
  p.appendChild(scoretxt)
  // window.location.href='file:///D:/WebMobile/QuizApp/submit.html';
    
}
// submit()
function checkAnswer(){
    selectedOpt=document.getElementById(select);
    var answer=selectedOpt.innerHTML;
     if (answer===myQuestions[count-1].correctAnswer) {
        var correct=document.getElementsByClassName("tick")
        var tickcln=correct[0].cloneNode(true)
        tickcln.classList.remove("hidden")
        selectedOpt.appendChild(tickcln)
        
        score+=1;
        
    }
    else{
        var wrong=document.getElementsByClassName("cross")
        var crosscln=wrong[0].cloneNode(true)
        crosscln.classList.remove("hidden")
        console.log(wrong[0],crosscln)
        selectedOpt.appendChild(crosscln);
       
    }
}

        
function placeScore(){
  var scoretxt=document.createTextNode(totScore+'/10')
  document.body.childNodes[1].childNodes[3].appendChild(scoretxt) 
}