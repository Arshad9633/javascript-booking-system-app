document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var service = document.getElementById("service").value;
    var servicer = document.getElementById("servicer").value;
    var customerName = document.getElementById("customer-name").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phone-number").value;
  
    // Create an object to hold the form data
    var formData = {
      date: date,
      time: time,
      service: service,
      servicer: servicer,
      customerName: customerName,
      address: address,
      phoneNumber: phoneNumber
    };
  
    // Store the form data in Web Storage (localStorage)
    localStorage.setItem("formData", JSON.stringify(formData));
  
    displaySuccessMessage("Sucessfully Booked!");
  });
  
  function displaySuccessMessage(message) {
    var messageContainer = document.getElementById("message-container");
    messageContainer.style.display = "block";
    messageContainer.style.color = "green";
    messageContainer.textContent = message;
  }
  
  function displayErrorMessage(message) {
    var messageContainer = document.getElementById("message-container");
    messageContainer.style.display = "block";
    messageContainer.style.color = "red";
    messageContainer.textContent = message;
  }
  