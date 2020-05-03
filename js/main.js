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
import buildQuestionsPage from "./QuestionsPage.js";
import buildTestPage from "./test_page.js";
import buildPostQuestionPage from "./QuestionPostPage.js";
import buildQuizPage from "./quiz_page.js";
import buildQuestionsCommentsPage from "./questions_comments.js";



export let domain

let minorDomain = ""
if(location.href.includes('localhost'))
	domain = "http://localhost:5500/"

	else {
		domain = "https://alkhaldiazzam.github.io/SWE363-project/"
		minorDomain = "SWE363-project/"
	}
console.log(window.localStorage)

// export let user = {}

// let app = Sammy.apps.body


 
	var app = Sammy.apps.body;
	 

	app.route(`${minorDomain}#home`, function(context) {

		buildHomePage()
	
	});


	app.route(`${minorDomain}#postquestion`, function(context) {

		buildPostQuestionPage()
	
	});
	 
   

	app.route(`${minorDomain}#aboutus`, function(context) {

		buildAboutUs()
	});


	app.route(`${minorDomain}#profile`, function(context) {

		buildProfile()
	});

	

	app.route(`${minorDomain}#questions`, function(context) {

		buildQuestionsPage()
	});


	app.route(`${minorDomain}#dashboard`, function(context) {

		buildDashboard()
	});




	app.route(`${minorDomain}#stafflist`, function(context) {

		buildStaffList()
	});



	app.route(`${minorDomain}#covid-test`, function(context) {

		buildQuizPage()
	});

	app.route(`${minorDomain}#questions/:id/comments`, function(context) {

		buildQuestionsCommentsPage(context.params.id)

		// let queryString = window.location.search;
		console.log(context.params.id);

		
		// 
		});

		app.route(`${minorDomain}#login`, function(context) {
			buildLogin()
			});

		app.route(`${minorDomain}#signup`, function(context) {
			buildSignup()
			});

// console.log(Sammy.apps.body)


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
// buildFooter()
// buildDashboard()
// buildLogin()
// buildSignup()
// buildProfile()
// buildStaffList()
// buildAboutUs()
// buildTestPage()




