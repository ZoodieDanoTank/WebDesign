function showImage(imageNumber) {
    var imageViewer = document.getElementById("imageViewer");
    var largeImage = document.getElementById("largeImage");
    var imageDescription = document.getElementById("imageDescription");

    // Update the large image source and description based on the clicked thumbnail
    switch (imageNumber) {
        case 1:
            largeImage.src = "large6.jpg";
            imageDescription.textContent = "Make money work for you.";
            break;
        case 2:
            largeImage.src = "large62.jpg";
            imageDescription.textContent = "Enjoy the work more than the goal.";
            break;
        case 3:
            largeImage.src = "large37.jpg";
            imageDescription.textContent = "Manifest every day.";
            break;
        case 4:
            largeImage.src = "13131313123wadadadae13131.jpg";
            imageDescription.textContent = "yerrrr.";
            break;
        default:
            break;
    }

    // Show the image viewer container
    imageViewer.style.display = "block";
}

function closeImage() {
    var imageViewer = document.getElementById("imageViewer");
    imageViewer.style.display = "none";
}
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;

    // Check if any of the mandatory fields are empty
    if (name === "" || email === "" || phone === "" || country === "" || message === "") {
        alert("Please fill in all the mandatory fields.");
        return false;
    }

    // You can add more specific validations for each field if needed

    // If all fields are filled, the form can be submitted
    return true;
}

