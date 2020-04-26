import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";
import buildProfile from "./profile-page.js";
import buildStaffList from "./staff-list.js";
import buildAboutUs from "./aboutUs.js";
import buildPageUnderCons from "./pageUnderCons.js";
import buildHeader from './header.js'
import buildFooter from "../footer.js";
// import staff from '../dummy/dummy-staff.js'






// const url = "http://localhost:3000/questions"

// axios.post(url,{
// 	title:"hihi",
// 	user_id:22
// }).then((res)=>console.log(res)).catch(err=>console.log(err))






let user = {}


export function userController(newUser, token){

	

	if (newUser){
		user = newUser;
		user.token = token
	}

	else {
		user = {}
	}

}

// buildPageUnderCons()
buildHeader()
buildHomePage()

buildFooter()
// buildDashboard()
// buildLogin()
// buildSignup()
// buildProfile()
// buildStaffList()
// buildAboutUs()