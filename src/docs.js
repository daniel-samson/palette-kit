document.addEventListener("DOMContentLoaded", () => {
  //
  //
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  //
  //
  const hue = document.querySelector("#hue-slider");
  const sat = document.querySelector("#sat-slider");

  function update() {
    document.documentElement.style.setProperty("--palette-color", `hsl(${hue.value}, ${sat.value}%, 50%)`);
    document.documentElement.style.setProperty("--palette-hue", hue.value);
    document.documentElement.style.setProperty("--palette-saturation", `${sat.value}%`);
    document.querySelector("#hue-value").textContent = `${hue.value}`;
    document.querySelector("#sat-value").textContent = `${sat.value}%`;
  }

  hue.addEventListener("input", () => {
    update();
  });

  sat.addEventListener("input", () => {
    update();
  });

  //
  //
  document.querySelectorAll('.theme-color').forEach(element => {
    element.addEventListener('click', () => {
      hue.value = element.getAttribute('data-hue');
      sat.value = element.getAttribute('data-sat');
      update();
    })
  });

  // set initial colors to style sheet
  document.querySelector("#hue-value").textContent = document.documentElement.style.getPropertyValue("--palette-hue");
  document.querySelector("#hue-slider").value = document.documentElement.style.getPropertyValue("--palette-hue");
  document.querySelector("#sat-value").textContent = `${document.documentElement.style.getPropertyValue("--palette-saturation")}%`;
  document.querySelector("#sat-slider").value = `${document.documentElement.style.getPropertyValue("--palette-saturation")}%`;
  update();


})