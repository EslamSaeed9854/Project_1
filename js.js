let curBtn1 = document.getElementById("python");
let curBtn2 = document.getElementById("exel");
let curBtn3 = document.getElementById("web");
let curBtn4 = document.getElementById("java");
let curBtn5 = document.getElementById("data");
let curBtn6 = document.getElementById("aws");
let curBtn7 = document.getElementById("draw");
let courseDet = document.getElementById("courseDet");
let jsondata;
let courses;

let temp = "";
curBtn1.addEventListener("click", function(){Run("python")});
curBtn2.addEventListener("click", function(){Run("excel")});
curBtn3.addEventListener("click", function(){Run("web")});
curBtn4.addEventListener("click", function(){Run("js")});
curBtn5.addEventListener("click", function(){Run("data")});
curBtn6.addEventListener("click", function(){Run("aws")});
curBtn7.addEventListener("click", function(){Run("draw")});

function Run(st) {
    console.log(st);
  fetch("./data/" +st+"_res.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => (courses = jsondata));
  let current = st;
  temp = "";
  temp += `
     <strong style="font-size: 30px; line-height: 2.5">${courses.header}<br></strong>
     <span> ${courses.description}<br /><br/></span>
     <button class="expore-pyth">Explore ${current}</button>
     <div class="Courses-photos">
     <!--Cources-photos-->
     `;
  for (var i = 0; i < courses.courses.length; i++) {
    temp += `
         <div class="one-course">
             <img src="${courses.courses[i].image}" alt="" />
             <p>
             <strong>
                 ${courses.courses[i].title}
             </strong>
             <strong>
               
             </strong>
             <div>
                 <span >${courses.courses[i].rating}</span>
                 <span class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
             </div>
             <span>&dollar;${courses.courses[i].price}</span>
             </p>
         </div>`;
  }
  temp += "</div>";
  courseDet.innerHTML = temp;
}
