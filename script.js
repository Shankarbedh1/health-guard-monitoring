


//scroll
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
  });



// logout btn
const openBtn = document.querySelector("[data-open]");
const closeBtn = document.querySelector("[data-close]");
const modal = document.querySelector("#modal");

openBtn.addEventListener("click", () => {
  modal.showModal();
});


closeBtn.addEventListener("click", () => {
  modal.close();
});


// bmi
let button = document.getElementById('btn-bmi');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});