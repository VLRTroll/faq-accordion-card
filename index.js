const details = [...document.querySelectorAll("details")];

details.forEach((d) => {
  d.addEventListener("click", (e) => {
    e.shiftKey ||
      details.filter((i) => i != d).forEach((i) => i.removeAttribute("open"));
  });
});
