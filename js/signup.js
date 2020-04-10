import buildLogin from "./login.js";


export default function buildSignup(){
    $(".main").empty();


    $(".main").append(`
	<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <form class="login100-form validate-form">
                <span class="login100-form-title p-b-33">
                    New Account 
                </span>

                <div class="wrap-input100 validate-input m-3" >
                    <input class="input100" type="text" name="fName" placeholder="First Name">
                    <span class="focus-input100-1"></span>
                    <span class="focus-input100-2"></span>
                </div>

                <div class="wrap-input100 validate-input m-3" >
                  <input class="input100" type="text" name="lName" placeholder="Last Name">
                  <span class="focus-input100-1"></span>
                  <span class="focus-input100-2"></span>
              </div>
            <div class="wrap-input100 validate-input m-3" data-validate = "Valid email is required: ex@abc.xyz">
              <input class="input100" type="text" name="email" placeholder="Email">
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
          </div>

                <div class="wrap-input100 rs1 validate-input m-3" data-validate="Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Password">
                    <span class="focus-input100-1"></span>
                    <span class="focus-input100-2"></span>
                </div>

                <div class="wrap-input100 rs1 validate-input m-3" data-validate="Password is required">
                  <input class="input100" type="password" name="rePass" placeholder="Repeat Password">
                  <span class="focus-input100-1"></span>
                  <span class="focus-input100-2"></span>
              </div>

                <div class="container-login100-form-btn m-t-20">
                    <button class="login100-form-btn">
                        Sign in
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

}

