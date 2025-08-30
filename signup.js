document.addEventListener("DOMContentLoaded", function () {
  const userTypeSelect = document.getElementById("user-type");
  const conductorFields = document.getElementById("conductor-fields");
  const universitarioFields = document.getElementById("universitario-fields");

  userTypeSelect.addEventListener("change", function () {
    if (this.value === "conductor") {
      conductorFields.classList.remove("hidden");
      universitarioFields.classList.add("hidden");
      
      document.getElementById("vehicle-type").required = true;
      document.getElementById("license").required = true;

      
      document.getElementById("career").required = false;
    } else if (this.value === "universitario") {
      universitarioFields.classList.remove("hidden");
      conductorFields.classList.add("hidden");
      
      document.getElementById("career").required = true;

     
      document.getElementById("vehicle-type").required = false;
      document.getElementById("license").required = false;
    } else {
      conductorFields.classList.add("hidden");
      universitarioFields.classList.add("hidden");


      document.getElementById("vehicle-type").required = false;
      document.getElementById("license").required = false;
      document.getElementById("career").required = false;
    }
  });


});
