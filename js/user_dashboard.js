import buildProfile from "./profile-page.js";
import buildPageUnderCons from "./pageUnderCons.js";

export default function buildDashboard(){
    console.log($("body"))
    $(".main").empty();


    $(".main").append(`

    <div class="container">
        <div class="jumbotron">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="images/Update-Profile.png" class="card-img-top" alt="Update Profile">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Update Profile</h5>
                          <p class="card-text">Change your account username , password and medical information.</p>
                          <button id="pro-page" class="btn btn-primary">Update</button>
                        </div>
                      </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="images/Search-Services.png" class="card-img-top" alt="Browse Available Services">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Browse Available Services</h5>
                          <p class="card-text">Browse services and features helps to be more healthy.</p>
                          <button  class="btn btn-primary underCons">Browse</button>
                        </div>
                      </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="images/Medical-Service.webp" class="card-img-top" alt="Request Medical Services">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Request a Service</h5>
                          <p class="card-text">many services has been created for you to stay healthy and safe.</p>
                          <button  class="btn btn-primary underCons">Request</button>
                        </div>
                      </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="images/Service-Status.png" class="card-img-top" alt="• Track the status of sent request 
                            ">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Track the Status of Sent Request</h5>
                          <p class="card-text">Check latest updates on your requests.</p>
                          <button  class="btn btn-primary underCons">Go</button>
                        </div>
                      </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="images/Cancel (1).png" class="card-img-top" alt="Cancel a Request">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Cancel a Request</h5>
                          <p class="card-text">Cancel any requests for services any time.</p>
                          <button  class="btn btn-primary underCons">Requsts Menu</button>
                        </div>
                      </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="images/Feedback.svg" class="card-img-top" alt=" Send a feedback about the service">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Feedback</h5>
                          <p class="card-text">Some quick feedback can be helpful for us to provide better serivces and high quality content.</p>
                          <button  class="btn btn-primary underCons">Write feedback</button>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    `);

    $("#pro-page").click(()=> buildProfile())
    $(".underCons").click(()=> buildPageUnderCons())

}