import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import { domain } from "./main.js";




export default function buildHeader() {
    $("#header").empty()

    // let nuser = window.localStorage.getItem('user')

    // let user = JSON.parse(window.localStorage.getItem('user'))
    let temp = ""
    let adminTemp = ""

    if(window.localStorage.getItem('user')){

      temp = `<ul class="navbar-nav navbar-right">

      <li class="nav-item">

      <a href="#dashboard/" class="nav-link" id="profileBtn"> Hello ${JSON.parse(window.localStorage.getItem('user')).user_data.username}</a>
     
      </li>
        <li class="nav-item">
          <button id="logout" class="nav-link" id="loginNavBtn">Log out</button>

        </li> 
      
      </ul>`

      if (JSON.parse(window.localStorage.getItem('user')))
      if (JSON.parse(window.localStorage.getItem('user')).user_data.user_type == "admin"){
        adminTemp = `
        <ul class="navbar-nav navbar-right">

      
        <li class="nav-item">

                  <a href="#stafflist/" id="admin-dashboard" class="nav-link" id="loginNavBtn">Admin Dashboard</a>

        </li> 
      
      </ul>
        `
      }
    }
    else{

      temp = `<ul class="navbar-nav navbar-right">
      <li class="nav-item">

        <a href="#login/" class="nav-link" id="loginNavBtn">Login</a>
      </li> 
      <li class="nav-item">
        <a href="#signup/" class="nav-link" id="signupNavBtn">Sign up</a>

      </li>
    </ul>`
    }



        $("#header").append(`
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar">
          <div class="container-fluid">

            <a class="navbar-brand" href="#/home/"><img width="100px" height="55px" src="images/logo.png" > </a>
    
            <ul class=" navbar-nav">
              <li class="nav-item">
                <a href="#home/" class="nav-link" id='homeNavBtn'>Home</a>
              </li>
              <li class="nav-item">
                <a href="#aboutus/" class="nav-link" id="aboutUsNavBtn">About Us</a>
              </li>

              <li class="nav-item">
              <a href="#questions/" class="nav-link" id="QuestionsBtn">Questions List</a>
              </li>


              <li class="nav-item">
              <a href="#covid-test/" class="nav-link" id="testBtn">COVID Test </a>

              </li>
    


            </ul>
            ${adminTemp}
           
    
            ${temp}
          </div>
        </nav>
        `)

        $("#logout").click(()=> {
          window.localStorage.removeItem('user')
            buildHeader()
            window.location.href = domain + "#home/"
        })

  

    
    
    






}
