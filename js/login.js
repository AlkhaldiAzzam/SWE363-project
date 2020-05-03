import buildSignup from "./signup.js";
import buildHeader from './header.js';
import buildHomePage from './home_page.js'
import { userController, domain } from "./main.js";

export default function buildLogin(){
    $(".main").empty();


    $(".main").append(`
    
	<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <div class="alert alert-danger d-none" id="alert" role="alert">
                 Please check your credintials!
            </div>
            <form class="login100-form validate-form">
                <span class="login100-form-title p-b-33">
                    Account Login
                </span>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" id="email" type="text" name="email" placeholder="Email">
                    <span class="focus-input100-1"></span>
                    <span class="focus-input100-2"></span>
                </div>

                <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                    <input class="input100" id="pass" type="password" name="pass" placeholder="Password">
                    <span class="focus-input100-1"></span>
                    <span class="focus-input100-2"></span>
                </div>

                <div class="container-login100-form-btn m-t-20">
                    <button id="login" class="login100-form-btn">
                        Sign in
                    </button>
                </div>

                <div class="text-center p-t-45 p-b-4">
                    <span class="txt1">
                        Forgot
                    </span>

                    <a  class="txt2 hov1">
                        Username / Password?
                    </a>
                </div>

                <div class="text-center">
                    <span class="txt1">
                        Create an account?
                    </span>

                    <a href="SWE363-project/#/signup" class="txt2 hov1" id="signup">
                        Sign up
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
    `)

    // $("#signup").click(()=> buildSignup())

    $("#login").click((e)=>{
        e.preventDefault();
    
        console.log('hhhhh')
        const data = {
         
            email: $("#email").val(),
            password: $("#pass").val(),
    
    
        }
    
        
        login(data)
        
    })
    
}

function login(data){
    
    const url = "https://swe363-api.herokuapp.com/auth/login"
    

    axios.post(url, data).then(res=>{
        console.log(res)
      
        userController(res.data)
        // buildHeader()
        window.location.href = domain +"#home/"
        
    }).catch(err=> {
        $("#alert").removeClass("d-none")

        console.log(err)
    })


}
