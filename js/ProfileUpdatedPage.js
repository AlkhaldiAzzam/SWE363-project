import { domain } from "./main.js";


export default function buildProfileUpdatedPage(){

    $('.main').empty();

    $('.main').append(`
    
    
    <div class="container">
    
    <div class="row">
      <div class="col-3"></div>
  
    
      <div class="col-6">
  
        <!-- start -->
  
        <div class="jumbotron" style="margin-top: 3em; margin-bottom: 20em;">
          <h3 class="text-center" >Your profiile has been successfully updated</h3>
          
        </div>
      <!-- end  -->
  
      </div>
  
  
  
  
      <div class="col-3"></div>
    </div>
  
  
  </div>
  
  
  <!--  -->
    
    
    `);

    setTimeout(function(){
      window.location.href = domain + "#profile/";
   }, 3000);

}