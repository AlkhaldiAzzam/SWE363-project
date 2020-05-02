import buildQuestionsCommentsPage from "./questions_comments.js"
import { userController, domain } from "./main.js"


let user = JSON.parse(window.localStorage.getItem('user'))


export default function buildQuestionsPage(){
    $(".main").empty()




    const url = "https://swe363-api.herokuapp.com/questions/"

    let questions = []

    let jumpos = []
    
    axios.get(url).then(res=>{
      questions = res.data
      // console.log(res.data)
      console.log(questions)

      questions.reverse()

      let isAdmin = false

      if (JSON.parse(window.localStorage.getItem('user')).user_data.user_type == "admin")
        isAdmin = true

        // console.log(JSON.parse(window.localStorage.getItem('user')).user_data.user_type)
      questions.forEach(e => {

        let deleteButton = ""
        if (isAdmin)
          deleteButton = `<dt> <button id="${e.id}" class="btn btn-primary deleteBtn">Delete post</button> </dt>`

        jumpos.push(`
        <div>
        <div class="d-flex justify-content-between">
         <dt class="float-left"><h3>${e.title}</h3></dt>
         ${deleteButton}
        </div>

         <br>
         <dd><h5>${e.content}</h5></dd>
         <dd><h6>Posted by: ${e.created_by}</h6></dd>
         <dd><p>${e.created_at}</p></dd>
         <button  id="${e.id}" class="btn btn-primary readBtn">Read</button>
         <hr class="hr-style-one">
         </div>`)
        
      });

      $(".main").append(`


      <div class="container jumbotron">
      <div class="d-flex justify-content-between">
      <h1 >Questions <i class="fas fa-question"></i></h1>
      <a href="#/postquestion" class="btn btn-primary">Post</a>

      </div>
      <hr class="main-hr">
      <br>
      <dl>
  
      ${jumpos.join('')}
  
      </dl>
      <br>
      <br>
      <br>
      
    </div>
  
  
      `)

      $(".readBtn").click(function(){
        // $(this.element).text('hfdhfgjhk')
        // console.log($(this).parent().find('h3').text())


        let q = $(this).attr('id')

        console.log(q)

        window.location.href = domain + `questions/${q}/comments`

          

      })

      $(".deleteBtn").click(function(){

        let url2 = `https://swe363-api.herokuapp.com/questions/${this.id}/deletebyadmin`


        let con = confirm("Are you sure you want to delete this?")

        if(con){

          axios.post(url2,{}, {
            'headers': {
              'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
            }
          }).then(res=>{
            location.reload()
            console.log(res)
          }).catch(err=>console.log(err))
        }
          
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

