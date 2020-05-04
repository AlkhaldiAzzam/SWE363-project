export default function buildEmailHasBeenSentPage(){
    $('#main').empty();

    $('#main').append(`
    
    <div class="container">
    
    <div class="row">
      <div class="col-3"></div>
  
    
      <div class="col-6">
  
        <!-- start -->
  
        <div class="jumbotron" style="margin-top: 3em; margin-bottom: 20em;">
          <h3 class="text-center" >An email has been sent to you with details about reseting your password</h3>
          
        </div>
      <!-- end  -->
  
      </div>
  
  
  
  
      <div class="col-3"></div>
    </div>
  
  
  </div>
  
  
  <!--  -->

    `);

}