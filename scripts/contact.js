document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_0upvgs5";
    const templateID = "template_q4o773s";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
        console.log("We have recieved your message!", response.status, response.text);
        alert("SUCCESS!");
        },
        (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
        }
    );
});