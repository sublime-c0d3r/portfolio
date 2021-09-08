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
  const contactForm = document.querySelector(".contact__form");
  const formData = new FormData(contactForm);
  const getFormValue = (item) => formData.get(item);
  if (
    !getFormValue("name") ||
    !getFormValue("email") ||
    !getFormValue("message")
  ) {
    window.alert("Please fillin mandatory fields");
    return;
  }
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form submitted successfully."))
    .catch((e) => console.log(e));
});
