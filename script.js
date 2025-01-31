// function contact() {
//     let username = document.querySelector("#name").value;
//     alert(`Thanks ${username} for reaching me out.\nI will reply as soon as possible.`)

// }






{
    
function showAlert() {
    let username = document.querySelector("#name").value;
            username = username.charAt(0).toUpperCase() + username.slice(1);

    const alertBox = document.getElementById('alert-box');
    const alertMessage = document.getElementById('alert-message');



    
    
    // Set the message for the alert
    alertMessage.textContent = `Hello ${username}, Thanks for reaching me out. I will contact You as soon as possible.`;
    
    // Show the alert box
    alertBox.style.display = 'block';
  }

function closeAlert() {


    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'none';
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#message").value = '';
    

  }
}