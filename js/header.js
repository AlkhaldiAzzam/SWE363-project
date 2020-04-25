import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";
import buildProfile from "./profile-page.js";
import buildStaffList from "./staff-list.js";
import buildAboutUs from "./aboutUs.js";
import buildQuestionsPage from "./QuestionsPage.js";
import buildTestPage from './test_page.js';
export default function buildHeader(params) {
    $("#header").empty()

    if (params){

        $("#header").append(`
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img width="100px" height="55px" src="images/logo.png" > </a>
    
            <ul class=" navbar-nav">
              <li class="nav-item">
                <button class="nav-link" id='homeNavBtn'>Home</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" id="aboutUsNavBtn">About Us</button>
              </li>
    
              <li class="nav-item dropdown">
                <button class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Generate pages
                </button>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button class="dropdown-item" id="dashBtn">User Dashboard</button>
                  <button class="dropdown-item" id="staffBtn">Staff List</button>
                  <button class="dropdown-item" id="profileBtn">Profile Page</button>
                  
                  
              </li>
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
    
            <ul class="navbar-nav navbar-right">

            <li class="nav-item">
            <p class="nav-link"> Hello ${params.first_name}</p>
            </li>
              <li class="nav-item">
                <button id="logout" class="nav-link" id="loginNavBtn">Log out</button>
              </li> 
            
            </ul>
          </div>
        </nav>
        `)

        $("#logout").click(()=> {
            buildHeader()
            buildHomePage()
        })

    }
    else{

    
    $("#header").append(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><img width="100px" height="55px" src="images/logo.png" > </a>

        <ul class=" navbar-nav">
          <li class="nav-item">
            <button class="nav-link" id='homeNavBtn'>Home</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" id="aboutUsNavBtn">About Us</button>
          </li>

          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Generate pages
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <button class="dropdown-item" id="dashBtn">User Dashboard</button>
              <button class="dropdown-item" id="staffBtn">Staff List</button>
              <button class="dropdown-item" id="profileBtn">Profile Page</button>
              
              
          </li>
        </ul>
        
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        <ul class="navbar-nav navbar-right">
          <li class="nav-item">
            <button class="nav-link" id="loginNavBtn">Login</button>
          </li> 
          <li class="nav-item">
            <button class="nav-link" id="signupNavBtn">Sign up</button>
          </li>
        </ul>
      </div>
    </nav>
    `)
    }
    




$("#homeNavBtn").click(()=> buildHomePage())
$("#loginNavBtn").click(()=> buildLogin())
$("#signupNavBtn").click(()=> buildSignup())
$("#aboutUsNavBtn").click(()=> buildAboutUs())
$("#testBtn").click(()=> buildTestPage())
$("#QuestionsBtn").click(()=> buildQuestionsPage())

$("#dashBtn").click(()=> buildDashboard())
$("#staffBtn").click(()=> buildStaffList())
$("#profileBtn").click(()=> buildProfile())



}
