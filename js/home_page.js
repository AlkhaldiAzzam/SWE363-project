
export default function buildHomePage(){
    $("#navbar").next().remove();


    $("#navbar").after(`
    <div class="container-fluid" style="padding: 0px ;">
    
      <div class="jumbotron">
        <h1>Services</h1>
        <div class="row">
          <div class="col-sm-3">
            <img src="../images/coronavirus.png" alt="covid" width="100%" />
            <svg
              class="bi bi-check-all"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                clip-rule="evenodd"
              />
              <path
                d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z"
              />
            </svg>
            <a href="test.html" style="font-size: 2em;">test for covid-19</a>
          </div>

          <div class="col-sm-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              veniam quia, facere provident reprehenderit assumenda consequatur
              atque iusto quod libero? Nulla, fugit explicabo. Incidunt
              cupiditate quibusdam, placeat eveniet sunt ipsam!
            </p>
          </div>
          <div class="col-sm-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              veniam quia, facere provident reprehenderit assumenda consequatur
              atque iusto quod libero? Nulla, fugit explicabo. Incidunt
              cupiditate quibusdam, placeat eveniet sunt ipsam!
            </p>
          </div>
          <div class="col-sm-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              veniam quia, facere provident reprehenderit assumenda consequatur
              atque iusto quod libero? Nulla, fugit explicabo. Incidunt
              cupiditate quibusdam, placeat eveniet sunt ipsam! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti repudiandae
              illum dolorum, obcaecati voluptates magni maiores non animi
              cupiditate similique laboriosam iste autem voluptatibus!
              Distinctio officia aliquam nulla fugit dolore!
            </p>
          </div>
        </div>
      </div>
    
    <!-- news -->
  
      
<div class="container">
    <h2>Panel Heading</h2>
    <div class="panel panel-default">
      <div class="panel-heading">Panel Heading</div>
      <div class="panel-body">Panel Content</div>
    </div>


    
    
    <div class="panel panel-default">
        <div class="panel-body">
          Basic panel example
        </div>
      </div>
      
  </div>
  <div class="panel panel-default">
      <div class="panel-body">
        Basic panel example
      </div>
    </div>
    </div>
    `)
}