


    // let user = JSON.parse(window.localStorage.getItem('user'))

export default function buildQuestionsCommentsPage(id){
    $(".main").empty()




    const url = `https://swe363-api.herokuapp.com/questions/${id}/comments`

    
    let jumpos = []
    let comments = []
    
    axios.get(url).then(res=>{
      comments = res.data
      console.log(res.data)
    //   console.log(questions)

      
    comments.forEach(e => {

        // console.log(e)
        jumpos.push(`
        <div class="brd m-3">
          
        <dd><h4> ${e.content} </h4></dd>
          
          <dd><h6>Posted by: ${e.created_by}</h6></dd>
        <dd><p>${e.created_at}</p></dd>
        
       
        </div>
        
        `)

        // console.log(e)
        
      });

      let commentArea = ""

      if(window.localStorage.getItem('user')){
          commentArea = `
           <div class="form-group">
          <label for="exampleFormControlTextarea1">Write your comment</label>
          <textarea placeholder="Be nice and informative" class="form-control" id="commentText" rows="3"></textarea>
        </div>
        <button id="subBtn" type="button" class="btn btn-primary mb-2">Submit</button>
      
          </div>`
  
          
  
      }

    //   console.log(commentArea)

      let data 

      axios.get(`https://swe363-api.herokuapp.com/questions/${id}`).then(res=> {
          
      data = res.data
    
    
      $(".main").append(`
  
  
      <div class="container-fluid main">
  
      <div class="container jumbotron">
      <div class="d-flex justify-content-between">
        <div>
          <h3>${data.title}</h3>
          <h6 class="m-4"> ${data.content} </h6>
          </div>
  
          <a href="#/questions" class=" ">Back to posts</a>
          </div>
        <hr class="main-hr">
        <br>
        <dl>
    
         ${jumpos.join('')}
    
        </dl>
        <br>
        <br>
        <br>
  
        ${commentArea}
    </div>
      
   
  
  
      `)


      $("#subBtn").click(()=>{
        //   console.log("dafsghjhkjl")
        let data2 = {
            content: $("#commentText").val(),
            created_by: JSON.parse(window.localStorage.getItem('user')).user_data.username
          }
          console.log(data2)
        axios.post(url,data2, {
          'headers':{
            'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
          }
        }).then(res=>{
            console.log(res.data)
           
            // window.location.href = `http://localhost:5500/#/questions/${id}/comments`;
            location.reload()
            console.log(res)
        }).catch(err=> console.log(err))
    })
    })


      


    console.log(comments)
    }).catch(err=> console.log(err))
    
    

   


      
      

}