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
if(location.href.includes('localhost'))
	domain = "http://localhost:5500/"

	else 
		domain = "https://alkhaldiazzam.github.io/SWE363-project/"


console.log(window.localStorage)

// export let user = {}

// let app = Sammy.apps.body


 
	var app = Sammy.apps.body;
	 
	app.get('/#/home', function(context) {
		buildHomePage()
	console.log("You're in the Main route");
	});

	app.get('/#/postquestion', function(context) {
		buildPostQuestionPage()
	console.log("You're in the Main route");
	});
	 
   
	app.get('/#/aboutus', function(context) {
		buildAboutUs()
	console.log("You're in the About us route");
	});

	app.get('/#/profile', function(context) {
		buildProfile()
	console.log("You're in the About us route");
	});

	
	app.get('/#/questions', function(context) {
		buildQuestionsPage()
	console.log("You're in the About us route");
	});


	app.get('/#/dashboard', function(context) {
		buildDashboard()
	console.log("You're in the About us route");
	});



	app.get('/#/stafflist', function(context) {
		buildStaffList()
	console.log("You're in the About us route");
	});


	app.get('/#/covid-test', function(context) {
		buildQuizPage()
	console.log("You're in the About us route");
	});

	app.get(`/#/questions/:id/comments`, function(context) {
		buildQuestionsCommentsPage(context.params.id)

		// let queryString = window.location.search;
		console.log(context.params.id);

		
		// console.log("You're in the Main route");
		});

		app.get('/login', function(context) {
			buildLogin()
		console.log("You're in the About us route");
		});

		app.get('/signup', function(context) {
			buildSignup()
		console.log("You're in the About us route");
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




