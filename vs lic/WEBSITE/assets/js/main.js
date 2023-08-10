/*=============== SHOW MENU ===============*/
// const menuBtn = document.querySelector('.menu');
// const navlinks = document.querySelector('.nav_links');

// menuBtn.addEventListener('click', () => {
//   navlinks.classList.toggle('menu')
// })

/*==========Remove MENU ==============*/
const navlink = document.querySelectorAll('.nav_links');
function activeLink() {
  navlink.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}
navlink.forEach((item) => item.addEventListener('click', activeLink));


// ============================== Open New Window ====================== //

function newTab() {
  window.open("https://licindia.in/web/guest/insurance-plan");

}

function newTab2() {
  window.open("https://licindia.in/web/guest/pension-plan");

}

function newTab3() {
  window.open("https://licindia.in/web/guest/unit-linked-plans");

}

function newTab4() {
  window.open("https://licindia.in/web/guest/health-plans");

}

function newTab5() {
  window.open("https://licindia.in/web/guest/withdrawn-plans");
}



// email js 


function sendMail() {
  var Params = {
   full_name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    purpose: document.getElementById("purpose").value,
  };
  emailjs.sendForm("service_7bynd0a", "template_tmacwfq", "Params", "QpPJyOVwvMk0kfqAY").then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
      document.getElementById("dob").value = "";
      document.getElementById("email").value = "";
      document.getElementById("purpose").value = "";
      console.log(res);
      alert("Your Massage Sent Successfully");
    }
    )
    .catch((err) => console.log(err));
}

    /* --=================== Pop up Form ==================-- */

function showModal(){
  document.querySelector('.overlay').classList.add('showoverlay');
  document.querySelector('.form-popup').classList.add('showform-popup');

}
function closeModal(){
  document.querySelector('.overlay').classList.remove('showoverlay');
  document.querySelector('.form-popup').classList.remove('showform-popup');

}

var contactForm = document.querySelector(".contact-img");
contactForm.addEventListener('click',showModal)
var contactForms = document.querySelector(".contact-imgs");
contactForms.addEventListener('click',showModal)

  var c=document.querySelector(".closebtn");
  c.addEventListener('click',closeModal);




    //  Initialize Swiper 
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    const swiperEl = document.querySelector("swiper-container");
    swiperEl.addEventListener("autoplaytimeleft", (e) => {
      const [swiper, time, progress] = e.detail;
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    })