import buildLogin from "./login.js";
import buildHomePage from "./home_page.js";
import buildFooter from "../footer.js";
import buildHeader from "./header.js";
import { userController } from "./main.js";


export default function buildSignup(){
    $(".main").empty();


    $(".main").append(`
	<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
        <div class="alert alert-danger d-none" id="alert" role="alert">
                 Please check your passwords!
            </div>
            <form class="login100-form validate-form" >
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
            <div class="wrap-input100 validate-input m-3" data-validate = "Valid email is required: ex@abc.xyz">
              <input class="input100" id="email" type="text" name="email" placeholder="Email">
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
                    <button id="signup" class="login100-form-btn">
                        Sign up
                    </button>
                </div>

                

                <div class="text-center m-3">
                    <span class="txt1">
                      Already have an account?
                    </span>

                    <button class="txt2 hov1 " id="login">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>`)

$("#login").click(()=> buildLogin())

$("#signup").click((e)=>{
    e.preventDefault();

    console.log('rePass:',$("#rePass").val() )
    console.log('Pass:',$("#pass").val() )
    const data = {
        first_name: $("#fName").val(),
        last_name: $("#lName").val(),
        email: $("#email").val(),
        password: $("#pass").val(),
        password_confirmation: $("#rePass").val(),
        u_id: "1234567890",
        type: "Normal User"


    }

    const url = "http://localhost:3000/signup"

    if(data.password != data.password_confirmation)
    $("#alert").removeClass("d-none")

    else{

        
        axios.post(url, data).then(res=>{
            console.log(res)
            buildHeader(res.data.user_data)
            buildHomePage()
            userController(res.data)
       
            console.log(JSON.parse(window.localStorage.getItem('user')))
            
        }).catch(err=> console.log(err))
        
    }

})

}

