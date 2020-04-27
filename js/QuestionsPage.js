import buildQuestionsCommentsPage from "./questions_comments.js"





export default function buildQuestionsPage(){
    $(".main").empty()




    const url = "http://localhost:3000/questions"

    let questions = []

    let jumpos = []
    
    axios.get(url).then(res=>{
      questions = res.data
      // console.log(res.data)
      console.log(questions)

      questions.forEach(e => {

        jumpos.push(`
        <div>
         <dt><h3>${e.title}</h3></dt>
         <br>
         <dd><h5>${e.content}</h5></dd>
         <dd><h6>${e.created_at}</h6></dd>
         <a href="#/questions/${e.id}/comments" class="btn btn-primary readBtn">Read</a>
         <hr class="hr-style-one">
         </div>`)
        
      });

      $(".main").append(`


      <div class="container jumbotron">
      <h1>Questions <i class="fas fa-question"></i></h1>
      <hr class="main-hr">
      <br>
      <dl>
  
      ${jumpos}
  
      </dl>
      <br>
      <br>
      <br>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">7</a></li>
          <li class="page-item"><a class="page-link" href="#">8</a></li>
          <li class="page-item"><a class="page-link" href="#">9</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  
  
      `)

      $(".readBtn").click(function(){
        // $(this.element).text('hfdhfgjhk')
        // console.log($(this).parent().find('h3').text())


        let q = questions.find(e=> e.title == $(this).parent().find('h3').text())

        console.log(q)

          buildQuestionsCommentsPage(q)
        // var app = Sammy.apps.body;
        // // console.log(app)
	 
	      // app.get(`#/questions/${q.id}/comments`, function(context) {
          
	      // console.log("You're in the Main route");
      	// });

      })

    }).catch(err=> console.log(err))
    



  //   for (let i = 0; i< 10; i++){
  //     questions.push(`
  //     <div>
  //       <dt><h3>Question Title</h3></dt>
  //       <br>
  //       <dd><h5>Question Details</h5></dd>
  //       <dd><h6>Question Date</h6></dd>
  //       <button class="btn btn-primary">Read</button>
  //       <hr class="hr-style-one">
  //       </div>
  // `)
  //   }


    
}

