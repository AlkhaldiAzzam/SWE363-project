import { domain } from "./main.js";

export default function buildFeedbackThanksMessage(){
    
    $(".main").empty();
    

    $(".main").append(`


    <div class="container">
    
        <div class="row">
          <div class="col-3"></div>
      
        
          <div class="col-6">
      
            <!-- start -->
      
            <div class="jumbotron" style="margin-top: 3em; margin-bottom: 20em;">
              <h3 class="text-center" >Your Feedback has been recieved</h3>
              <br>
              <h3 class="text-center" >Thank You For Your Feedback</h3>
              
            </div>
          <!-- end  -->
      
          </div>
      
      
      
      
          <div class="col-3"></div>
        </div>
      
      
      </div>
  
  
  <!--  -->

    
    `)


    setTimeout(function(){
      window.location.href = domain + "#home/";
   }, 3000);
}