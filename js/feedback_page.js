export default function buildFeedbackPage(){
    $(".main").empty();

    $(".main").append(`
    <!-- FEEDBACK -->

    <div class="container">
    
      <div class="row">
        <div class="col-3"></div>
    
        <!-- the feed back  -->
        <div class="col-6">
    
    
          <br>
          <h1>Feedback</h1>
          <br> 
          <br>
    
            <form >
    
    
              <!-- the title  -->
              <div class="form-group">
                <label for="theTitle">Title of Your feedback</label>
                <input type="email" class="form-control" id="theTitle" placeholder="Put the Title of Your Feedback Hear">
              </div>
    
    
    
              <div class="form-group">
                <label for="feedback">Your Feedback</label>
                <textarea class="form-control" id="feedback" rows="3" placeholder="Feedback"></textarea>
    
              </div>
    
              <input class="btn btn-primary" type="reset" value="Cancel">
              <input class="btn btn-primary" type="submit" value="Submit">
              
            </form>
    <br><br><br><br><br>
    
        </div>
    
    <!-- the end of feedback  -->
    
    
    
        <div class="col-3"></div>
      </div>
    
    
    </div>`)
}