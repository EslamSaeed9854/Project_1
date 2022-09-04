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
Run("python");
curBtn1.classList.add("active");
search_photo.addEventListener("click" , function(){
  if(search_txt.value == "python"){
    Run(search_txt.value);
    curBtn1.classList.add("active")
  }
  if(search_txt.value == "excel"){
    Run(search_txt.ariaValueNow);
    curBtn2.classList.add("active")
  }
  if(search_txt.value == "web"){
    Run(search_txt.value);
    curBtn3.classList.add("active")
  }
  if(search_txt.value == "javascript"){
    Run(search_txt.value);
    curBtn4.classList.add("active")
  }
  if(search_txt.value == "datascience"){
    Run(search_txt.value);
    curBtn5.classList.add("active")
  }
  if(search_txt.value == "AWS"){
    Run(search_txt.value);
    curBtn6.classList.add("active")
  }
  if(search_txt.value == "draw"){
    Run(search_txt.value);
    curBtn7.classList.add("active")
  }
});
curBtn1.addEventListener("click", function(){Run("python");curBtn1.classList.add("active")});
curBtn2.addEventListener("click", function(){Run("excel");curBtn2.classList.add("active")});
curBtn3.addEventListener("click", function(){Run("web");curBtn3.classList.add("active")});
curBtn4.addEventListener("click", function(){Run("js");curBtn4.classList.add("active")});
curBtn5.addEventListener("click", function(){Run("data");curBtn5.classList.add("active")});
curBtn6.addEventListener("click", function(){Run("aws");curBtn6.classList.add("active")});
curBtn7.addEventListener("click", function(){Run("draw");curBtn7.classList.add("active")});
async function getData(cor) {
  let res = await fetch('http://192.168.1.146:5501/data/'+cor+'_res.json');
  let data = await res.json();
  console.log(data);
  return data;
}
async function Run(st) {
  removeAct();
  coursesm = await getData(st);
  let current = st;
  temp = "";
  temp += `
     <strong class="h2">${coursesm.header}<br></strong>
     <span> ${coursesm.description}<br/><br/></span>
     <button class="expore-pyth">Explore ${current}</button>
     <div class="Courses-photos">`;

     temp+=`
      <section class="m-auto par">
        <div >
            <a class="btn float-left btn-dark my-3 slider-b-l" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa circle fa-arrow-left"></i>
            </a>
            <a class="btn float-right btn-dark my-3 slider-b-r" href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa circle fa-arrow-right"></i>
            </a>
            <div style="clear:both"></div>
        </div>
        <div class="container m-auto">
          <div class="row">
            
             <div class="col-12">
                 <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner m-auto">
                         <div class="carousel-item active">
                             <div class="row">
     `;
  for (var i = 0; i < 4; i++) {
    temp += `
    <div class="col-md-3 col-sm-6 col-xs-12 my-3">      
    <div class="one-course">
        <img src="${coursesm.courses[i].image}" alt="" />
      <p>
        <strong>
            ${coursesm.courses[i].title}
            <br>
        </strong>
        <strong class="text-muted">
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
          <span class="p">&dollar;${coursesm.courses[i].price}</span>
        </div>
      </p>
    </div>
  </div>`;
  }

  temp += `
  </div>
  </div>
  `;
var i=4;
  for(let j=0;j<2;j++){
    temp+=`
    <div class="carousel-item">
      <div class="row">
    `;
    for(let p=0 ;p<4;p++){
      temp += `
        <div class="col-md-3 col-sm-6 col-xs-12 my-3">      
        <div class="one-course">
            <img src="${coursesm.courses[i].image}" alt="" />
          <p>
            <strong>
                ${coursesm.courses[i].title}
                <br>
            </strong>
            <strong class="text-muted">
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
        </div>
      </div>`;
      i++;
    }
    temp += `
    </div>
    </div>
    `;
  }

  temp+=`
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  `;

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