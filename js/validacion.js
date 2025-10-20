const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const textArea = document.getElementById("message").value;

  if (nombre === "" || email === "" || textArea === "") {
    alert("Por favor, complete todos los campos del formulario para enviarlo.");
  } else {
    alert("Formulario enviado con Exito");
  }
});
