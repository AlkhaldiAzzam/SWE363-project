import buildProfile from "./profile-page.js";
import buildPageUnderCons from "./pageUnderCons.js";
import buildFeedbackPage from "./feedback_page.js";
import buildPostQuestionPage from "./QuestionPostPage.js";

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
                            <img src="./images/Update-Profile.png" class="card-img-top" alt="Update Profile">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Update Profile</h5>
                          <p class="card-text">Change your account username , password and medical information.</p>
                          <a href="#profile/" id="pro-page" class="btn btn-primary">Update</a>
                        </div>
                      </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="./images/Search-Services.png" class="card-img-top" alt="Browse Available Services">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Browse Available Services</h5>
                          <p class="card-text">Browse services and features helps to be more healthy.</p>
                          <a href="#home/" id="pro-page" class="btn btn-primary">Explore</a>

                        </div>
                      </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="./images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Post a Question</h5>
                          <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                          <a href="#postquestion/" class="btn btn-primary" id="PostQuestionBtn">Ask</a>
                        </div>
                      </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="./images/1271366.svg" class="card-img-top" alt="Your Qeustions">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Your Questions</h5>
                          <p class="card-text">see your questions and check the answers for them</p>
                          <button  class="btn btn-primary underCons">View</button>
                        </div>
                      </div>
                </div>
                <!-- Cancel request-->
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="./images/Feedback.svg" class="card-img-top" alt=" Send a feedback about the service">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Feedback</h5>
                          <p class="card-text">Some quick feedback can be helpful for us to provide better serivces and high quality content.</p>
                          <a href="#feedback/" class="btn btn-primary" id="feedbackBtn">Write feedback</a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    `);

    // $("#pro-page").click(()=> buildProfile())
    // $("#feedbackBtn").click(()=> buildFeedbackPage())
    $(".underCons").click(()=> buildPageUnderCons())
    // $("#PostQuestionBtn").click(()=> buildPostQuestionPage())

}


{/* <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card" style="width: 18rem;">
                        <div class="card-icon">
                            <img src="./images/Cancel (1).png" class="card-img-top" alt="Cancel a Request">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Cancel a Request</h5>
                          <p class="card-text">Cancel any requests for services any time.</p>
                          <button  class="btn btn-primary underCons">Requsts Menu</button>
                        </div>
                      </div>
                </div> */}