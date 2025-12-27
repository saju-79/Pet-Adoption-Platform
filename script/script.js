

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
    <p>${pet.pet_details.slice(0 ,230)}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Seelect</button>
    </div>
  </div>
</div>

      
     
     `
     petsSection.appendChild(div)
  });
 
 
}


const hiiden=()=>{
  document.getElementById("spaner").classList.add("hidden")
}
const show =()=>{
   document.getElementById("spaner").classList.remove("hidden")
}


categoryBtn()