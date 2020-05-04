import buildStaffList from "./staff-list.js";






export default function buildAboutUs(){
    
    $(".main").empty();
    

    $(".main").append(`
    <div class="container-fluid m-4">

        
      
<div class="container">
  <div class="jumbotron">
      <h3 style="font-weight: 700;"><span class="fa fa-stethoscope"></span> About Health Stats</h3>
      <div class="container" style="padding-top: 20px;">
          <p style="font-size: 18px;"><strong>Health stats (HS) is global community of experienced medical staff all around the world participating in 
              order to increase the public awareness about health care aiming to face spreaded diseases and protecting people from get infected.
          </strong></p>
      </div>
  </div>
</div>
</div>

`)
}



