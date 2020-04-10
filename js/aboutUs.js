

export default function buildAboutUs(){
    $("#navbar").next().remove();


    $("#navbar").after(`
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
    <div class="container">
      <div class="jumbotron">
          <div class="row">
              <div class="col-lg-4 colmd-6 col-sm-12">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                        <h5 class="card-title"><span class="fas fa-user-md"></span>HS Medical staff</h5>
                        <p class="card-text">choeck out HS members who provide different services and as well as they help with your questions.</p>
                        <a href="#" class="btn btn-primary">HS Medical Staff</a>
                      </div>
                    </div>
              </div>
              <div class="col-lg-4 colmd-6 col-sm-12">
                  <div class="card" style="width: 18rem;">
                      <div class="card-icon">
                          <img src="../images/Search-Services.png" class="card-img-top" alt="Browse Available Services">
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Browse Available Services</h5>
                        <p class="card-text">Browse services and features helps to be more healthy.</p>
                        <a href="#" class="btn btn-primary">Browse</a>
                      </div>
                    </div>
              </div>
              <div class="col-lg-4 colmd-6 col-sm-12">
                  <div class="card" style="width: 18rem;">
                      <div class="card-icon">
                          <img src="../images/Search-Services.png" class="card-img-top" alt="Browse Available Services">
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Browse Available Services</h5>
                        <p class="card-text">Browse services and features helps to be more healthy.</p>
                        <a href="#" class="btn btn-primary">Browse</a>
                      </div>
                    </div>
              </div>
            </div>
      </div>
    </div>
  </div>`)
}