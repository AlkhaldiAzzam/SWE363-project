import { userController } from "./main.js";

  let user = JSON.parse(window.localStorage.getItem('user'))

    const url = "http://localhost:3000/users/profile/update"




export default function buildProfile(){

    $(".main").empty();





    $(".main").append(`
    <div class="blue-back">

    <div class="container-fluid w-75 ">

      <div class="row m-5">
        <div class="col-md-12 ">
          <h4 class="text-center">Update Your Profile</h4>
        </div>
      </div>


      <div class="row ">
        <div class="col-md-12">
          <form>
            <div class="form-row ">
              <div class="col">
              <label for="fName"> First Name </label>
                <input type="text" id="fName" class="form-control" placeholder="${user.user_data.first_name}">
              </div>
              <div class="col">
              <label for="lName"> Last Name </label>

                <input type="text" id="lName" class="form-control" placeholder="${user.user_data.last_name}">
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row m-5">
        <div class="col-md-12">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1"> New Email address</label>
              <input id="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="${user.user_data.email}">
            </div>
            </form>
        </div>
      </div>
      
      <div class="row mv-5">
        <div class="col-md-12">
          <form class="form-inline d-flex justify-content-around">
            <div class="form-group">
              <label for="inputPassword6"> New Password</label>
              <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
              
            </div>

            <div class="form-group">
              <label for="inputPassword6">Repeat Password</label>
              <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
              
            </div>
          </form>
        </div>
      </div>
      <div class="row m-5">
        <div class="col-md-12 d-flex justify-content-center">
          <button id="btn" type="submit" class="btn btn-primary ">Update</button>
        </div>
      </div>

    </div>
	
  </div>`)


  $("#btn").click(()=>{

    console.log("auth token",user.auth_token)
    
    axios.patch(url,{
      headers: {
        Authorization: user.auth_token
      },
      first_name: $("#fName").val(),
        last_name: $("#lName").val(),
        email: $("#email").val()
    }).then(res=>{
      console.log(res)

      userController(res.data)

    }).catch(err=>console.log(err))
  })


}

