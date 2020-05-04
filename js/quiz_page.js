
const diagnosisUrl = "https://api.infermedica.com/covid19/diagnosis"
const triageUrl = "https://api.infermedica.com/covid19/triage"

const headers = {
    "App-Id": "8a32f5f0",

    "App-Key": "9bf3efef5a26acf807ce1f9fc5179913",
    
    "Content-Type": "application/json"
}


let single = {
    "question": {
        "type": "single",
        "text": "Are you breathing very fast?",
        "items": [
          {
            "id": "s_13",
            "name": "Accelerated breathing",
            "choices": [
              {
                "id": "present",
                "label": "Yes"
              },
              {
                "id": "absent",
                "label": "No"
              }
            ]
          }
        ],
        "extras": {}
      }
}


let evidence = []
let data ={}

let group_multiple = {
    "question": {
        "explanation": null,
        "extras": {},
        "items": [
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": "Chronic lung diseases are disorders that affect the lung and other parts of the respiratory system. Conditions: Chronic Obstructive Pulmonary Disease, moderate and severe Asthma, and other lung conditions.",
                "id": "p_16",
                "name": "Diagnosed chronic lung disease"
            },
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": "Congestive heart failure is a chronic progressive condition where your heart is unable to pump blood efficiently due to conditions such as coronary artery disease and hypertension.",
                "id": "p_17",
                "name": "History of heart failure"
            },
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": null,
                "id": "p_18",
                "name": "Current cancer"
            },
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": "A weakened immune system can be caused by many factors, e.g., cancer treatment, bone marrow or organ transplantation, poorly controlled HIV/AIDS, prolonged use of immunosuppressant drugs such as corticosteroids or drugs used for rheumatoid arthritis, and some congenital diseases.",
                "id": "p_19",
                "name": "Weakened immune system"
            },
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": "A long-term liver disease due to alcoholism, infections or congenital diseases, leading to loss of function, cirrhosis and other complications.",
                "id": "p_20",
                "name": "History of chronic liver disease"
            },
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": "End-stage kidney disease is a condition where kidney function is greatly reduced.",
                "id": "p_21",
                "name": "History of kidney failure"
            },
            {
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ],
                "explanation": null,
                "id": "p_22",
                "name": "Long-term stay at a care facility or nursing home"
            }
        ],
        "text": "Please check all statements that apply to you",
        "type": "group_multiple"
    }

}

let currentQuestion = {}

// console.log(single.questions[0].items[0])




function buildSingleQuestion(q){
    $("#even").empty()
    $(".mid").empty()
    $("#quiz").empty()

    console.log("hi, i'm the single function")
    let options = []


    q.items[0].choices.forEach((e,i) => {

        options.push(`
        <div class="custom-control custom-radio m-3">
                  <input type="radio" id="${e.id}" name="single" value="${e.id}" class="custom-control-input mul">
                  <label class="custom-control-label" for="${e.id}">${e.label}</label>
              </div>
        `)
        
    });
    // console.log(q.items[0].id)

    $("#quiz").append(
     `
    <h5 class="card-text" id="${q.items[0].id}" >${q.text}</h5>
              ${options.join('')}





              `
              )



              $("#even").empty()
              $(".mid").empty()

            // if(currentQuestion > 0)
            // $("#even").append(`<span class="m-4"><button type="button" class="btn btn-primary previuos">Previous Question</button></span>`)
    
            // if(currentQuestion < 4)
            // $("#even").append(`<button type="button" class="btn btn-primary next">Next Question</button>`)
            
            $(".mid").append(`<button type="button" class="btn btn-danger next">Next question </button>`)

            // $(".next").click(()=> nextQuestion())
            // $(".previuos").click(()=> previuosQuestion())
            $(".next").click(()=> {
                // console.log($("input[name='single']:checked").val())
                // console.log($("h5").attr('id'))
                evidence.push({
                    'id': $("h5").attr('id'),
                    'choice_id': $("input[name='single']:checked").val()
                })
                console.log(evidence)

                apiCallDiagnosis()

            })





}



 function buildFormPage(){
    
    $("#quiz").empty()
    $("#quiz").append(`
    <div class="center form rndBrd">
        <form>
            <div class="pt-5">

                <div class="form-group ">
                    <label >Please enter your age</label>
                    <input type="number" class="form-control w-60 mx-auto" id="age" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="ID">Please select your sex </label>

                    <div class="custom-control custom-radio m-3">
                  <input type="radio" id="male" name="gender" value="male" class="custom-control-input mul">
                  <label class="custom-control-label" for="male">Male</label>
              </div>
              <div class="custom-control custom-radio m-3">
                  <input type="radio" id="female" name="gender" value="female" class="custom-control-input mul">
                  <label class="custom-control-label" for="female">Female</label>
              </div>
                </div>
                
                <button type="button" class="btn btn-primary" id="idBtn">Submit</button>
            </div>
          </form >
    </div>
`)

$("#idBtn").click(e=>{
    e.preventDefault()
    console.log($("#age").val())

     data = {
        sex : $("input[name='gender']:checked").val(),
        age : Number.parseInt($("#age").val(), 10)
    }

    apiCallDiagnosis()
    
})
}



function apiCallDiagnosis(){

    
    
    axios(
        {
            'url': diagnosisUrl,
            'method': 'POST',
            'headers': headers,
            'data': {
                'sex' : data.sex,
                'age' : data.age,
                'evidence' : evidence
            }
        }
    ).then(res=>{
        currentQuestion = res.data
        nextQuestion()
        console.log(res.data.should_stop)
    }).catch(err => console.log(err))


}




function apiCallTriage(){

    
    
    axios(
        {
            'url': triageUrl,
            'method': 'POST',
            'headers': headers,
            'data': {
                'sex' : data.sex,
                'age' : data.age,
                'evidence' : evidence
            }
        }
    ).then(res=>{
        currentQuestion = res.data
        buildReportPage()
        evidence = []
        data = {}
        console.log(res.data.should_stop)
    }).catch(err => console.log(err))


}






function nextQuestion() {
    console.log(currentQuestion)

    if(currentQuestion.should_stop == true){
        apiCallTriage()
    }

    else{

        if (currentQuestion.question.type === "single")
        buildSingleQuestion(currentQuestion.question) 
        else
        buildMultipleGroupQuestion(currentQuestion.question)
    }
    
}


 function buildMultipleGroupQuestion(q){

    $("#quiz").empty()
    $("#even").empty()
    $(".mid").empty()

    console.log("hi, i'm the multiple function")

    let options = []


    q.items.forEach((e,i) => {

        options.push(`
        <div class="form-check m-3">
                        <input class="form-check-input mul2" name="answers" type="checkbox" value="${e.id}" id="${e.id}">
                        <label class="form-check-label" for="${e.id}">
                        ${e.name}
                        </label>
                    </div>
        `)
        
    });


    $("#quiz").append(

     `
    <h4 class="card-text mb-3" >${q.text}</h4>

    <div class="brd text-center">

    ${options.join('')}
                </div
              <div id="even">
              
              
              </div>


              `
    )


              $("#even").empty()
              $(".mid").empty()

            // if(currentQuestion > 5)
            // $("#even").append(`<button type="button" class="btn btn-primary previuos">Previous Question</button>`)
    
            // if(currentQuestion < 7)
            // $("#even").append(`<button type="button" class="btn btn-primary next">Next Question</button>`)
            
            $(".mid").append(`<button type="button" class="btn btn-danger sub-mul2">Sumbit this group </button>`)

            // $(".next").click(()=> nextQuestion())
            // $(".previuos").click(()=> previuosQuestion())
            $(".sub-mul2").click(()=> {

                for(let i = 0; i < $('input[type="checkbox"]').length; i++){
    
                    let cur = $('input[type="checkbox"]')[i]
                    let a 
                    $(cur).is(":checked")? a = "present": a = "absent"
                    evidence.push({
                        'id':$(cur).val(),
                        'choice_id': a
                    })
                    // console.log($(cur).val() , $(cur).is(":checked"))
                    
                }
                console.log(evidence)
                apiCallDiagnosis()

            })

         



            
            

}






function buildReportPage() {

    $(".main").empty()

    let level 

    switch(currentQuestion.triage_level){
        case "no_risk" : 
        level = "Follow preventive measures."
        break;

        case "self_monitoring" : 
        level = "Stay home and monitor your symptoms."
        break;

        case "quarantine" : 
        level = "Quarantine yourself."
        break;

        case "isolation_call" : 
        level = "Consult health care provider. Avoid all contact."
        break;

        case "call_doctor" : 
        level = "Call a doctor, symptoms might not be directly linked to COVID-19."
        break;

        case "isolation_ambulance" : 
        level = "Call the emergency number. Avoid all contact."
        break;
    }

    let name
    if(JSON.parse(window.localStorage.getItem('user')))
        name = JSON.parse(window.localStorage.getItem('user')).user_data.username
    else
        name = "Guest"
    $(".main").append(`
    <h2 class="text-center m-4">Your Report</h2>

      <div class="jumbotron">
        <h1 class="display-4 m-4">Finally, ${name}</h1>
        <p class="lead"> ${currentQuestion.description}</p>
        <hr class="my-4">
        <h4>You should: ${level}</h4>
      </div>`)

    
}





export default function buildQuizPage(){
    $(".main").empty()

  $(".main").append(`
    <div class="card center rndBrd">
    <div class="card-body">
    <h3 class="card-title">COVID-19 Diagnosis</h3>
      
    <div id="quiz">
    
    
    </div>
    <div id="even">
    
    
    </div>
    
    <div class="mid m-3">
    
    </div>
    </div>
    
    
    
    </div>
    
    
    `)
  
    
    // buildSingleQuestion(single.question)
    // buildMultipleGroupQuestion(group_multiple.question)
    buildFormPage()
    // buildReportPage()
    

}


