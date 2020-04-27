



export default function buildQuestionsCommentsPage(data){
    $(".main").empty()




    const url = `http://localhost:3000/questions/${data.id}/comments`

    let comments = []

    let jumpos = []
    
    axios.get(url).then(res=>{
      comments = res.data
      // console.log(res.data)
    //   console.log(questions)

      


    }).catch(err=> console.log(err))
    
    let commentArea = ""

    if(window.localStorage.getItem('user')){
        commentArea = ` <div class="form-group">
        <label for="exampleFormControlTextarea1">Write your comment</label>
        <textarea placeholder="Be nice and informative" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-primary mb-2">Submit your comment</button>
    
        </div>`
    }


    comments.forEach(e => {

        jumpos.push(`
        <div>
          
        <dd><p> ${e.content} </p></dd>
        <dd><h6>${e.created_at}</h6></dd>
       
        </div>
        
        `)

        console.log(e)
        
      });

      $(".main").append(`


      <div class="container-fluid main">

      <div class="container jumbotron">
        <div>
          <h3>${data.title}</h3>
          <p> ${data.content} </p>
        </div>
        <hr class="main-hr">
        <br>
        <dl>
    
         ${jumpos}
    
        </dl>
        <br>
        <br>
        <br>

        ${commentArea}
    </div>
      
   
  
  
      `)

    
}