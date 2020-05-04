import { domain } from "./main.js";



export default function buildPassResetEmailPage(){


    $(".main").empty();
    
    
    $(".main").append(`
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                
                <form class="login100-form validate-form">
                    <span class="login100-form-title p-b-33">
                        Enter your email
                    </span>
    
                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input100" id="email" type="text" name="email" placeholder="Email">
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>
    
                    
    
                    <div class="container-login100-form-btn m-t-20">
                        <button id="subBtn2" class="login100-form-btn">
                            Submit
                        </button>
                    </div>
    
                    
                </form>
            </div>
        </div>
    </div>
    `)
    
    $("#subBtn2").click((e)=>{
        e.preventDefault()
        let data = {
            email: $("#email").val()
        }

        let url = "https://swe363-api.herokuapp.com/users/passresetemail"

        axios.post(url, data).then(res=>{
            console.log(res)
            window.location.href = domain + "#emailsent/"
        }).catch(err=>console.log(err))


    })
    
    
    
    }