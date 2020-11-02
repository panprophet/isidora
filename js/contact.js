var orgText 

function submitForm(event) {
  //event.preventDefault();
  let text = document.getElementById("form-status-message");
  if (!orgText && text) orgText = text.innerHTML
  let email = document.getElementById("form-email").value;
  let name = document.getElementById("form-name").value;
  let title = document.getElementById("form-title").value;
  let message = document.getElementById("form-message").value;
 // let nachname = document.getElementById("form-nachname").value;
//  let phone = document.getElementById("form-phone").value;
//  let address = document.getElementById("form-address").value;
//  let plz = document.getElementById("form-plz").value;
 // let company = document.getElementById("form-company").value;
  if ( !email || !name || !title || !message) {
    text.style.display = 'block'
    text.innerHTML = "Molimo popunite sva neophodna polja";
    text.classList.remove("text-dark");
    text.classList.remove("text-grey");
    text.classList.add("text-orange");
    return;
  }
  let data = {
    email: email,
    name: name,
    title: title,
    message: message
  };

  let form_data = new FormData();
  for (var i in data) {
    form_data.append(i, data[i]);
  }
  fetch("api/mail.php", {
    method: "post",
    body: form_data
  }).then(response => {
     // if (response.ok) {
        clear_form();
        text.style.display = 'block'
        text.innerHTML = orgText //"Message sent";
        text.classList.remove("text-orange");
        text.classList.remove("text-grey");
        text.classList.add("text-dark");
     // }
    })
    //.then(res => console.log(res));
}

function clear_form() {
  document.getElementById("form-email").value = "";
  document.getElementById("form-name").value = "";
  document.getElementById("form-title").value = "";
  document.getElementById("form-message").value = "";
}
