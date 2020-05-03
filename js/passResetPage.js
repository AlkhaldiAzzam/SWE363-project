


export default function buildPasswordResetPage(email){


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
                Password Reset
            </span>

            <div class="wrap-input100 rs1 validate-input m-3" data-validate="Password is required">
              <input class="input100" id="pass" type="password" name="pass" placeholder="New Password">
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
          </div>

          <div class="wrap-input100 rs1 validate-input m-3" data-validate="Password is required">
            <input class="input100" id="rePass" type="password" name="rePass" placeholder="Repeat Password">
            <span class="focus-input100-1"></span>
            <span class="focus-input100-2"></span>
        </div>

            <div class="container-login100-form-btn m-t-20">
                <button id="login" class="login100-form-btn">
                    Reset Password
                </button>
            </div>

            
        </form>
    </div>
</div>
</div>
`)




}