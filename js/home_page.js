import buildTestPage from "./test_page.js";

export default function buildHomePage(){
    $(".main").empty();


    $(".main").append(`
   

    <div class="container">
    <div class="jumbotron" >
      <h1 class="services-header">HS Available Services</h1>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card" style="width: 18rem;">
            <div class="card-icon">
                <img src="images/Medical-Service.webp" class="card-img-top" alt="Do a test to check up on your self">
            </div>
            <div class="card-body">
              <h5 class="card-title">Test For Covid-19</h5>
              <p class="card-text">Aset of  test composed of selected questions to identify symptoms of Covid-19</p>
              <button  class="btn btn-primary underCons">Exmaine Your Self</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card" style="width: 18rem;">
              <div class="card-icon">
                  <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
              </div>
              <div class="card-body">
                <h5 class="card-title">Post a Question</h5>
                <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
              </div>
            </div>
      </div>
      </div>
    </div>
  </div>
  <!-- COVID-19 Counter -->
  <div class="container">

    <!-- Jumbotron Header -->
    <div class="jumbotron counter">
          <div>
            <h1 class="count-text-header">Coronavirus Cases:</h1>
            <h1 id="count" class="count-value-header"><!-- Placeholder For the Counter -->7,000,000,000</h1>
          </div>
          <br>
          <div>
            <div class="deaths">
              <h2 class="deaths-counter">Deaths:</h2>
              <h2><!-- Placeholder For the Counter -->7,000,000,000,000,000</h2>
            </div>
            <div class="recovered">
              <h2 class="recoverd-counter">Recovered:</h2>
              <h2><!-- Placeholder For the Counter -->20,000,000,000</h2>
            </div>
          </div>
          
    </div>
  </div>
  <!-- News -->
  <div class="container">
    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
    
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">
         
    
    
    
          <!-- start -->
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card" style="width: 18rem;">
                  <div class="card-icon">
                      <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">news 1</h5>
                    <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                    <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
                  </div>
                </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card" style="width: 18rem;">
                <div class="card-icon">
                    <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                </div>
                <div class="card-body">
                  <h5 class="card-title">news 1</h5>
                  <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                  <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
                </div>
              </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card" style="width: 18rem;">
              <div class="card-icon">
                  <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
              </div>
              <div class="card-body">
                <h5 class="card-title">news 1</h5>
                <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
              </div>
            </div>
        </div>
      </div>
    
    
    
    <!-- end  -->
    
    
        </div>
        <div class="carousel-item">
         
    
    
    
          <!-- start -->
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card" style="width: 18rem;">
                  <div class="card-icon">
                      <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">news 1</h5>
                    <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                    <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
                  </div>
                </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card" style="width: 18rem;">
                <div class="card-icon">
                    <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                </div>
                <div class="card-body">
                  <h5 class="card-title">news 1</h5>
                  <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                  <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
                </div>
              </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card" style="width: 18rem;">
              <div class="card-icon">
                  <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
              </div>
              <div class="card-body">
                <h5 class="card-title">news 1</h5>
                <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
              </div>
            </div>
        </div>
      </div>
    
    
    
    <!-- end  -->
    
    
    
    
        </div>
        <div class="carousel-item">
          
    
    
    
          <!-- start -->
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card" style="width: 18rem;">
                  <div class="card-icon">
                      <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">news 1</h5>
                    <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                    <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
                  </div>
                </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card" style="width: 18rem;">
                <div class="card-icon">
                    <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
                </div>
                <div class="card-body">
                  <h5 class="card-title">news 1</h5>
                  <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                  <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
                </div>
              </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card" style="width: 18rem;">
              <div class="card-icon">
                  <img src="images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
              </div>
              <div class="card-body">
                <h5 class="card-title">news 1</h5>
                <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                <button  class="btn btn-primary" id="PostQuestionBtn">Ask</button>
              </div>
            </div>
        </div>
      </div>
    
    
    
    <!-- end  -->
    
    
    
    
        </div>
      </div>
    
      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    
    </div>
  </div>
    `)
    
    $("#testBtn").click(()=> buildTestPage())
}
