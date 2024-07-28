// Facts counter
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})

// contact form start

function checkForm() {

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;


  if (fname == "") {
    document.getElementById("fname").style.border = '1px solid red'
  }
  else if (lname == "") {
    document.getElementById("lname").style.border = '1px solid red'
    document.getElementById("fname").style.border = '1px solid lightgray'
  }
  else if (email == "") {
    document.getElementById("email").style.border = '1px solid red'
    document.getElementById("fname").style.border = '1px solid lightgray'
    document.getElementById("lname").style.border = '1px solid lightgray'
  }
  else if (phone == "") {
    document.getElementById("phone").style.border = '1px solid red'
    document.getElementById("email").style.border = '1px solid lightgray'
    document.getElementById("fname").style.border = '1px solid lightgray'
    document.getElementById("lname").style.border = '1px solid lightgray'
    
  }
  else if (message == "") {
    document.getElementById("message").style.border = '1px solid red'
    document.getElementById("email").style.border = '1px solid lightgray'
    document.getElementById("phone").style.border = '1px solid lightgray'
    document.getElementById("fname").style.border = '1px solid lightgray'
    document.getElementById("lname").style.border = '1px solid lightgray'
    
  }
  else {
    window.location.href = "mailto:kousarnisar98@gmail.com";
  }
}


// contact form end

// product detail page img start

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function()
{
    ProductImg.src =  SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
    ProductImg.src =  SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
    ProductImg.src =  SmallImg[2].src;
}
// product detail page img end


// sweetalert js
const Swal = require('sweetalert2')

function sweetFire() {
  swal("Good job!", "Your Order is Confirmed!", "success");
}


