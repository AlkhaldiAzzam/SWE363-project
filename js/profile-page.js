

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
                <input type="text" class="form-control" placeholder="First name">
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name">
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
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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
          <button type="submit" class="btn btn-primary ">Update</button>
        </div>
      </div>

    </div>
	
  </div>`)

}

