import buildLogin from "./login.js";
import buildHomePage from "./home_page.js";
import buildFooter from "../footer.js";
import buildHeader from "./header.js";
import { userController, domain } from "./main.js";


export default function buildSignup(){
    $(".main").empty();


    $(".main").append(`
	<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
        <div class="alert alert-danger d-none" id="alert" role="alert">
                 Please check your passwords!
            </div>
            <form onsubmit="return" id="signup-form" class="login100-form validate-form" >
                <span class="login100-form-title p-b-33">
                    New Account 
                </span>

                <div class="wrap-input100 validate-input m-3" >
                    <input class="input100" type="text" name="fName" id="fName" placeholder="First Name">
                    <span class="focus-input100-1"></span>
                    <span class="focus-input100-2"></span>
                </div>

                <div class="wrap-input100 validate-input m-3" >
                  <input class="input100" id="lName" type="text" name="lName" placeholder="Last Name">
                  <span class="focus-input100-1"></span>
                  <span class="focus-input100-2"></span>
              </div>
            <div class="wrap-input100  m-3" >
              <input class="input100" id="email" type="email" name="email" placeholder="Email" required>
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
          </div>

                <div class="wrap-input100 rs1 validate-input m-3" data-validate="Password is required">
                    <input class="input100" id="pass" type="password" name="pass" placeholder="Password">
                    <span class="focus-input100-1"></span>
                    <span class="focus-input100-2"></span>
                </div>

                <div class="wrap-input100 rs1 validate-input m-3" data-validate="Password is required">
                  <input class="input100" id="rePass" type="password" name="rePass" placeholder="Repeat Password">
                  <span class="focus-input100-1"></span>
                  <span class="focus-input100-2"></span>
              </div>

                <div class="container-login100-form-btn m-t-20">
                    <input type="submit" id="signup" class="login100-form-btn" value="Sign up"/>
                        
                    
                </div>

                

                <div class="text-center m-3">
                    <span class="txt1">
                      Already have an account?
                    </span>

                    <a href="/#/login" class="txt2 hov1 " id="login">
                        Login
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>`)

// $("#login").click(()=> buildLogin())




$("#signup").click((e)=>{



    e.preventDefault();
    console.log('rePass:',$("#rePass").val() )
    console.log('Pass:',$("#pass").val() )
    const data = {
        first_name: $("#fName").val(),
        last_name: $("#lName").val(),
        email: $("#email").val(),
        password: $("#pass").val(),
        password_confirmation: $("#rePass").val()


    }


    if (ValidateEmail(data.email)){
    const url = "http://localhost:3000/signup"

    if(data.password != data.password_confirmation)
    $("#alert").removeClass("d-none")

    else{

        
        axios.post(url, data).then(res=>{
            console.log(res)
            // buildHeader(res.data.user_data)
            // buildHomePage()
            userController(res.data)

            window.location.href = domain + "home"
       
            console.log(JSON.parse(window.localStorage.getItem('user')))
            
        }).catch(err=> console.log(err))
        
    }
    }
})

}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}