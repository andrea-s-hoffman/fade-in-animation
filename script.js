const crystalBall = document.querySelector(".crystal-ball");

crystalBall.addEventListener("click", () => {
  const text = document.createElement("p");
  text.textContent = "Lorem Ipsum";
  text.classList.add("text");
  setTimeout(() => {
    text.classList.add("fade-in");
  }, 100);
  crystalBall.append(text);
});
