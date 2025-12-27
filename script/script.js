

const categoryBtn=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) =>{
       displayCategorie(data.categories)
         });
}
const displayCategorie =(cateItem)=>{
 
  const btnSection =  document.getElementById("category-btn");
 cateItem.forEach(item => {
    const div = document.createElement("div")
  div.innerHTML = `
 <button onclick ="lodepets('${item.category}')" class="btn p-3 ">
 ${item.category}   <img class="w-8" src="${item.category_icon}" alt="">
 </button>
  `
   btnSection.appendChild(div); 
 })
};
const lodepets = (petName)=>{
  show()
   
  
  const url =`https://openapi.programming-hero.com/api/peddy/category/${petName}`
  fetch(url)
  .then((res) => res.json())
  .then((data) =>{
    if(data.data){
        hiiden()
      diplayPets(data.data)
      
    }
  })
  
}

const diplayPets=(pets)=>{

  if(pets.length < 1){
 const error = document.getElementById("error-p");
   error.innerHTML=`
       
    <img class="w-60" src="images/error.webp" alt="">
    <h1 class="text-3xl font-bold ">Oops!! Sorry, There is no content here</h1>
   `}
   if (pets.length > 1) {
    document.getElementById("error-p").classList.add("hidden")
   }   
    
 const petsSection = document.getElementById("pet-section");
  petsSection.innerHTML=""
  pets.forEach(pet => {
    
    
     const div = document.createElement("div");
     div.innerHTML =`

     
<div class="card bg-base-100  w-full shadow-sm">
  <figure>
    <img class="w-full h-55 object-cover"
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pet.breed}</h2>
    <p>${pet.pet_details.slice(0 ,200)}</p>
    <div class="card-actions flex gap-2 justify-between p-2 ">
      <button onclick=" detailsLoder('${pet.petId}')" class="btn  btn-outline  btn-secondary w-3/12  ">details</button>
      <button  class="btn   btn-outline btn-primary w-3/12 select">Select</button>
    </div>
  </div>
</div>     
     `
     petsSection.appendChild(div)
  });


  const allselectBtn =document.getElementsByClassName("select");
  
  for(button of allselectBtn){
    button.addEventListener("click" , (event)=>{
      const title = event.target.parentNode.parentNode.childNodes[1].innerText;
      // console.log(title)
    })
  }
 
 
}
 
const hiiden=()=>{
  document.getElementById("spaner").classList.add("hidden")
}
const show =()=>{
   document.getElementById("spaner").classList.remove("hidden")
}

const detailsLoder=(id)=>{
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    displayDetails(data.petData)
  })};

  const displayDetails=(petDetails)=>{
    console.log(petDetails)
    document.getElementById("my_modal_1").showModal()
    const detailsSection = document.getElementById("ditels_btn");
     const div = document.createElement("div");
     div.innerHTML =`
        <div class="modal-box">
               <div class="card bg-base-100 image-full w-full shadow-sm">
  <figure>
    <img
    class="w-full object-cover"
      src ="${petDetails.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class="card">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold"> ${petDetails.breed}</h1>
      <h2 class="text-lg font-extrabold">Name:${petDetails.pet_name}</h2>
    </div>
    <p class="text-sm font-medium"> ${petDetails.gender}</p>
    <p class="text-sm font-medium">Price:<span class="  font-bold">${petDetails.price}$</span></p>
    <p class="text-sm font-medium"> Birth: ${petDetails.date_of_birth?"" :""}</p>
</div>
    <p> ${petDetails.pet_details}</p>
    
    <div class="card-actions justify-end">
       
    </div>
  </div>
</div>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
                   <button class="btn btn-primary  ">Close</button>
            </form>
          </div>
        </div>
     
     
     `
     detailsSection.appendChild(div)
         
  }


categoryBtn()