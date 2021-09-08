// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const submitButton = document.querySelector("#submit");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
});

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  if (!name || !email || !message) {
    window.alert("Please fillin mandatory fields");
    return;
  }
  const formData = new FormData();
  formData.set("name", name);
  formData.set("email", email);
  formData.set("message", message);
  fetch("https://formsubmit.co/ajax/developeramansingh1@gmail.com", {
    method: "POST",
    data: formData,
    dataType: "json",
  })
    .then((resp) => resp.json())
    .then((response) => {
      if (response.success === "true") {
        document.querySelector(".contact > .main-container").style.display =
          "none";
        document.querySelector(".thankyou-container").style.display = "block";
      }
    });
});
