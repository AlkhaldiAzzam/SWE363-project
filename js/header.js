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
      <a href="/SWE363-project/#/profile" class="nav-link" id="profileBtn"> Hello ${JSON.parse(window.localStorage.getItem('user')).user_data.username}</a>
     
      </li>
        <li class="nav-item">
          <a href="/SWE363-project/#/home/" id="logout" class="nav-link" id="loginNavBtn">Log out</a>
        </li> 
      
      </ul>`

      if (JSON.parse(window.localStorage.getItem('user')).user_data.user_type == "admin"){
        adminTemp = `
        <ul class="navbar-nav navbar-right">

      
        <li class="nav-item">
                  <a href="/SWE363-project/#/stafflist/" id="admin-dashboard" class="nav-link" id="loginNavBtn">Admin Dashboard</a>
        </li> 
      
      </ul>
        `
      }
    }
    else{

      temp = `<ul class="navbar-nav navbar-right">
      <li class="nav-item">
        <a href="/SWE363-project/#/login/" class="nav-link" id="loginNavBtn">Login</a>
      </li> 
      <li class="nav-item">
        <a href="/SWE363-project/#/signup/" class="nav-link" id="signupNavBtn">Sign up</a>
      </li>
    </ul>`
    }



        $("#header").append(`
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="SWE363-project/#/home/"><img width="100px" height="55px" src="images/logo.png" > </a>
    
            <ul class=" navbar-nav">
              <li class="nav-item">
                <a href="/SWE363-project/#/home/" class="nav-link" id='homeNavBtn'>Home</a>
              </li>
              <li class="nav-item">
                <a href="/SWE363-project/#/aboutus/" class="nav-link" id="aboutUsNavBtn">About Us</a>
              </li>
    
              <li class="nav-item dropdown">
                <button class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Generate pages
                </button>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a href="/SWE363-project/#/dashboard/" class="dropdown-item" id="dashBtn">User Dashboard</a>
                  <a href="/SWE363-project/#/profile/" class="dropdown-item" id="profileBtn">Profile Page</a>
                  <a href="/SWE363-project/#/questions/" class="dropdown-item" id="QuestionsBtn">Questions Page</a>
                  <a href="/SWE363-project/#/covid-test/" class="dropdown-item" id="testBtn">Test Page</a>
                  
                  
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
            window.location.href = domain + "home"
        })

  

    
    
    




// $("#homeNavBtn").click(()=> buildHomePage())
// $("#loginNavBtn").click(()=> buildLogin())
// $("#signupNavBtn").click(()=> buildSignup())
// $("#aboutUsNavBtn").click(()=> buildAboutUs())
// $("#testBtn").click(()=> buildTestPage())
// $("#QuestionsBtn").click(()=> buildQuestionsPage())

// $("#dashBtn").click(()=> buildDashboard())
// $("#staffBtn").click(()=> buildStaffList())
// $("#profileBtn").click(()=> buildProfile())



}
