const slides = document.querySelectorAll(".sliders");
let count = 0;

// console.log(slides);

slides.forEach(
    (slides,index) =>{
        slides.style.left = index * 100 + "%";
    }
)

const goPrev = ()=>{
    count--
    slideImage()
}

const  goNext = ()=>{
   count++
   slideImage()
}

const slideImage = () =>{
  slides.forEach(
    (slide)=>{
        slide.style.transform = `translateX(-${count * 100}%)`
    }
  )
}

// slider end

// $(document).ready(function(){
//     $("#click-field-1").click(function(){
//       $("#input-1").hide();
//     });
//     $("#click-field-1").click(function(){
//       $("#input-1").show();
//     });
//   });


// first field
let btn_Submut_1 = document.querySelector("#button-1 ").addEventListener("click",()=>{
    let text_field_1 = document.querySelector("#input-1").value; 
    document.querySelector("#collect-data-1").innerHTML = Number(text_field_1)
})
document.querySelector('#input-1').style = "display:block";


// second field
let btn_Submut_2 = document.querySelector("#button-2 ").addEventListener("click",()=>{
    let text_field_2 = document.querySelector("#input-2").value; 
    document.querySelector("#collect-data-2").innerHTML = Number(text_field_2)
})
document.querySelector('#input-2').style = "display:block";


// third field
let btn_Submut_3 = document.querySelector("#button-3 ").addEventListener("click",()=>{
    let text_field_3 = document.querySelector("#input-3").value; 
    document.querySelector("#collect-data-3").innerHTML = Number(text_field_3)
})
document.querySelector('#input-3').style = "display:block";

//forth field

let btn_Submut_4 = document.querySelector("#button-4 ").addEventListener("click",()=>{
    let text_field_4 = document.querySelector("#input-4").value; 
    document.querySelector("#collect-data-4").innerHTML = Number(text_field_4)
    
})
document.querySelector('#input-4').style = "display:block";


//total amount

let Total = document.querySelector('#total').addEventListener('click', () => {
    let input_1 =document.querySelector('#input-1').value;
    let total_1 = Number(input_1);   
    document.querySelector('#total-field').innerHTML = total_1;


    let input_2 =document.querySelector('#input-2').value;
    let total_2 = Number(input_2); 


    let input_3 =document.querySelector('#input-3').value;
    let total_3 = Number(input_3); 



    let input_4 =document.querySelector('#input-4').value;
    let total_4 = Number(input_4); 

    let total_amount = total_1 + total_2 + total_3 + total_4;
    document.querySelector('#total-field').innerHTML = total_amount;


    let avg = total_amount / 4;
    document.querySelector('#Average').innerHTML  = `Average ${avg}`

})




