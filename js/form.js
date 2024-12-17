document.addEventListener("DOMContentLoaded", function () {
    // Selección de elementos
    const formulario = document.getElementById("miFormulario");
    const inputEmail = document.getElementById("email");
    const inputTelefono = document.getElementById("telefono");

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validaciones
      const emailValor = inputEmail.value.trim();
      const telefonoValor = inputTelefono.value.trim();
      const regexTelefono = /^[0-9]{7,10}$/; // Regex para números de 7 a 10 dígitos
      let valid = true;

      // Validación del email
      if (!emailValor.includes("@")) {
        inputEmail.classList.add("error");
        inputEmail.classList.remove("success");
        alert("El email debe contener el símbolo '@'.");
        valid = false;
      } else {
        inputEmail.classList.add("success");
        inputEmail.classList.remove("error");
      }

      // Validación del teléfono
      if (!regexTelefono.test(telefonoValor)) {
        inputTelefono.classList.add("error");
        inputTelefono.classList.remove("success");
        alert("El número de teléfono debe tener entre 7 y 10 dígitos.");
        valid = false;
      } else {
        inputTelefono.classList.add("success");
        inputTelefono.classList.remove("error");
      }

      // Si ambas validaciones son correctas, se envía el formulario
      if (valid) {
        alert("Formulario enviado correctamente.");
        formulario.submit();
      }
    });

    // Limpia estilos al escribir en los campos
    inputEmail.addEventListener("input", () => {
      inputEmail.classList.remove("error");
      inputEmail.classList.remove("success");
    });

    inputTelefono.addEventListener("input", () => {
      inputTelefono.classList.remove("error");
      inputTelefono.classList.remove("success");
    });
  });