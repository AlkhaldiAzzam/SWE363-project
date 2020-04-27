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

import buildTestPage from "./test_page.js"; // <----------------------------------- here

// import staff from '../dummy/dummy-staff.js'

console.log(window.localStorage)

// export let user = {}


	buildHeader()






export function userController(newUser){

	window.localStorage.setItem('user', JSON.stringify(newUser))
	buildHeader()

}

// buildPageUnderCons()
buildHomePage()

buildFooter()
// buildDashboard()
// buildLogin()
// buildSignup()
// buildProfile()
// buildStaffList()
// buildAboutUs()
// buildTestPage()