import buildTestPage from "./test_page.js";

export default function buildHomePage(){
    $(".main").empty();


    let news1 = []
    let news2 = []
    let news3 = []

    let newsSeg1 =[]
    let newsSeg2 =[]
    let newsSeg3 =[]

axios.get("https://newsapi.org/v2/top-headlines?category=health&apiKey=fdd83ae8155a483ab5f1bc1c0b72ce3f").then(res =>{
      // console.log(res.data.articles)
      news1.push(res.data.articles[0])
      news1.push(res.data.articles[1])
      news1.push(res.data.articles[2])

      news2.push(res.data.articles[3])
      news2.push(res.data.articles[4])
      news2.push(res.data.articles[5])

      news3.push(res.data.articles[6])
      news3.push(res.data.articles[7])
      news3.push(res.data.articles[8])



      news1.forEach(e=>{
        newsSeg1.push(`


        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
      <img src="${e.urlToImage}" class="card-img-top newsImg" alt="..." width="100%">
      <div class="card-body">
        <h5 class="card-text">${e.title}</h5>
        <a href="${e.url}" target="_blank" class="btn btn-primary m-4">Read full article</a>
      </div>
    </div>
    </div>



        `)
      })


      news2.forEach(e=>{
        newsSeg2.push(`


        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
      <img src="${e.urlToImage}" class="card-img-top newsImg" alt="..." width="100%">
      <div class="card-body">
        <h5 class="card-text">${e.title}</h5>
        <a href="${e.url}" target="_blank" class="btn btn-primary m-4">Read full article</a>
      </div>
    </div>
    </div>



        `)
      })



      news3.forEach(e=>{
        newsSeg3.push(`


        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
      <img src="${e.urlToImage}" class="card-img-top newsImg" alt="..." width="100%">
      <div class="card-body">
        <h5 class="card-text">${e.title}</h5>
        <a href="${e.url}" target="_blank" class="btn btn-primary m-4">Read full article</a>
      </div>
    </div>
    </div>



        `)
      })
      
      // console.log(news)

      let covidData
      axios.get("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats").then(res=>{
      console.log(res)
      covidData = {
        totalCases : res.data.data.total_cases,
        currentCases: res.data.data.currently_infected,
        totalDeaths: res.data.data.death_cases,
        totalRecovered: res.data.data.recovery_cases
      }


    


    $(".main").append(`
   

    <div class="container-fluid mt-4">

    <div class="container">
    <div class="jumbotron" >
      <h1 class="services-header">HS Available Services</h1>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card" style="width: 18rem;">
            <div class="card-icon">
                <img src="/images/Medical-Service.webp" class="card-img-top" alt="Do a test to check up on your self">
            </div>
            <div class="card-body">
              <h5 class="card-title">Test For Covid-19</h5>
              <p class="card-text">Aset of  test composed of selected questions to identify symptoms of Covid-19</p>
              <a href="/#/covid-test" class="btn btn-primary underCons">Exmaine Your Self</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card" style="width: 18rem;">
              <div class="card-icon">
                  <img src="/images/iconfinder_new-24_103173.png" class="card-img-top" alt="Post a question that is medical related">
              </div>
              <div class="card-body">
                <h5 class="card-title">Post a Question</h5>
                <p class="card-text">Ask any Question that comes to your mind that related to a health matter.</p>
                <a href="/#/postquestion" class="btn btn-primary" id="PostQuestionBtn">Ask</a>
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
            <h1 class="count-text-header">COVID-19 total Cases:</h1>
            <h1 id="count" class="count-value-header"><!-- Placeholder For the Counter -->${covidData.totalCases}</h1>
          </div>
          <div class="m-5">
            <h1 class="count-text-header">COVID-19 current Cases:</h1>
            <h1 id="count" class="count-value-header"><!-- Placeholder For the Counter -->${covidData.currentCases}</h1>
          </div>
          <br>
          <div class="d-flex justify-content-around">
            <div class="deaths">
              <h2 class="deaths-counter">Deaths:</h2>
              <h2><!-- Placeholder For the Counter -->${covidData.totalDeaths}</h2>
            </div>
            <div class="recovered">
              <h2 class="recoverd-counter">Recovered:</h2>
              <h2><!-- Placeholder For the Counter -->${covidData.totalRecovered}</h2>
            </div>
          </div>
          
    </div>
  </div>


      <!-- news -->
      <div class=" jumbotron container-fluid">
        <h1 class="m-5">top news</h4>
        <div class="row m-4">


        
        
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
              
                 ${newsSeg1.join('')}


            </div>
          
          
          
          <!-- end  -->
          
          
              </div>
              <div class="carousel-item">
               
          
          
          
                <!-- start -->
                <div class="row">

                 
                  ${newsSeg2.join('')}

            </div>
          
          
          
          <!-- end  -->
          
          
          
          
              </div>
              <div class="carousel-item">
                
          
          
          
                <!-- start -->
                <div class="row">
                ${newsSeg1.join('')}

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

  })
    }).catch(err=> console.log(err))





    
    $("#testBtn").click(()=> buildTestPage())

    
}
