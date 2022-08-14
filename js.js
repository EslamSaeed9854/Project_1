let curBtn1 = document.getElementById("python");
let curBtn2 = document.getElementById("exel");
let curBtn3 = document.getElementById("web");
let curBtn4 = document.getElementById("java");
let curBtn5 = document.getElementById("data");
let curBtn6 = document.getElementById("aws");
let curBtn7 = document.getElementById("draw");
let courseDet = document.getElementById("courseDet");
let temp = "";
let coursesm="";
var python_data; 
var  excel_data;
var web_data;
var js_data;
var data_data;
var aws_data;
var draw_data;
curBtn1.addEventListener("click", function(){Run("python",python_data)});
curBtn2.addEventListener("click", function(){Run("excel",excel_data)});
curBtn3.addEventListener("click", function(){Run("web", web_data)});
curBtn4.addEventListener("click", function(){Run("js",js_data)});
curBtn5.addEventListener("click", function(){Run("data",data_data)});
curBtn6.addEventListener("click", function(){Run("aws",aws_data)});
curBtn7.addEventListener("click", function(){Run("draw",draw_data)});
pre();
function pre(){
  fetch("./data/" +"excel"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (excel_data = jsondata));
  fetch("./data/" +"web"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (web_data = jsondata));
  
  fetch("./data/" +"js"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (js_data = jsondata));

  fetch("./data/" +"data"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (data_data = jsondata));
  fetch("./data/" +"aws"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (aws_data = jsondata));
  fetch("./data/" +"draw"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (draw_data = jsondata));
  fetch("./data/" +"python"+"_res.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => (python_data = jsondata));
}
Run("python",python_data);
function Run(st,cor) {
  coursesm = cor;
  let current = st;
  temp = "";
  temp += `
     <strong style="font-size: 30px; line-height: 2.5">${coursesm.header}<br></strong>
     <span> ${coursesm.description}<br/><br/></span>
     <button class="expore-pyth">Explore ${current}</button>
     <div class="Courses-photos">
     <!--Cources-photos-->
     `;
  for (var i = 0; i < coursesm.courses.length; i++) {
    temp += `
         <div class="one-course">
             <img src="${coursesm.courses[i].image}" alt="" />
             <p>
             <strong>
                 ${coursesm.courses[i].title}
                 <br>
             </strong>
             <strong>
             ${coursesm.courses[i].instructors[0].name}<br>
             </strong>
             <div>
                 <span >${coursesm.courses[i].rating}</span>
                 <span class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                 <br>
                 <span>&dollar;${coursesm.courses[i].price}</span>
             </div>
             </p>
         </div>`;
  }

  temp += "</div>";
  courseDet.innerHTML = temp;
}
