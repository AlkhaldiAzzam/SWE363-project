import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";
import buildProfile from "./profile-page.js";
import buildStaffList from "./staff-list.js";
// import staff from '../dummy/dummy-staff.js'


$("#homeNavBtn").click(()=> buildHomePage())
$("#loginNavBtn").click(()=> buildLogin())
$("#signupNavBtn").click(()=> buildSignup())
$("#aboutUsNavBtn").click(()=> buildAboutUsPage())

$("#dashBtn").click(()=> buildDashboard())
$("#staffBtn").click(()=> buildStaffList())
$("#profileBtn").click(()=> buildProfile())





// buildDashboard()
// buildHomePage()
// buildLogin()
// buildSignup()
// buildProfile()
// buildStaffList()
