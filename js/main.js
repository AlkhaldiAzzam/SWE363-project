import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";
import buildProfile from "./profile-page.js";

$("#homeNavBtn").click(()=> buildHomePage())
$("#loginNavBtn").click(()=> buildLogin())
$("#signupNavBtn").click(()=> buildSignup())



// buildDashboard()
buildHomePage()
// buildLogin()
// buildSignup()
// buildProfile()