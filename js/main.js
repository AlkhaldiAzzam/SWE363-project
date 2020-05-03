import buildDashboard from "./user_dashboard.js";
import buildHomePage from "./home_page.js"
import buildLogin from "./login.js";
import buildSignup from "./signup.js";
import buildProfile from "./profile-page.js";
import buildStaffList from "./staff-list.js";
import buildAboutUs from "./aboutUs.js";
import buildPasswordResetPage from "./passResetPage.js";
import buildPassResetEmailPage from "./passResetEmailPage.js";
import buildPageUnderCons from "./pageUnderCons.js";


import buildHeader from './header.js'
import buildFooter from "../footer.js";
import buildQuestionsPage from "./QuestionsPage.js";
import buildTestPage from "./test_page.js";
import buildPostQuestionPage from "./QuestionPostPage.js";
import buildQuizPage from "./quiz_page.js";
import buildQuestionsCommentsPage from "./questions_comments.js";



export let domain

let minorDomain = ""

if(location.host =='localhost:5500' )
	domain = "http://localhost:5500/"

	else {
		domain = "https://alkhaldiazzam.github.io/SWE363-project/"
		minorDomain = "/SWE363-project"
	}


// export let user = {}




function hashMeBaby() {

			let hash = location.pathname+location.hash

			console.log(hash, "what u have")
			console.log(`${minorDomain}/#postquestion/` ,"what u aim for")
			console.log(minorDomain)
			
    // handle haschange event here
	switch (true) {
			case hash == `${minorDomain}/#home/` :{	
			buildHomePage();
			}
			break;
			case hash == `${minorDomain}/#postquestion/` :	buildPostQuestionPage();
			break;
			case hash == `${minorDomain}/#aboutus/` :	buildAboutUs();
			break;
			case hash == `${minorDomain}/#profile/` :	buildProfile();
			break;
			case hash == `${minorDomain}/#questions/` :	buildQuestionsPage();
			break;
			case hash == `${minorDomain}/#dashboard/` :	buildDashboard();
			break;
			case hash == `${minorDomain}/#covid-test/` :	buildQuizPage();
			break;
			case hash == `${minorDomain}/#stafflist/` :	buildStaffList();
			break;

			case hash == `${minorDomain}/#login/` :	buildLogin();
			break;

			case hash == `${minorDomain}/#signup/` :	buildSignup();
			break;
			case hash == `${minorDomain}/#pass-reset/` :	buildPassResetEmailPage();
			break;

			case hash.includes(`${minorDomain}/#questions/comments`) :
				let id = hash.slice(hash.indexOf('=')+1)
				buildQuestionsCommentsPage(id)
				console.log(id)
				
			break;

			case hash.includes(`${minorDomain}/#passreset`) :
				let email = hash.slice(hash.indexOf('=')+1)
				buildPasswordResetPage(email)
				console.log(email)
				
			break;

			default : console.log('meh..')

			
		}}

		hashMeBaby()
window.onhashchange = (e) => {

	let hash = location.hash
    // handle haschange event here
	hashMeBaby()
    // console.log(e);
}


function test(params) {
	
}



	buildHeader()





export function userController(newUser){

	window.localStorage.setItem('user', JSON.stringify(newUser))
	buildHeader()

}

// buildPageUnderCons()
// buildHomePage()
// buildQuizPage()
buildFooter()
// buildDashboard()
// buildLogin()
// buildSignup()
// buildProfile()
// buildStaffList()
// buildAboutUs()
// buildTestPage()
// buildPasswordResetPage()


