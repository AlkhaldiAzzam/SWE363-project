import staff from '../dummy/dummy-staff.js'


export default function buildStaffList(q){
    

if(q){

  const url = `http://localhost:3000/users/getallofthem/${q}`
  axios.get(url).then(res=> {

    console.log(res.data)

    let users = res.data




    let uList = []
    let aList = []
    users.forEach(e=>{

      let condition = ""

      if (e.user_type == "admin"){
        condition = ``
        aList.push(`<tr>
        <th scope="row">${e.username}</th>
        <th scope="row">${e.first_name}</th>
        <td>${e.user_type}</td>
        <td><button  id="${e.id}" class="demote" data-toggle="tooltip" data-placement="top" title="Demote Admin"> <i class="fa fa-arrow-down" aria-hidden="true"></i> </button></td>
        <td> <button id="${e.id}" class="deleteUser"> <i class="fas fa-trash-alt"></i> </button></td>
        </tr>`
        )
      }
      else{
        condition = ``
        uList.push(`<tr>
        <th scope="row">${e.username}</th>
        <th scope="row">${e.first_name}</th>
        <td>${e.user_type}</td>
        <td><button id="${e.id} " class="promote"   data-toggle="tooltip" data-placement="top" title="Promote User"> <i class="fa fa-arrow-up" aria-hidden="true"></i> </button></td>
        <td> <button id="${e.id}" class="deleteUser"> <i class="fas fa-trash-alt"></i> </button></td>
        
        </tr>`
        )
      }
       
    })
   
    

    
    $(".main").empty();
    

    $(".main").append(`





    <div class="container-fluid">


    <div class="d-flex justify-content-center m-5">

    <form class=" justify-self-center form-inline my-2 my-lg-0">
    <input id="userSearch" class="form-control mr-sm-2" type="search" placeholder="Search for users" aria-label="Search">
    <button id="searchBtn" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

</div>

	<div class="row">
    <div class="col-md-6">
    
    
    <div class="container-fluid w-75 h-100">


    <div class="m-5">

      <h4 class="text-center">Normal Users List</h4>
    </div>



    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          
          <th scope="col">User Type</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        ${uList.join('')}
      </tbody>
    </table>
  </div>


		</div>
    <div class="col-md-6">
    
    
    <div class="container-fluid w-75 h-100">


    <div class="m-5">

      <h4 class="text-center">Admins List</h4>
    </div>



    <table class="table table-striped">
      <thead>
        <tr>
        <th scope="col">Username</th>

          <th scope="col">Name</th>
          
          <th scope="col">User Type</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        ${aList.join('')}
      </tbody>
    </table>
  </div>


		</div>
	</div>
</div>




    

    

    `)
    $(".promote").click(function(){
      // console.log(this.id)

      let con = confirm("Are you sure this user is worthy?")
     
  if (con){
  axios.post(`http://localhost:3000/users/${this.id}/promote`,{}, {
    
    'headers':{
      'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
    }
  }).then(res=>{
    
    location.reload()
    console.log(res)}).catch(err=>console.log(err ))

  }
    })


    $(".demote").click(function(){
      // console.log(this.id)

      let con = confirm("Are you sure this user is not worthy?")
     
  if(con){
  axios.post(`http://localhost:3000/users/${this.id}/demote`,{}, {
    
    'headers':{
      'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
    }
  }).then(res=>{
    
    location.reload()
    console.log(res)}).catch(err=>console.log(err ))
  }
    })
    $("#searchBtn").click((e)=>{
      let searcValue = $("#userSearch").val()
      e.preventDefault()
      if(searcValue!="")
      buildStaffList(searcValue)
      else
      location.reload()
    })
   
  }).catch(err=>console.log(err))

}


else {
  const url = "http://localhost:3000/users/getallofthem"
  axios.get(url).then(res=> {

    console.log(res.data)

    let users = res.data




    let uList = []
    let aList = []
    users.forEach(e=>{

      let condition = ""

      if (e.user_type == "admin"){
        condition = ``
        aList.push(`<tr>
        <th scope="row">${e.username}</th>
        <th scope="row">${e.first_name}</th>
        <td>${e.user_type}</td>
        <td><button  id="${e.id}" class="demote" data-toggle="tooltip" data-placement="top" title="Demote Admin"> <i class="fa fa-arrow-down" aria-hidden="true"></i> </button></td>
        <td> <button id="${e.id}" class="deleteUser"> <i class="fas fa-trash-alt"></i> </button></td>
        </tr>`
        )
      }
      else{
        condition = ``
        uList.push(`<tr>
        <th scope="row">${e.username}</th>
        <th scope="row">${e.first_name}</th>
        <td>${e.user_type}</td>
        <td><button id="${e.id} " class="promote"   data-toggle="tooltip" data-placement="top" title="Promote User"> <i class="fa fa-arrow-up" aria-hidden="true"></i> </button></td>
        <td> <button id="${e.id}" class="deleteUser"> <i class="fas fa-trash-alt"></i> </button></td>
        
        </tr>`
        )
      }
       
    })
   
    

    
    $(".main").empty();
    

    $(".main").append(`





    <div class="container-fluid">


    <div class="d-flex justify-content-center m-5">

    <form class=" justify-self-center form-inline my-2 my-lg-0">
    <input id="userSearch" class="form-control mr-sm-2" type="search" placeholder="Search for users" aria-label="Search">
    <button id="searchBtn" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

</div>

	<div class="row">
    <div class="col-md-6">
    
    
    <div class="container-fluid w-75 h-100">


    <div class="m-5">

      <h4 class="text-center">Normal Users List</h4>
    </div>



    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          
          <th scope="col">User Type</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        ${uList.join('')}
      </tbody>
    </table>
  </div>


		</div>
    <div class="col-md-6">
    
    
    <div class="container-fluid w-75 h-100">


    <div class="m-5">

      <h4 class="text-center">Admins List</h4>
    </div>



    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          
          <th scope="col">User Type</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        ${aList.join('')}
      </tbody>
    </table>
  </div>


		</div>
	</div>
</div>




    

    

    `)
    $(".promote").click(function(){
      // console.log(this.id)

      let con = confirm("Are you sure this user is worthy?")
     
  if (con){
  axios.post(`http://localhost:3000/users/${this.id}/promote`,{}, {
    
    'headers':{
      'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
    }
  }).then(res=>{
    
    location.reload()
    console.log(res)}).catch(err=>console.log(err ))

  }
    })


    $(".demote").click(function(){
      // console.log(this.id)

      let con = confirm("Are you sure this user is not worthy?")
     
  if(con){
  axios.post(`http://localhost:3000/users/${this.id}/demote`,{}, {
    
    'headers':{
      'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
    }
  }).then(res=>{
    
    location.reload()
    console.log(res)}).catch(err=>console.log(err ))
  }
    })
    

    $("#searchBtn").click((e)=>{
      let searcValue = $("#userSearch").val()
      e.preventDefault()
      if(searcValue!="")
      buildStaffList(searcValue)
      else
      location.reload()
    })

    $(".deleteUser").click(function(){
      let con = confirm("Are you sure you want to delete this user?")
     
  if(con){
  axios.post(`http://localhost:3000/users/${this.id}/delete`,{}, {
    
    'headers':{
      'Authorization': JSON.parse(window.localStorage.getItem('user')).auth_token
    }
  }).then(res=>{
    
    location.reload()
    console.log(res)
  }).catch(err=>console.log(err ))
}
    })
   
  }).catch(err=>console.log(err))
}

}