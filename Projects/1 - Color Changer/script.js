const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = "#FF5733"; 
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "#3380FF"; 
    } 
    if (e.target.id === "green") {
      body.style.backgroundColor = "#33FF7A"; 
    } 
    if (e.target.id === "purple") {
      body.style.backgroundColor = "#B533FF"; 
    } 
    
    btn.forEach(btn => btn.classList.remove('active'));

    
    e.target.classList.add('active');
  });
});
