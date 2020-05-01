import staff from '../dummy/dummy-staff.js'


export default function buildStaffList(){
    
  const url = "http://localhost:3000/users/getallofthem"
  axios.get(url).then(res=> {

    console.log(res.data)

    let users = res.data




    let uList = []
    let aList = []
    users.forEach(e=>{

      let condition = ""

      if (e.user_type == "admin"){
        condition = `<td><button id="${e.id}" class="demote"> <i class="fa fa-arrow-down" aria-hidden="true"></i> </button></td>`
        aList.push(`<tr>
        <th scope="row">${e.first_name}</th>
        <td>${e.user_type}</td>
        
        ${condition}
        </tr>`
        )
      }
      else{
        condition = `<td><button id="${e.id} " class="promote"> <i class="fa fa-arrow-up" aria-hidden="true"></i> </button></td>`
        uList.push(`<tr>
        <th scope="row">${e.first_name}</th>
        <td>${e.user_type}</td>
        
        ${condition}
        </tr>`
        )
      }
       
    })
   
    

    
    $(".main").empty();
    

    $(".main").append(`





    <div class="container-fluid">
	<div class="row">
    <div class="col-md-6">
    
    <div class="container-fluid w-75 h-100">


    <div class="m-5">

      <h4 class="text-center">Normal Users List</h4>
    </div>



    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          
          <th scope="col">User Type</th>
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
          <th scope="col">Name</th>
          
          <th scope="col">User Type</th>
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
    
   
  }).catch(err=>console.log(err))


}