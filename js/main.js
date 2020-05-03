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
if(location.host =='localhost:5500' )
	domain = "http://localhost:5500/"

	else {
		domain = "https://alkhaldiazzam.github.io/SWE363-project/"
		minorDomain = "SWE363-project/"
	}


// export let user = {}




function hashMeBaby() {

			let hash = location.hash
    // handle haschange event here
	switch (true) {
			case hash == location.pathname+location.hash :{	
			buildHomePage();
			}
			break;
			case hash == `SWE363-project/#postquestion` :	buildQuestionsPage();
			break;
			case hash == `SWE363-project/#aboutus` :	buildAboutUs();
			break;
			case hash == `SWE363-project/#profile` :	buildProfile();
			break;
			case hash == `SWE363-project/#questions` :	buildQuestionsPage();
			break;
			case hash == `SWE363-project/#dashboard` :	buildDashboard();
			break;
			case hash == `SWE363-project/#covid-test` :	buildQuizPage();
			break;
			case hash == `SWE363-project/#stafflist` :	buildStaffList();
			break;

			case hash == `SWE363-project/#login` :	buildLogin();
			break;

			case hash == `SWE363-project/#signup` :	buildSignup();
			break;

			case hash.includes(`SWE363-project/#questions/comments`) :
				let id = hash.slice(hash.indexOf('=')+1)
				buildQuestionsCommentsPage(id)
				console.log(id)
				
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

// let app = Sammy.apps.body


 
	// // var app = Sammy.apps.body;
	 
	// app.get(`${minorDomain}#home`, function(context) {
	// 	buildHomePage()
	
	// });

	// app.get(`${minorDomain}#postquestion`, function(context) {
	// 	buildPostQuestionPage()
	
	// });
	 
   
	// app.get(`${minorDomain}#aboutus`, function(context) {
	// 	buildAboutUs()
	// });

	// app.get(`${minorDomain}#profile`, function(context) {
	// 	buildProfile()
	// });

	
	// app.get(`${minorDomain}#questions`, function(context) {
	// 	buildQuestionsPage()
	// });


	// app.get(`${minorDomain}#dashboard`, function(context) {
	// 	buildDashboard()
	// });



	// app.get(`${minorDomain}#stafflist`, function(context) {
	// 	buildStaffList()
	// });


	// app.get(`${minorDomain}#covid-test`, function(context) {
	// 	buildQuizPage()
	// });

	// app.get(`${minorDomain}#questions/:id/comments`, function(context) {
	// 	buildQuestionsCommentsPage(context.params.id)

	// 	// let queryString = window.location.search;
	// 	console.log(context.params.id);

		
	// 	// 
	// 	});

	// 	app.get(`${minorDomain}#login`, function(context) {
	// 		buildLogin()
	// 		});

	// 	app.get(`${minorDomain}#signup`, function(context) {
	// 		buildSignup()
	// 		});

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




