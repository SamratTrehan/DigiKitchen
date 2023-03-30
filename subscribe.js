const subscribeBtn = document.getElementById("subscribe-btn");

subscribeBtn.addEventListener("click", function() {
  // Send a request to the server to subscribe the user
  // ...

  // Display the success message
  const successMsg = document.createElement("p");
  successMsg.textContent = "Successfully Subscribed!";
  console.log(successMsg);
});
