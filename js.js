let curBtn1 = document.getElementById("python");
let curBtn2 = document.getElementById("exel");
let curBtn3 = document.getElementById("web");
let curBtn4 = document.getElementById("java");
let curBtn5 = document.getElementById("data");
let curBtn6 = document.getElementById("aws");
let curBtn7 = document.getElementById("draw");
let courseDet = document.getElementById("courseDet");
let search_txt = document.getElementById("in-search");
let search_photo = document.getElementById("search_photo");
let links = document.getElementsByClassName("button-style");
let temp = "";
let coursesm="";
var python_data; 
var  excel_data;
var web_data;
var js_data;
var data_data;
var aws_data;
var draw_data;
search_photo.addEventListener("click" , function(){
  if(search_txt.value == "python"){
    Run(search_txt.value,python_data);
    curBtn1.classList.add("active")
  }
  if(search_txt.value == "excel"){
    Run(search_txt.value,excel_data);
    curBtn2.classList.add("active")
  }
  if(search_txt.value == "web"){
    Run(search_txt.value,web_data);
    curBtn3.classList.add("active")
  }
  if(search_txt.value == "javascript"){
    Run(search_txt.value,js_data);
    curBtn4.classList.add("active")
  }
  if(search_txt.value == "datascience"){
    Run(search_txt.value,data_data);
    curBtn5.classList.add("active")
  }
  if(search_txt.value == "AWS"){
    Run(search_txt.value,aws_data);
    curBtn6.classList.add("active")
  }
  if(search_txt.value == "draw"){
    Run(search_txt.value,draw_data);
    curBtn7.classList.add("active")
  }
});
curBtn1.addEventListener("click", function(){Run("python",python_data);curBtn1.classList.add("active")});
curBtn2.addEventListener("click", function(){Run("excel",excel_data);curBtn2.classList.add("active")});
curBtn3.addEventListener("click", function(){Run("web", web_data);curBtn3.classList.add("active")});
curBtn4.addEventListener("click", function(){Run("js",js_data);curBtn4.classList.add("active")});
curBtn5.addEventListener("click", function(){Run("data",data_data);curBtn5.classList.add("active")});
curBtn6.addEventListener("click", function(){Run("aws",aws_data);curBtn6.classList.add("active")});
curBtn7.addEventListener("click", function(){Run("draw",draw_data);curBtn7.classList.add("active")});
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
function Run(st,cor) {
  removeAct();
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
  return 1;
}
function removeAct()
{
  for(let i = 0 ; i < links.length ; i++)
  {
    links[i].classList.remove("active");
  }
}
setTimeout(function () {
  pre();}, 0); 
  setTimeout(function () {
    Run("python",python_data);curBtn1.classList.add("active")}, 555);