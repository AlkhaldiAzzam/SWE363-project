import buildQuestionsCommentsPage from "./questions_comments.js";
import { domain } from "./main.js";

const url = "https://swe363-api.herokuapp.com/questions"
let user = JSON.parse(window.localStorage.getItem('user'))
// console.log(user.auth_token)
export default function buildPostQuestionPage(){
  $(".main").empty();
  
  
  
    


    $(".main").append(`
    <div class="jumbotron">
        <div class="form-group">
          <label for="QuestionTitle">Title of Your Question</label>
          <input type="text" class="form-control" id="QuestionTitle" placeholder="Question Title...">
        </div>



        <div class="form-group">
          <label for="QuestionDetails">Your Question</label>
          <textarea class="form-control" id="QuestionDetails" rows="3" placeholder="Question Details..."></textarea>

        </div>

        <input class="btn btn-primary" type="reset" value="Cancel">
        <button  id="subBtn" class="btn btn-primary" type="submit" >Submit </button>
        
      </form>
      </div>
    `)
    $("#subBtn").click(()=>{
    


      let data = {
        title: $("#QuestionTitle").val(),
        content: $("#QuestionDetails").val()

      }

      axios.post(url,data,{
        'headers':{
          'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
        }
      }).then(res=>{
        // buildQuestionsCommentsPage(res.data)
        window.location.href = domain + `#questions/comments/id=${res.data.id}`

        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    
    })
}

