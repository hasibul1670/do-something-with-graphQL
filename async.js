const displayMessage = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 5000);
  });
}

displayMessage("Hello, World!").then(() => {
  console.log("This message appears after the delay.");
  console.log("This message appears immediately after the function call.");
})