import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";
import buildProfile from "./profile-page.js";
import buildStaffList from "./staff-list.js";
import buildAboutUs from "./aboutUs.js";
import buildQuestionsPage from "./QuestionsPage.js";
import buildTestPage from './test_page.js';





export default function buildHeader() {
    $("#header").empty()

    let nuser = window.localStorage.getItem('user')

    let temp 
    let user = JSON.parse(nuser)

    if(nuser){

      temp = `<ul class="navbar-nav navbar-right">

      <li class="nav-item">
      <p class="nav-link"> Hello ${user.user_data.first_name}</p>
      </li>
        <li class="nav-item">
          <a href="#/home" id="logout" class="nav-link" id="loginNavBtn">Log out</a>
        </li> 
      
      </ul>`
    }
    else{

      temp = `<ul class="navbar-nav navbar-right">
      <li class="nav-item">
        <a href="/#/login" class="nav-link" id="loginNavBtn">Login</a>
      </li> 
      <li class="nav-item">
        <a href="/#/signup" class="nav-link" id="signupNavBtn">Sign up</a>
      </li>
    </ul>`
    }



        $("#header").append(`
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="/#/home"><img width="100px" height="55px" src="images/logo.png" > </a>
    
            <ul class=" navbar-nav">
              <li class="nav-item">
                <a href="/#/home" class="nav-link" id='homeNavBtn'>Home</a>
              </li>
              <li class="nav-item">
                <a href="/#/aboutus" class="nav-link" id="aboutUsNavBtn">About Us</a>
              </li>
    
              <li class="nav-item dropdown">
                <button class="nav-link dropdown-toggle" href="#/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Generate pages
                </button>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a href="/#/dashboard" class="dropdown-item" id="dashBtn">User Dashboard</a>
                  <a href="/#/stafflist" class="dropdown-item" id="staffBtn">Staff List</a>
                  <a href="/#/profile" class="dropdown-item" id="profileBtn">Profile Page</a>
                  <a href="/#/questions" class="dropdown-item" id="QuestionsBtn">Questions Page</a>
                  <a href="/#/covid-test" class="dropdown-item" id="testBtn">Test Page</a>
                  
                  
              </li>
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
    
            ${temp}
          </div>
        </nav>
        `)

        $("#logout").click(()=> {
          window.localStorage.removeItem('user')
            buildHeader()
            buildHomePage()
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
