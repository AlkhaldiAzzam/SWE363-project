import staff from '../dummy/dummy-staff.js'


export default function buildStaffList(){
    $("#navbar").next().remove();

    let tList = []
    staff.forEach(e=>{
        tList.push(`<tr>
        <th scope="row">${e.name}</th>
        <td>${e.id}</td>
        <td>${e.role}</td>
        <td><button class=""> <i class="fas fa-pencil-alt"></i> </button></td>
      </tr>`)
    })


    

    $("#navbar").after(`


    <div class="container-fluid w-75">


      <div class="m-5">

        <h4 class="text-center">Staff List</h4>
      </div>



      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Role</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          ${tList}
        </tbody>
      </table>
    </div>


    `)
}