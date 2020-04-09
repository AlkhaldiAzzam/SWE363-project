import buildDashboeard from "./user_dashboard.js";
import buildHomePAge from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";

$("#homeNavBtn").click(()=> buildHomePAge())
$("#loginNavBtn").click(()=> buildLogin())
$("#signupNavBtn").click(()=> buildSignup())




// buildDashboeard()
buildHomePAge()
// buildLogin()
// buildSignup()