

export default function buildTestPage(){
    $(".main").empty();
    

    $(".main").append(`

    
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <!-- test title  -->
            <h1 class="display-4" id="test_title" >test for covid-19</h1>
            <br>
            <!-- testfirst qustion -->
            <h3  id="test_qustion">is your temptursher higer than 37 ?</h3>
            <br>
            <!-- test aswers -->
            <div class="form-check" id="list of inputs">
              <input class="form-check-input" type="radio" name="Radio" id="yesRadio" value="yes" checked>
              <label class="form-check-label" for="yesRadio">
                yes
              </label>
            </div>
        <div class="form-check" id="list of inputs2">
          <input class="form-check-input" type="radio" name="Radio" id="noRadio" value="no" >
          <label class="form-check-label" for="noRadio">
            no
          </label>
        </div>
        <br>
        <br>
        
        <!-- the butoon -->
        <input class="btn btn-primary" type="submit" value="Submit">
        
        
          </div>
        </div>
    
    `)
}