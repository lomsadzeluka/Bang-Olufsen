let add_buttons = document.getElementsByClassName("button");
console.log(add_buttons);
let bl = add_buttons.length;

for (let i = 0; i < bl; i++) {
  this.classList.toggle("active");
  add_buttons[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      this.textContent = "დამატებულია";
    } else {
      this.textContent = "დამატება";
    }
  });
}
