


    // let user = JSON.parse(window.localStorage.getItem('user'))

export default function buildQuestionsCommentsPage(data){
    $(".main").empty()




    const url = `http://localhost:3000/questions/${data.id}/comments`

    
    let jumpos = []
    let comments = []
    
    axios.get(url).then(res=>{
      comments = res.data
    //   console.log(res.data)
    //   console.log(questions)

      
    comments.forEach(e => {

        console.log(e)
        jumpos.push(`
        <div>
          
        <dd><h4> ${e.content} </h4></dd>
          
          <dd><h6>Posted by: ${e.created_by}</h6></dd>
        <dd><p>${e.created_at}</p></dd>
        
       
        </div>
        
        `)

        // console.log(e)
        
      });

      let commentArea = ""

      if(window.localStorage.getItem('user')){
          commentArea = ` <div class="form-group">
          <label for="exampleFormControlTextarea1">Write your comment</label>
          <textarea placeholder="Be nice and informative" class="form-control" id="commentText" rows="3"></textarea>
        </div>
        <button id="subBtn" type="button" class="btn btn-primary mb-2">Submit your comment</button>
      
          </div>`
  
  
      }


      $(".main").append(`


      <div class="container-fluid main">

      <div class="container jumbotron">
        <div>
          <h3>${data.title}</h3>
          <h6> ${data.content} </h6>
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


      $("#subBtn").click(()=>{
        let data2 = {
            content: $("#commentText").val(),
            created_by: JSON.parse(window.localStorage.getItem('user')).user_data.first_name
          }
          console.log(data2)
        axios.post(url,data2, {
          'headers':{
            'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
          }
        }).then(res=>{
            console.log(res.data)
            const url2 = `http://localhost:3000/questions/${data.id}`
            axios.get(url2,{
                'headers':{
                  'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
                }
              }).then(res=>{
                console.log("this is the fucked up nested call", res)
                buildQuestionsCommentsPage(res.data)
            })

            console.log(res)
        }).catch(err=> console.log(err))
    })


    }).catch(err=> console.log(err))
    
    

console.log(comments)
   


      
      
    
}