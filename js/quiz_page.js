


let selectedQuiz = {
    quizNumber:1,
    quizTitle: 'SWE363',
    
    desc: "This is a test quiz and it will not be effective",


    
    questions:[
     {
         q:1,
         type: "mul",
        text: "This is Dummy Question #1",
       options: [
            "The Answer Is The Second Option",
            "Me Me Me Me Me!",
            "No, up there",
            "Forget it..."
       ]
    },
    {
        q:2,
        type: "mul",
        text: "This is Dummy Question #2",
        options: [
            "The Answer Is The Second Option",
            "Me Me Me Me Me!",
            "No, up there",
            "Forget it..."
       ]
    },
    {
        q:3,
        type: "mul",
        text: "This is Dummy Question #3",
        options: [
            "The Answer Is The Second Option",
            "Me Me Me Me Me!",
            "No, up there",
            "Forget it..."
       ]
    },
    {
        q:4,
        type: "mul",
        text: "This is Dummy Question #4",
        options: [
            "The Answer Is The Second Option",
            "Me Me Me Me Me!",
            "No, up there",
            "Forget it..."
       ]
    },
    {
        q:5,
        type: "mul",
        text: "This is Dummy Question #5",
        options: [
            "The Answer Is The Second Option",
            "Me Me Me Me Me!",
            "No, up there",
            "Forget it..."
       ]
    }
]
}



let mul1Answers = {
    q1:"",
    q2:"",
    q3:"",
    q4:"",
    q5:""
}


 let currentQuestion = 0






function buildCovidTest(q){

    $("#quiz").empty()

    let options = []


    q.options.forEach((e,i) => {

        options.push(`
        <div class="custom-control custom-radio m-3">
                  <input type="radio" id="customRadio${i + 1}" name="customRadio" value="${i+ 1}" class="custom-control-input mul">
                  <label class="custom-control-label" for="customRadio${i + 1}">${e}</label>
              </div>
        `)
        
    });
    

    $("#quiz").append(
     `
    <p class="card-text" >${q.text}</p>
              ${options.join('')}





              `
              )



              $("#even").empty()
              $(".mid").empty()

            if(currentQuestion > 0)
            $("#even").append(`<span class="m-4"><button type="button" class="btn btn-primary previuos">Previous Question</button></span>`)
    
            if(currentQuestion < 4)
            $("#even").append(`<button type="button" class="btn btn-primary next">Next Question</button>`)
            
            $(".mid").append(`<button type="button" class="btn btn-danger sub-mul1">Sumbit this group </button>`)

            $(".next").click(()=> nextQuestion())
            $(".previuos").click(()=> previuosQuestion())
            $(".sub-mul1").click(()=> submitMul1())



}




export default function buildQuizPage(){
    $(".main").empty()

  $(".main").append(`
    <div class="card center rndBrd">
    <div class="card-body">
    <h5 class="card-title">${selectedQuiz.quizTitle}</h5>
      
    <div id="quiz">
    
    
    </div>
    <div id="even">
    
    
    </div>
    
    <div class="mid m-3">
    
    </div>
    </div>
    
    
    
    </div>
    
    
    `)
    // buildCovidTest(quiz)
    
    buildCovidTest(selectedQuiz.questions[currentQuestion])


    

}





 function nextQuestion(){

    // checkMul1Answer()

    updateMul1Answers()

    currentQuestion++
    console.log('heeeey' , currentQuestion)

    let quiz = selectedQuiz.questions[currentQuestion]
    
    if(currentQuestion < selectedQuiz.questions.length){
        
        // console.log(selectedQuiz.questions[currentQuestion].type)
        if(quiz.type == "mul"){
            buildCovidTest(quiz)

            let choices = $(".mul")

            mul1Answers[`q${currentQuestion + 1}`]? choices[mul1Answers[`q${currentQuestion + 1}`] - 1].checked = true : ''
            
          console.log(mul1Answers)


        }
      
    

    }
        else
            $("#quiz").append("<p>no more questions</p>")
        
    
}




 function previuosQuestion(){
    updateMul1Answers()

    // checkMul1Answer()

    currentQuestion--
    console.log('heeeey' , currentQuestion)
    let quiz = selectedQuiz.questions[currentQuestion]

    
    // $("#quiz").empty()
    if(currentQuestion < selectedQuiz.questions.length){
        
        console.log(quiz.type)

        if(quiz.type == "mul"){        
            
            buildCovidTest(quiz)

            let choices = $(".mul")
            mul1Answers[`q${currentQuestion + 1}`]? choices[mul1Answers[`q${currentQuestion + 1}`] - 1].checked = true : ''

        }
    
    

    }
        else
            $("#quiz").append("<p>no more questions</p>")
        

}





function updateMul1Answers(){

    let choice 
    let choices = $(".mul")
 for(let i = 0 ; i< choices.length; i++) { 

    choices[i].checked? choice = choices[i].value: ''

}

mul1Answers[`q${currentQuestion+1}`] = choice
// console.log(mul1Answers , "jjjjjjj")


//     console.log(mul1Answers, "all the answers")

}