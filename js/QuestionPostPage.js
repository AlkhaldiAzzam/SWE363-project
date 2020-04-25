
export default function buildPostQuestionPage(){
    $(".main").empty();
    

    $(".main").append(`
    <div class="jumbotron">
        <div class="form-group">
          <label for="QuestionTitle">Title of Your Question</label>
          <input type="email" class="form-control" id="QuestionTitle" placeholder="Question Title...">
        </div>



        <div class="form-group">
          <label for="QuestionDetails">Your Question</label>
          <textarea class="form-control" id="QuestionDetails" rows="3" placeholder="Question Details..."></textarea>

        </div>

        <input class="btn btn-primary" type="reset" value="Cancel">
        <input class="btn btn-primary" type="submit" value="Submit">
        
      </form>
      </div>
    `)
}