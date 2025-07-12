//constructor for the services
function Service(name, desciption, price){
    this.name = name;
    this.description = description;
    this.price = price;
}

$(document).ready(function(){

    $("#servicesRegistrationForm").on("submit", function (event){
    console.log(event);
    event.preventDefault();

    //select the inputs and get the values using jQuery
    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val().trim();

    //console log the inputs to double check the information
    console.log(` Service Name: ${name}, Service Description: ${description}, Service Price; ${price}`);

    // validate the inputs
    if ( !name || !description || isNaN(price) ||  price<=0 ){
    alert("All the fields are required and/or the price must be a positive number");
    //user jQuery to validate the inputs and prevent the user - Assignment 1 
    $("#serviceName").css('border', '2px red solid');
    $("#serviceDescription").css('border', '2px red solid');
    $("#servicePrice").css('border', '2px red solid');
    } else {
        alert("Services registered successfully");
    }
});
    $("#clearButton").click(function (event){
    $("form").get(0).reset();
    $("#serviceName").css('border', '');
    $("#serviceDescription").css('border', '');
    $("#servicePrice").css('border', '');
    });
});