document
    .getElementById("join_form")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_0upvgs5";
    const templateID = "template_7l4898t";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
        console.log("We have received your application!", response.status, response.text);
        alert("We have received your application!");
        },
        (error) => {xx
        console.log("FAILED...", error);
        alert("FAILED...", error);
        }
    );
});