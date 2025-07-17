const salon = {
    name: "The Pet Place",
    phone: "818 999 9999",
    address: {
            number: "12345",
            street: "Olivera St.",
            city: "Los Angeles",
            state: "CA",
            zip: "12345"},
    
    hours:{
            open: "8am",
            close: "6pm"
    },
    owner: "Alexander Dedman"
    }

function displaySalonInformation(){
    let salonContainer = document.getElementById("salonContainer");
    let information = "";


    information += `<h2>${salon.name} </h2>
    <p> Owner: ${salon.owner} <br> Phone: ${salon.phone} <br> 
        Address: ${salon.address.number} ${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip} <br>
        Hours: ${salon.hours.open} - ${salon.hours.close} </p>
`;


salonContainer.innerHTML = information;
}

displaySalonInformation();

function Pet(name,age,gender,service,breed,tier){
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.service = service, 
        this.breed = breed,
        this.tier = tier
}

const pet4 = new Pet("Tara", 2, "female", "Grooming", "Mixed", "Basic");
const pet5 = new Pet("Dude", 4, "male", "Nail Clipping", "Bulldog", "Premium");
const pet6 = new Pet("Lady", 6, "other", "Daycare", "Pug", "Deluxe");

const petRegistrationForm = document.getElementById("petRegistrationForm");
const petsList = document.getElementById("petsList");

function registerPet(event){
  event.preventDefault();

 let result = "";

    const name = petRegistrationForm.elements["petName"].value;
    const age = petRegistrationForm.elements["petAge"].value;
    const gender = petRegistrationForm.elements["petGender"].value;
    const breed = petRegistrationForm.elements["petBreed"].value;
    const service = petRegistrationForm.elements["petService"].value;
    const tier = petRegistrationForm.elements["petTier"].value;

    const newPet = new Pet(name, age, gender, service, breed, tier);

console.log(newPet);

displayPet(newPet);

petRegistrationForm.reset();
}

function displayPet(newPet) {

petList.innerHTML += `
<table class="table petInfo">
  <tbody>
    <tr>
      <th scope="row">${newPet.name}</th>
      <td>${newPet.age}</td>
      <td>${newPet.gender}</td>
      <td>${newPet.breed}</td>
      <td>${newPet.service}</td>
      <td>${newPet.tier}</td>
    </tr>
`

}

